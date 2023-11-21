const { EventHubConsumerClient } = require('@azure/event-hubs');

require("dotenv").config();

const connectionString = process.env["EVENTHUB_CONNECTION_STRING"] || "";
const eventHubName = process.env["EVENTHUB_NAME"] || "";
const consumerGroup = process.env["CONSUMER_GROUP_NAME"] || "";

const consumerClient = new EventHubConsumerClient(consumerGroup,
  connectionString, eventHubName);
this.subscription = consumerClient.subscribe({
  processEvents: async (events, context) => {
    console.log(`events: ${JSON.stringify(events)}`);
    await context.updateCheckpoint(events[events.length - 1]);
  },
  // processError: async (err, context) => {
  //   console.log(`Error: ${err}, context: ${context}`);
  // },
});