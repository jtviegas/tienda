

test('renders learn react link', () => {

    return Promise.resolve(3).then((a) => {
        let r = true;
        if (a === 3)
            console.log("it's great");
        else {
            console.log("not so good");
            r = false;
        } 
        return r;
    }).then( (v) => {
        console.log("result: ", v)
        return expect(v).toEqual(true)
    } );
    
  })