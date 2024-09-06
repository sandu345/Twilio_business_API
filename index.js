require('dotenv').config();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function createMessage() {
    try {
        const message = await client.messages.create({
            body: "Hello, Priyanka!",
            from: "whatsapp:+14155238886",
            to: "whatsapp:+94714462339",
        });
        console.log(message.body);
    } catch (error) {
        console.error("Error sending message:", error);
    }
}

createMessage();
