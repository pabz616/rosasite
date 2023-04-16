//UNIT TEST WITH BeforeAll / AfterAll

const setUp = () => console.log('*** Test Has Started ***');
const tearDown = () => console.log('*** Test Is Finished ***');

describe('new account creations checks', () =>{
    beforeAll(() => setUp());
    afterAll(() => tearDown());

    test('new account 1 created', () => {
        const account = 'account1'
        expect(account).toEqual('account1')
    });

    test('new account 2 created', () => {
        const account = 'account2'
        expect(account).toEqual('account2')
    });
})