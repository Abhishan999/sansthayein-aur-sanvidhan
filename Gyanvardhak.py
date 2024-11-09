import os
import requests

# Set your Groq API Key and endpoint
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_API_URL = "https://api.groq.ai/v1/completion"  # Update this URL if Groq’s API URL is different

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

# Testing the chatbot in a simple loop
if __name__ == "__main__":
    print("Starting the chatbot...")
    user_input = input("You: ")
    while user_input.lower() != "exit":
        bot_response = get_bot_response(user_input)
        print("Gyanvardhak:", bot_response)
        user_input = input("You: ")
