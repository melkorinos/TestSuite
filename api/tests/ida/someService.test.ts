import { expect, test } from 'fixtures/fixtures';

test('[someID] Some Service - Check something', async function ({ services }) {
    await test.step('Check something', async () => {
        const response = await services.someService.getEndpoint();
        console.log(await response.text())
        expect(response).toBeOK();
    });
});
