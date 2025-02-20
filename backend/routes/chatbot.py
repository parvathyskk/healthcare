from fastapi import APIRouter
from pydantic import BaseModel
import spacy

router = APIRouter()
nlp = spacy.load("en_core_web_sm")

class Message(BaseModel):
    message: str

@router.post("/")
async def chatbot_response(msg: Message):
    doc = nlp(msg.message.lower())
    response = "I'm not sure, but a doctor can help."  # Default response
    
    if "fever" in msg.message:
        response = "You might have a viral infection. Would you like to consult a doctor?"
    
    return {"response": response}
