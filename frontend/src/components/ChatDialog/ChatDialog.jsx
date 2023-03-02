import { useState } from "react";
import { Search, MoreVert } from "@mui/icons-material";
import { EMPTY_CHAT_IMAGE, EMPTY_PROFILE_PICTURE, CHAT_BACKGROUND_IMAGE } from "../../constants/constants";
import "./ChatDialog.css";

const ChatDialog = () => {
    const [emptyChat, setEmptyChat] = useState(false);

    return (
        <div className="chatDialog">
            {emptyChat ? (<img src={EMPTY_CHAT_IMAGE} alt="" id="emptyChatImage" />) : (
                <>
                    <div className="chatDialog--nav">
                        <div className="nav--user">
                            <img src={EMPTY_PROFILE_PICTURE} alt="" />
                            <div className="user--active">
                                <p id="userName">Harshvardhan Singh</p>
                                <p id="userLastActive">last seen today at 9:45 p.m</p>
                            </div>
                        </div>
                        <div className="nav--icons">
                            <Search style={{ backgroundColor: "#e0e4eb" }} />
                            <MoreVert style={{ backgroundColor: "#e0e4eb" }} />
                        </div>
                    </div>
                    <div className="chat--area">
                        <img src={CHAT_BACKGROUND_IMAGE} alt="" />
                    </div>
                    <div>

                    </div>
                </>
            )}
        </div>
    )
}

export default ChatDialog;