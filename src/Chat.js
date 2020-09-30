import { Avatar, IconButton } from '@material-ui/core'
import React,{useState , useEffect} from 'react'
import {AttachFile , MoreVert , SearchOutlined} from "@material-ui/icons"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import "./Chat.css";
import axios from "./axios";
import { useParams } from "react-router-dom"
import db from "./Firebase"
import { useStateValue } from './StateProvider'
import firebase from 'firebase'



function Chat() {
    const [{user} , dispatch] = useStateValue();
    const [input , setInput] = useState('')
    const [seed , setSeed] = useState("");
    const {roomId} = useParams();
    const [roomName , setRoomName] = useState("");
    const [messages , setMessages] = useState([]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
       
    }, [roomId]);

    useEffect(() => { 
        if (roomId) {
          db.collection('rooms').doc(roomId)
          .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
          db.collection("rooms")
          .doc(roomId)
          .collection("messages")
          .orderBy('timestamp' , 'asc')
          .onSnapshot(snapshot => (
              setMessages(snapshot.docs.map(doc => 
                doc.data()))
          ))
        }
        // console.log(messages)

    },[roomId])

    const sendMessage = async (e) => {
            e.preventDefault();
            db.collection("rooms").doc(roomId).collection("messages").add({
                message: input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            setInput("");

    }


    // const sendMessage = async (e) => {
    //     e.preventDefault()

    //     await axios.post('/messages/new',{
    //         message:input,
    //         name:"Demo App",
    //         timestamp:"Just now",
    //         received:false
    //     })

    //     setInput('');
    // }
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat-headerInfo">
                    <h3>{roomName} </h3>
                    <p>Last seen{" "}
                    {new Date(
                        messages[messages.length - 1]?.timestamp?.toDate()
                    ).toString()}

                    </p>
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
                {messages.map((message) => (
                    
                    <p className={`chat-message ${message.name === user.displayName && "chat-receiver"}`}
                    >
                        
                    <span className="chat-name">{message.name}
                    </span> {message.message}
                    <span className="chat-timestamp">
                        {new Date(message?.timestamp?.toDate()).toString()}
                    </span>
                    
                    </p>

                ))}
                 
                 
            
            </div>
            <div className="chat-footer">
                <InsertEmoticonIcon />
                <form>
                    <input 
                    value = {input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text" />
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon /> 
            </div>
        </div>
    )
}

export default Chat
