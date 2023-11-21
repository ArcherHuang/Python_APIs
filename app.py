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
    print(f"option: {option}")
    print(f"sample_dataset_id: {sample_dataset_id}")
    print(f"model_id: {model_id}")
    print(f"llm_url: {llm_url}")
    return jsonify({
        "status": "ok",
        "response": request_data,
    }) 
  
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6000)