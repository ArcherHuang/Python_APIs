from flask import Flask, jsonify, request

app = Flask(__name__) 

@app.route('/test-sample', methods = ['POST'])   
def doing():   
    request_data = request.get_json()
    print(f"request_data: ${request_data}")
    option = request_data['option']
    sample_dataset_id = request_data['sampleDatasetId']
    model_id = request_data['modelId']
    llm_url = request_data['llmUrl']
    llm_request_json = request_data['llmRequestJson']
    number_of_test_questions = request_data['numberOfTestQuestions']
    print(f"option: {option}")
    print(f"sample_dataset_id: {sample_dataset_id}")
    print(f"model_id: {model_id}")
    print(f"llm_url: {llm_url}")
    print(f"llm_request_json: {llm_request_json}")
    print(f"number_of_test_questions: {number_of_test_questions}")
    return jsonify({
        "status": "ok",
        "test": "The test maximum is 2720, the test number is 20",
        "outcome": "Correct rate:13/20",
    }) 
  
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6000)