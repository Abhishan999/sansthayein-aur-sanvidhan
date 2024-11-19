import requests
import spacy
from langdetect import detect  # Import langdetect to detect language
from rich import print  # Optional, for better formatting
import re  # For regex to check if the text contains Hindi

# Load spaCy model
try:
    nlp = spacy.load("en_core_web_sm")
except OSError:
    print("[bold red]The spaCy model 'en_core_web_sm' is not installed. Run 'python -m spacy download en_core_web_sm' to install it.[/bold red]")
    exit()

# Set your Groq API Key and endpoint
GROQ_API_KEY = "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"  # Update with your Groq API key
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"  # Update if needed

# Initialize a variable to track if it's the first interaction
is_first_interaction = True

# Function to detect Hindi text using regex for Devanagari script
def is_hindi(text):
    hindi_pattern = r'[\u0900-\u097F]'  # Unicode range for Devanagari characters
    return bool(re.search(hindi_pattern, text))

# Function to analyze user input using NLP
def analyze_input(user_text):
    doc = nlp(user_text)
    keywords = [token.text for token in doc if token.is_alpha and not token.is_stop]
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    return {"keywords": keywords, "entities": entities}

# Function to get response from Groq AI
def get_bot_response(user_text):
    global is_first_interaction

    # Check if it's the first interaction
    if is_first_interaction:
        is_first_interaction = False
        return "Hello! I'm Gyanvardhak, your guide to the Indian Constitution. Ask me anything about the Constitution, and I'll be happy to help!"

    try:
        # Check if the input contains Hindi text
        if is_hindi(user_text):
            # If Hindi is detected, we provide a Hindi greeting or response
            if user_text.strip().lower() in ["नमस्ते", "नमस्कार", "हैलो"]:
                return "नमस्ते! मैं ज्ञानवर्धक हूं, भारतीय संविधान के बारे में आपकी सहायता के लिए यहाँ हूँ। कृपया मुझसे कोई भी प्रश्न पूछें।"
            else:
                # Construct a prompt for Hindi text
                analysis = analyze_input(user_text)
                keywords = ", ".join(analysis["keywords"])
                entities = analysis["entities"]

                # Construct a prompt to include NLP analysis in Hindi
                prompt = (
                    f"आप भारतीय संविधान के विशेषज्ञ हैं। उपयोगकर्ता ने पूछा: '{user_text}'. "
                    f"यहाँ कुछ पहचाने गए कीवर्ड हैं: {keywords}. "
                    f"यहाँ कुछ पहचाने गए एंटिटीज़ हैं: {entities if entities else 'कोई नहीं'}."
                    f" कृपया एक विस्तृत उत्तर दें और इसका उत्तर हिंदी में दें।"
                )
                language = 'hi'  # Indicate that the response should be in Hindi

        else:
            # If English (or another language) is detected, process in English
            analysis = analyze_input(user_text)
            keywords = ", ".join(analysis["keywords"])
            entities = analysis["entities"]

            # Construct a prompt to include NLP analysis
            prompt = (
                f"You are an expert on the Indian Constitution. A user has asked: '{user_text}'. "
                f"Here are some identified keywords: {keywords}. "
                f"Here are identified entities: {entities if entities else 'None'}. "
                f"Please provide a detailed response in English."
            )
            language = 'en'  # Indicate that the response should be in English

        # Define the payload for the API request
        payload = {
            "model": "llama3-8b-8192",  # Use the correct model ID
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": 2048,  # Increased for longer responses
            "temperature": 0.7,  # Optional for balanced creativity
            "top_p": 1.0         # Optional for randomness control
        }

        # Define the headers for authentication
        headers = {
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json"
        }

        # Make the POST request to the Groq API
        response = requests.post(GROQ_API_URL, json=payload, headers=headers)
        response.raise_for_status()  # Raise an error if the request fails

        # Parse and extract the bot's response
        response_json = response.json()
        bot_reply = response_json.get("choices", [{}])[0].get("message", {}).get("content", "").strip()

        # Ensure that the response is in the correct language
        if language == 'hi' and bot_reply:
            return bot_reply  # Respond in Hindi if Hindi is detected
        elif language == 'en' and bot_reply:
            return bot_reply  # Respond in English if English is detected

        return "Sorry, I couldn't understand the response."

    except requests.exceptions.RequestException as req_err:
        print(f"[bold red]Request Error:[/bold red] {req_err}")
        return "Sorry, I'm unable to connect to the service right now."

    except ValueError as val_err:
        print(f"[bold red]Response Error:[/bold red] {val_err}")
        return "Sorry, I couldn't understand the response from the service."

    except Exception as e:
        print(f"[bold red]Unexpected Error:[/bold red] {e}")
        return "Sorry, I encountered an unexpected error."

# Main function to test the chatbot
if __name__ == "__main__":
    print("[bold blue]Starting the chatbot...[/bold blue] (Type 'exit' to quit)")
    user_input = input("You: ")
    while user_input.lower() != "exit":
        bot_response = get_bot_response(user_input)
        print(f"[bold green]Gyanvardhak:[/bold green] {bot_response}")
        user_input = input("You: ")
