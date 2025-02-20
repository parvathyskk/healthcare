from fastapi import APIRouter, HTTPException
import firebase_admin
from firebase_admin import auth, credentials

cred = credentials.Certificate("firebase_key.json")
firebase_admin.initialize_app(cred)

router = APIRouter()

@router.post("/register")
async def register_user(email: str, password: str):
    try:
        user = auth.create_user(email=email, password=password)
        return {"message": "User created", "uid": user.uid}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/login")
async def login_user(email: str, password: str):
    return {"message": "Login not handled here, use Firebase Auth in frontend"}
