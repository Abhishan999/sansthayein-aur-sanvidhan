
import os
import requests
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Set your Groq API Key and endpoint
GROQ_API_KEY = os.getenv("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")
GROQ_API_URL ="https://api.groq.com/openai/v1/chat/completions"
import spacy

app = Flask(__name__)

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data.get("message", "")
    
    # Detect language and prepare response
    doc = nlp(user_input)
    lang = "hindi" if any(token.text in ["नमस्ते", "भारत", "संविधान"] for token in doc) else "english"
    
    if lang == "hindi":
        response = f"आपने पूछा: '{user_input}'. यह भारतीय संविधान के लिए मेरी प्रतिक्रिया है।"
    else:
        response = f"You asked: '{user_input}'. Here's my response for the Indian Constitution."
    
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
letion"  # Update if Groq’s API URL is different

# Initialize a variable to track if it's the first interaction
is_first_interaction = True

# Function to get response from Groq AI
def get_bot_response(user_text):
    global is_first_interaction

    # Check if it's the first interaction and greet the user
    if is_first_interaction:
        greeting = "Hello! I'm Gyanvardhak, your guide to the Indian Constitution. Ask me anything about the Constitution, and I'll be happy to help!"
        is_first_interaction = False  # Set to False after the greeting
        return greeting

    # Continue with the usual response process
    try:
        # Payload for Groq API
        payload = {
            "model": "groq-model-name",  # Replace with the actual model name in Groq
            "prompt": f"You are Gyanvardhak, an AI chatbot that knows everything about the Indian Constitution. Answer the following question in detail: {user_text}",
            "max_tokens": 200,
            "temperature": 0.5
        }

        # Headers for authentication
        headers = {
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json"
        }

        # Make the POST request to Groq API
        response = requests.post(GROQ_API_URL, json=payload, headers=headers)
        response.raise_for_status()  # Raise an error if the request fails

        # Parse the response
        bot_reply = response.json()["choices"][0]["text"].strip()
        return bot_reply
    except Exception as e:
        print("Error:", e)
        return "Sorry, I am having trouble answering your question at the moment."

# Route to serve the HTML page
@app.route("/")
def index():
    return render_template("index.html")

# Route to handle chatbot requests
@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    bot_response = get_bot_response(user_message)
    return jsonify({"response": bot_response})

if __name__ == "__main__":
    app.run(debug=True)
