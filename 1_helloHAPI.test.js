const HAPIServer = require('./1_helloHAPI');

describe('HAPI server', () => {
  it('should return "Hello hapi" on injecting a request to the path', async () => {
    const response = await HAPIServer.inject('/');
    // console.log(response);
    expect(response.result).toEqual('Hello hapi');
  });
  it('should return "Hello hapi" on injecting a request to the path', async () => {
    const injectOptions = {
      method: 'GET',
      url: '/',
    };

    const response = await HAPIServer.inject(injectOptions);
    // console.log(response);
    expect(response.result).not.toEqual('Hello hap');
  });
});
