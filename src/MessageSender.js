import React,{useState, useReducer} from 'react';
import "./MessageSender.css";
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "./firebase";

function MessageSender() {
    const [{user},dispatch]=useStateValue();
    const[input,setInput] = useState('');
    const[imageUrl,setImageUrl]=useState('');
    var timestamp = new Date();
    const URLL="data:image/jpeg;base64,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";
    const handleSubmit =(e) =>{
       e.preventDefault();
       db.collection("posts").add({
            message:input,
            timestamp:timestamp.toGMTString(),
            profilePicture:URLL,
            username:"Deepthi Chowdhary",
            image:imageUrl,




       });
       setInput("");
       setImageUrl("");
    };
    return (

      
        <div className="messageSender">
            <div class="messageSender_top">
                <Avatar/>
                <form>
                    <input
                     value={input}
                     onChange={(e)=> setInput(e.target.value) }
                     className="messageSender_input" placeholder={`What's on your mind, Deepthi?`} />
                    <input 
                    value={imageUrl}
                    onChange={(e)=> setImageUrl(e.target.value) }
                    placeholder={'image URL (Optional)'}/>
                    <button onClick ={handleSubmit} type="submit">
                        Hidden submit
                    
                    </button>
                </form>
            </div>
            <div class="messageSender_bottom">
                   <div className="messageSender_option">
                       <VideocamIcon style={{color:"red"}}/>
                       <h3>Live Video</h3> </div>
                    <div className="messageSender_option">
                       <PhotoLibraryIcon style={{color:"green"}}/>
                       <h3>Photo/Video</h3> </div>
                    <div className="messageSender_option">
                       <InsertEmoticonIcon style={{color:"orange"}}/>
                       <h3>Feeling/Active</h3>
                   </div>
            </div>

        </div>
    )
}

export default MessageSender
