const HAPIStaticFileServer = require('./3_handling');

describe('HAPI server', () => {
  it('should return a static html file on injecting a request to the appropriate path', async () => {
    const response = await HAPIStaticFileServer.inject('/');
    // console.log(response);
    expect(JSON.stringify(response.result)).toEqual('"<html>\\n        <head><title>Hello Handling</title></head>\\n        <body>\\n            Hello Handling\\n        </body>\\n</html>"');
  });
  it('should return a 404 error on injecting a request to the invalid path', async () => {
    const injectOptions = {
      method: 'GET',
      url: '/index.html',
    };

    const response = await HAPIStaticFileServer.inject(injectOptions);
    // console.log(response);
    expect(response.result).toEqual({ error: 'Not Found', message: 'Not Found', statusCode: 404 });
  });
  xit('should return a 404 error on injecting a request to the path but there is no file on server', async () => {
    const injectOptions = {
      method: 'GET',
      url: '/',
    };

    const response = await HAPIStaticFileServer.inject(injectOptions);
    // console.log(response);
    expect(response.result).toEqual({ statusCode: 404, error: 'Not Found', message: 'Not Found' });
  });
});
