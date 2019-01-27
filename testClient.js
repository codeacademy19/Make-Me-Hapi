const http = require('http');
const callback = (data) => {
    console.log(data);
};
const httpGet= (callback) => {
    http.get(process.argv[2], (response) => {
        response.setEncoding('utf8');
        response.on('data', callback);
        response.on('error', console.log);    
    }).on('error', console.log);  
};
//httpGet(callback);
module.exports=httpGet;