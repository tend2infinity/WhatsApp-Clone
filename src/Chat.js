import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import {AttachFile , MoreVert , SearchOutlined} from "@material-ui/icons"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import "./Chat.css"

function Chat() {
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar />
                <div className="chat-headerInfo">
                    <h3>Room name </h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat-headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>
            <div className="chat-body">
                 <p className="chat-message">
                     <span className="chat-name">Somya
                     </span> This is a message
                     <span className="chat-timestamp">
                         {new Date().toUTCString()}
                     </span>
                     
                     </p>
                 <p className="chat-message chat-receiver">
                     <span className="chat-name">Somya
                     </span> This is a message
                     <span className="chat-timestamp">
                         {new Date().toUTCString()}
                     </span>
                     
                     </p>
                 <p className="chat-message">
                     <span className="chat-name">Somya
                     </span> This is a message
                     <span className="chat-timestamp">
                         {new Date().toUTCString()}
                     </span>
                     
                     </p>
            </div>
            <div className="chat-footer">
                <InsertEmoticonIcon />
                <form>
                    <input 
                    placeholder="Type a message"
                    type="text" />
                    <button type="submit">Send a message</button>
                </form>
                <MicIcon /> 
            </div>
        </div>
    )
}

export default Chat
