//UNIT TEST WITH Before / BeforeEach / After / AfterEach

const setUp = () => console.log('Setting up before test run');
const tearDown = () => console.log('**Test Finished**');

describe('new account creations checks', () =>{
    beforeEach(() => setUp());
    afterEach(() => tearDown());

    test('new account 1 created', () => {
        const account = 'account1'
        expect(account).toEqual('account1')
    });

    test('new account 2 created', () => {
        const account = 'account2'
        expect(account).toEqual('account2')
    });
})