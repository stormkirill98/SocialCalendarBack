from server.database import chat_dao, user_dao
from server.entities.chats.dialog import Dialog
from server.utils.chats import chat_utils


def create_dialog(user_id_1, user_id_2):
    """Create and save dialog to mongoDB,
       then add this dialog to users on mongoDB"""

    if not user_dao.is_exist_by_id(user_id_1) or not user_dao.is_exist_by_id(user_id_2):
        print("create_dialog: id='{id1}' or id='{id2}' are not valid or are not exists".format(id1=user_id_1,
                                                                                               id2=user_id_2))
        return None

    # create and save dialog
    dialog = Dialog(user_id_1, user_id_2)
    chat_dao.save_chat(dialog)

    # add chat to users
    user_dao.add_chat(user_id_1, dialog.id)
    user_dao.add_chat(user_id_2, dialog.id)

    return dialog


def delete_dialog(dialog_id):
    """Delete dialog, remove it in users, remove all msg's in it"""

    if not chat_dao.dialog_is_exist(dialog_id):
        print("delete_dialog: id='{id}' is not valid or is not exists".format(id=dialog_id))
        return

    # get dialog by id
    dialog = chat_dao.get_dialog(dialog_id)

    # delete dialog from user
    user_dao.delete_chat(dialog.user_id_1, dialog_id)
    user_dao.delete_chat(dialog.user_id_2, dialog_id)

    chat_utils.delete_all_msg(dialog)

    # delete dialog
    chat_dao.delete_dialog(dialog_id)
