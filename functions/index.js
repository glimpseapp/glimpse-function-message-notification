const functions = require('firebase-functions');
exports.helloWorld = functions.pubsub.topic('message-sent').onPublish(event => {

    const pubsubMessage = event.data;
    if (!pubsubMessage.data) {
        console.error("Empty message!?");
        return;
    }

    const encodedData = Buffer.from(pubsubMessage.data, 'base64').toString();
    const data = JSON.parse(encodedData);

    console.log(data)

});
