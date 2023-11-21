# Python_APIs

## API
### test-sample
* URL
  * POST http://localhost:6000/test-sample
* Request Header
  * Content-Type: application/json
* Request Body
```
{
    "option": "1",
    "numberOfTestQuestions": 50,
    "sampleDatasetId": "S-01-20231101-A-01.csv",
    "llmUrl": "https://api.openai.com/v1/completions",
    "modelId": "9ff13c73-aa31-537e-bb49-da3ac623e6b7",
    "llmRequestJson": {
        "model": "text-davinci-003"
    }
}
```
* Response OK
```
{
    "outcome": "Correct rate:13/20",
    "status": "ok",
    "test": "The test maximum is 2720, the test number is 20"
}
```

* Response Error
```
{
    "status": "fail",
    "statusCode": 500,
    "message": ""
}
```

## Run Python Code
* python app.py

![](./Images/Run_Python_Code.png)

## Postman
![](./Images/Postman.png)