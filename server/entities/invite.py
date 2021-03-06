from server.entities.database_object import DatabaseObject


class Invite(DatabaseObject):
    def __init__(self, sender_id, receiver_id, invite_type, event_id="", id=""):
        super().__init__(id)
        self.sender_id = sender_id
        self.receiver_id = receiver_id
        self.type = invite_type
        self.event_id = event_id  # ид куда приглашают

    def to_json(self):
        return {
            'id': self.id,
            'sender_id': self.sender_id,
            'receiver_id': self.receiver_id,
            'type': self.type,
            'event_id': self.event_id
        }
