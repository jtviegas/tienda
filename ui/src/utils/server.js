import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'
import { factory, manyOf, primaryKey } from '@mswjs/data'
import { nanoid } from '@reduxjs/toolkit'
import { faker } from '@faker-js/faker'


const NUM_ITEMS = 7
const DUMMY_PIC_URL="https://picsum.photos/200/300/?blur=2"

// Add an extra delay to all endpoints, so loading spinners show up.
const ARTIFICIAL_DELAY_MS = 2000

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/* RNG setup */

// Set up a seeded random number generator, so that we get
// a consistent set of users / entries each time the page loads.
// This can be reset by deleting this localStorage value,
// or turned off by setting `useSeededRNG` to false.
let useSeededRNG = true

if (useSeededRNG) {
  let randomSeedString = localStorage.getItem('randomTimestampSeed')
  let seedDate

  if (randomSeedString) {
    seedDate = new Date(randomSeedString)
  } else {
    seedDate = new Date()
    randomSeedString = seedDate.toISOString()
    localStorage.setItem('randomTimestampSeed', randomSeedString)
  }

  faker.seed(seedDate.getTime())
}

function getRandomInt(min, max) {
  return faker.number.int({ min, max })
}

const randomFromArray = (array) => {
  const index = getRandomInt(0, array.length - 1)
  return array[index]
}

/* MSW Data Model Setup */

export const db = factory({
  image: {
    id: primaryKey(nanoid),
    name: String,
    url: String,
    data: String
  },
  item: {
    id: primaryKey(nanoid),
    creation: Number,
    name: String,
    price: Number,
    family: String,
    category: String,
    subcategory: String,
    description: String,
    images: Array
  },
  user: {
    id: primaryKey(nanoid),
    email: String,
    externalId: String,
    creation: Number,
    isAdmin: Boolean,
    tags: [String]
  }
})

const createImageData = () => {
  const name = faker.commerce.product()
  const url = DUMMY_PIC_URL
  return {
    name: name,
    url: url,
  }
}

const createListOfImageData = () => {
  let r = []
  let n = faker.number.int({min: 1, max: 5})
  for (let i =0; i <= n; i++) {
    r.push(createImageData())
  }
  return r
}

const createItemData = () => {
  return {
    creation: faker.date.recent().getTime(),
    name: faker.commerce.product(),
    price: (faker.number.float * 100),
    family: faker.commerce.product(),
    category: faker.commerce.product(),
    subcategory: faker.commerce.product(),
    description: faker.lorem.paragraphs(),
    images: createListOfImageData(),
  }
}

// Create an initial set of users and posts
for (let i = 0; i < NUM_ITEMS; i++) {
  let item = createItemData()
  db.item.create(item)
}

/* MSW REST API Handlers */

export const handlers = [
  http.get('/fakeApi/items', async function () {
    return HttpResponse.json(db.item.getAll())
  }),
  http.post('/fakeApi/items', async function ({ request }) {
    const data = await request.json()

    if (data.content === 'error') {
      await delay(ARTIFICIAL_DELAY_MS)

      return new HttpResponse(
        JSON.stringify('Server error saving this post!'),
        {
          status: 500,
        },
      )
    }
    data.creation = new Date().getTime()
    const item = db.item.create(data)
    await delay(ARTIFICIAL_DELAY_MS)
    return HttpResponse.json(item)
  }),
  http.get('/fakeApi/items/:itemId', async function ({ params }) {
    const item = db.item.findFirst({
      where: { id: { equals: params.itemId } },
    })
    await delay(ARTIFICIAL_DELAY_MS)
    return HttpResponse.json(item)
  }),
  http.patch('/fakeApi/items/:itemId', async ({ request, params }) => {
    const { id, ...data } = await request.json()
    const updatedItem = db.item.update({
      where: { id: { equals: params.itemId } },
      data,
    })
    await delay(ARTIFICIAL_DELAY_MS)
    return HttpResponse.json(updatedItem)
  }),
]

export const worker = setupWorker(...handlers)
// worker.printHandlers() // Optional: nice for debugging to see all available route handlers that will be intercepted
