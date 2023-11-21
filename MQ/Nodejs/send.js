'use strict';

require('dotenv').config();
const Protocol = require('azure-iot-device-mqtt').Mqtt;
const Client = require('azure-iot-device').Client;
const Message = require('azure-iot-device').Message;

let deviceConnectionString = process.env.IOT_HUB_DEVICE_CONNECTION_STRING;

async function main() {

  const client = Client.fromConnectionString(deviceConnectionString, Protocol);
  console.log('Connecting using connection string: ' + deviceConnectionString);

  try {
    await client.open();

    const msg = new Message(JSON.stringify({
      action: "doTesting",
      option: "1",
      numberOfTestQuestions: 50,
      sampleDatasetId: "S-01-20231101-A-01.csv",
      llmUrl: "https://api.openai.com/v1/completions",
      modelId: "9ff13c73-aa31-537e-bb49-da3ac623e6b7",
      llmRequestJson: {
          model: "text-davinci-003"
      }
  }));
    msg.contentType = 'application/json';
    msg.contentEncoding = 'utf-8';
    await client.sendEvent(msg);
    client.close();
    process.exit();

  } catch (err) {
    console.error('could not connect Plug and Play client or could not attach interval function for telemetry\n' + err.toString());
  }
}

main().then(() => console.log('executed sample')).catch((err) => console.log('error', err));