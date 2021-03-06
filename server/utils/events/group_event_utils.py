from server.database import user_dao
from server.database.database import id_is_valid
from server.database.events import group_event_dao, event_member_dao
from server.entities.events.group_events.event_member import EventMember


def add_member(event_id, user_id,
               is_can_invite_user=False,
               is_can_delete_user=False,
               is_can_change_event=False,
               is_can_delete_event=False):
    if not id_is_valid(event_id) or not id_is_valid(user_id):
        print("add_member - event_id or user_id is not valid")
        return None

    member = EventMember(event_id, user_id, is_can_invite_user, is_can_delete_user, is_can_change_event,
                         is_can_delete_event)
    member_id = event_member_dao.save(member)
    group_event_dao.add_member(event_id, member_id)

    user_dao.add_event(user_id, event_id)
    event = group_event_dao.get(event_id)
    user_dao.add_chat(user_id, event.chat_id)

    return member_id
