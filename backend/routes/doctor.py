from fastapi import APIRouter
from firebase_admin import firestore

router = APIRouter()
db = firestore.client()

@router.post("/add_patient")
async def add_patient(name: str, issue: str):
    db.collection("patients").add({"name": name, "issue": issue})
    return {"message": "Patient added"}

@router.get("/get_patients")
async def get_patients():
    docs = db.collection("patients").stream()
    return [{"id": doc.id, **doc.to_dict()} for doc in docs]
