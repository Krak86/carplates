const multipart = require("parse-multipart");
const fetch = require('node-fetch');
const FormData = require('form-data');
const url = process.env.AZURE_FUNC_PLATE_RECOGNIZER_EXTERNAL_SERVICE_URL || "https://api.platerecognizer.com/v1/plate-reader/";
async function sendData(body) {
    return fetch(url, {
        method: 'POST',
        headers: {
            "Authorization": "Token " + process.env.AZURE_FUNC_PLATE_RECOGNIZER_TOKEN
        },
        body: body
    })
    .then(res => res.json())
    .then(json => json)
    .catch((err) => err);
}
module.exports = async function (context, req) {
    if (!(req.body)) {
       context.res = {
            status: 418,
            body: "Please provide a request body"
        };
    }
    var bodyBuffer = Buffer.from(req.body);
    var boundary = multipart.getBoundary(req.headers['content-type']);
    var parts = multipart.Parse(bodyBuffer, boundary);
    let body = new FormData();
    body.append('upload', parts[0].data, {
        contentType: parts[0].type,
        filename: parts[0].filename,
    });
    const json = await sendData(body);
    context.res = {
        body: json
    }
    context.done();
};