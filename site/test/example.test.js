import Amplify from "aws-amplify";
import awsExports from "../src/aws-exports";
import Store from '../src/data/graphql_store.js';

Amplify.configure(awsExports);

let store = new Store()

let cleanup = () => {
  store.deleteEntities([])
} 

beforeAll(() => {
  return cleanup();
});


afterAll(() => {
  return cleanup();
});

test('entities should be 0 from the get go', () => {
  return store.getEntities(null, null).then(data => {
    expect(data.length).toBe(0);
  });
});

test('entities should be 1 from now', () => {
  return store.saveEntity({"first_name": "alibaba"}).then(data => {
    expect(data).toBeDefined();
  });
});

test('entities should be 1 now', () => {
  return store.getEntities(null, null).then(data => {
    expect(data.length).toBe(1);
  });
});

test('entities should be 2 from now', () => {
  return store.saveEntity({"first_name": "alibaba2"}).then(data => {
    expect(data).toBeDefined();
  });
});

test('entities should be 2 now', () => {
  return store.getEntities(null, null).then(data => {
    let actual = data.length
    console.log(data)
    expect(actual).toBe(2);
  });
});