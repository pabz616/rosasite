//ASYNCHRONOUS TESTING IN JEST
'* CALL BACKS'
'* PROMISES'
'* ASYNC/AWAITS'

const fetchDataOverApi = require('../modules/fakeService')

//ASYNC EXAMPLE
test('the user data for user1', async () =>{
    const data = await fetchDataOverApi();
    expect(data).toBe('John');
});