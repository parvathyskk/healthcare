from fastapi import APIRouter
from firebase_admin import firestore

router = APIRouter()
db = firestore.client()

@router.post("/book")
async def book_appointment(patient_name: str, doctor_name: str, time: str):
    db.collection("appointments").add({
        "patient_name": patient_name,
        "doctor_name": doctor_name,
        "time": time
    })
    return {"message": "Appointment booked"}

@router.get("/view")
async def view_appointments():
    docs = db.collection("appointments").stream()
    return [{"id": doc.id, **doc.to_dict()} for doc in docs]
