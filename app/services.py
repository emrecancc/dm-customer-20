from app.models import User

class UserService:
    def __init__(self, db):
        self.db = db

    def get_user(self, user_id):
        return self.db.query(User).filter(User.id == user_id).first()
