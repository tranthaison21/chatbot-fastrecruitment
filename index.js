const express = require('express')
const bodyParser = require('body-parser')
const {WebhookClient} = require('dialogflow-fulfillment');
const { request, response } = require('express');
const app = express()
app.use(bodyParser.json())
const port = process.env.PORT || 3000

app.get('/dialogflow-fulfillment', (req, res) => {
    res.send("hi")
})

app.post('/dialogflow-fulfillment', express.json(), (req, res) => {
    console.log(JSON.stringify(req.body, 2, ' ' ));
    res.send({
        fulfillmentText: 'Hi'
    })
    const agent = new WebhookClient({
        request: req,
        response: res
    })

    function Tuvan(agent) {
        agent.add("ban can giup gi?")
    }

    let intent = new Map()
    intent.set("ITuvan", Tuvan)

    agent.handleRequest(intent)
})



app.listen(port, () => {
     console.log(`Listening on port ${port}`);
})
//This function will take request and response
