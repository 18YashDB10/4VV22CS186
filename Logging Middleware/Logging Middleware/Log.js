const axios = require('axios');

async function getAccessToken() {
    let body = {
        "email": "yashdeepakbambore@gmail.com",
        "name": "Yash Deepak Bambore",
        "rollNo": "4VV22CS186",
        "accessCode": "tqTSpD",
        "clientID": "eea8ae0b-2a53-4958-a131-3ffe7ba77f88",
        "clientSecret": "VBkvMkUbdNfxTwYU"
    };

    let POSTURL = "http://20.244.56.144/evaluation-service/auth";
    try {
        const response = await axios.post(POSTURL, body);
        return response.data.access_token;
    } catch (err) {
        throw new Error("Some error occurred");
    }
}

module.exports = async function Log(stack, level, package, message) {

    try {
        const accessToken = await getAccessToken();

        const body = {
            "stack": "backend",
            "level": "error",
            "package": "handler",
            "message": "Recieved something"
        }

        console.log(body);

        const headers = {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${accessToken}`
        };

        const POST_URL = "http://20.244.56.144/evaluation-service/logs";

        const response = await axios.post(POST_URL, body, { headers })
        console.log(response.data);

    }

    catch (err) {
        throw new Error(err);
    }
}