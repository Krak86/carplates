const fetch = require('node-fetch');
const platesmaniaUrl = "https://platesmania.com/mobile/api_photo.php";
const platesmaniaKey = process.env.PLATES_MANIA_KEY || "";

async function sendData(url) {
    return fetch(url, {
        method: 'GET',
        headers: {
            "Accept": "application/json"
        },
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
    const body = req.body;
    const plate = body.plate;
    const url = `${platesmaniaUrl}?key=${platesmaniaKey}&gal=2&nomer=${plate}`;
    const json = await sendData(url);
    context.res = {
        body: json
    }
    context.done();
};