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
      "sampleDatasetId": "S-01-20231101-A-01.csv",
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
      * 2 代表 Fairness
      * 3 代表 Reliability ( MRC )
      * 4 代表 Reliability ( Multiple Choice )
      * 5 代表 Taiwan Culture
      * 6 代表 Privacy
      * 7 代表 Prompt Injection
* Response OK
  ```
  {
      "sampleTestId": "a32a8b52-9e21-5e7a-95fd-65c179ddd15d",
      "outcome": "Correct rate:13/20",
      "status": "ok",
      "test": "The test maximum is 2720, the test number is 20",
      "finishTime": "以台灣時間顯示 YYYYMMDD HH:MM:SS"
  }
  ```

* Response Error
  ```
  {
      "sampleTestId": "a32a8b52-9e21-5e7a-95fd-65c179ddd15d",
      "status": "fail",
      "statusCode": 500,
      "message": "",
      "finishTime": "以台灣時間顯示 YYYYMMDD HH:MM:SS"
  }
  ```

## Run Python Code
* python app.py

![](./Images/Run_Python_Code.png)

## Postman
![](./Images/Postman.png)
