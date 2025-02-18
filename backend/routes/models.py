from fastapi import FastAPI
from routes import chatbot, auth, doctor, appointments

app = FastAPI()

# Include API Routes
app.include_router(chatbot.router, prefix="/chatbot")
app.include_router(auth.router, prefix="/auth")
app.include_router(doctor.router, prefix="/doctor")
app.include_router(appointments.router, prefix="/appointments")

@app.get("/")
async def root():
    return {"message": "Welcome to the Online Healthcare Consultation System"}

# Run Server: uvicorn main:app --host 0.0.0.0 --port 8000 --reload
