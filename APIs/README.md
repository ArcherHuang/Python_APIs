# Python APIs

## API
### 功能 test-sample
* URL
  * POST http://localhost:6000/test-sample
* Request Header
  * Content-Type: application/json
* Request Body
  ```
  {
      "sampleTestId": "a32a8b52-9e21-5e7a-95fd-65c179ddd15d",
      "product": "OpenAI",
      "hostUrl": "https://api.openai.com/v1/completions",
      "option": "1",
      "sampleDatasetId": "S-02-20231122-A-01,S-02-20231122-A-02",
      "numberOfTestQuestions": 50,
      "requestParameters": {
          "model": "text-davinci-003"
          ...
      }
  }
  ```
  * 備註
    * product 的 JSON Key 種類的值如下
      * OpenAI
      * Taiwan-Llama
    * option 的 JSON Key 種類的值如下
      * 1 代表 Accuracy
        * requestParameters
          ```
          {
            "model":"text-davinci-003",
            "temperature":0,
            "max_tokens":200,
            "top_p":1,
            "frequency_penalty":0,
            "presence_penalty":0
          }
          ```
      * 2 代表 Fairness
        * requestParameters
          ```
          {
            "model":"text-davinci-003",
            "temperature":0,
            "max_tokens":10,
            "top_p":1,
            "frequency_penalty":0,
            "presence_penalty":0
          }
          ```
      * 3 代表 Reliability ( MRC )
        * requestParameters
          ```
          {
            "model":"text-davinci-003",
            "temperature":0,
            "max_tokens":2,
            "top_p":1,
            "frequency_penalty":0,
            "presence_penalty":0
          }
          ```
      * 4 代表 Reliability ( Multiple Choice )
        * requestParameters
          ```
          {
            "model":"text-davinci-003",
            "temperature":0,
            "max_tokens":2,
            "top_p":1,
            "frequency_penalty":0,
            "presence_penalty":0
          }
          ```
      * 5 代表 Taiwan Culture
        * requestParameters
          ```
          {
            "model":"text-davinci-003",
            "temperature":0,
            "max_tokens":10,
            "top_p":1,
            "frequency_penalty":0,
            "presence_penalty":0
          }
          ```
      * 6 代表 Privacy
        * requestParameters
          ```
          {
            "model":"text-davinci-003",
            "temperature":0,
            "max_tokens":500,
            "top_p":1,
            "frequency_penalty":0,
            "presence_penalty":0
          }
          ```
      * 7 代表 Prompt Injection
        * requestParameters
          ```
          {
            "model":"text-davinci-003",
            "temperature":0,
            "max_tokens":2000,
            "top_p":1,
            "frequency_penalty":0,
            "presence_penalty":0
          }
          ```
* Response OK
  * executionTime 的單位為秒
  ```
  {
    "finishTime": "2023-11-23 09:00:41",
    "outcome": "Correct rate:26/50",
    "sampleTestId": "a32a8b52-9e21-5e7a-95fd-65c179ddd15d",
    "status": "ok",
    "test": "The test maximum is 324, the test number is 50",
    "executionTime": 60,
  }
  ```

* Response Error
  * executionTime 的單位為秒
  ```
  {
      "sampleTestId": "a32a8b52-9e21-5e7a-95fd-65c179ddd15d",
      "status": "fail",
      "statusCode": 500,
      "message": "",
      "finishTime": "以台灣時間顯示 YYYY-MM-DD HH:MM:SS",
      "executionTime": 10,
  }
  ```

## Run Python Code
* python app.py

![](./Images/Run_Python_Code.png)

## Postman
![](./Images/Postman.png)
