class Message:
    def __init__(self, user_id, datetime, text, id=""):
        self.id = id
        self.user_id = user_id
        self.datetime = datetime
        self.text = text

    def set_id(self, id):
        self.id = id

    def to_json(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'datetime': self.datetime,
            'text': self.text
        }