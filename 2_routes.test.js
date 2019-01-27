const HAPIServer = require('./2_routes');

describe('HAPI server', () => {
  it('should return "Hello {name}" on injecting a request to the path with the appropriate name', async () => {
    const response = await HAPIServer.inject('/ajay');
    // console.log(response);
    expect(response.result).toEqual('Hello ajay');
  });
  it('should return "Hello {name}" on injecting a request to the path with the appropriate name', async () => {
    const injectOptions = {
      method: 'GET',
      url: '/abc',
    };

    const response = await HAPIServer.inject(injectOptions);
    // console.log(response);
    expect(response.result).not.toEqual('Hello Abc');
  });
  it('should return "Hello {name}" on injecting a request to the path with the appropriate name', async () => {
    const injectOptions = {
      method: 'GET',
      url: '/',
    };

    const response = await HAPIServer.inject(injectOptions);
    // console.log(response);
    expect(response.result).toEqual({ statusCode: 404, error: 'Not Found', message: 'Not Found' });
  });
  it('should return "Hello {name}" on injecting a request to the path with the appropriate name', async () => {
    const injectOptions = {
      method: 'GET',
      url: '/123 45',
    };

    const response = await HAPIServer.inject(injectOptions);
    // console.log(response);
    expect(response.result).toEqual('Hello 123%2045');
  });
});
