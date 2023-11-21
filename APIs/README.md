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
    "option": "1",
    "numberOfTestQuestions": 50,
    "sampleDatasetId": "S-01-20231101-A-01.csv",
    "hostUrl": "https://api.openai.com/v1/completions",
    "requestParameters": {
        "model": "text-davinci-003"
    }
}
```
* Response OK
```
{
    "outcome": "Correct rate:13/20",
    "status": "ok",
    "test": "The test maximum is 2720, the test number is 20",
    "finishTime": "以台灣時間顯示 YYYYMMDD HH:MM:SS"
}
```

* Response Error
```
{
    "status": "fail",
    "statusCode": 500,
    "message": "",
    "finishTime": "以台灣時間顯示 YYYYMMDD HH:MM:SS"
}
```

## Run Python Code
* python app.py

![](./Images/Run_Python_Code.png)
