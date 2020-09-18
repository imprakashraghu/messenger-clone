import React,{ useState, useEffect } from 'react';
import { Button,FormControl,Input,InputLabel,IconButton } from "@material-ui/core";
import Message from "./Message";
import firebase from "firebase";
import db from "./firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    // run only once on component loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc =>({id: doc.id, data: doc.data()})))
    });
  }, []);

  useEffect(() => {
    // setting up the username 
    setUser(prompt('Enter your username'));
  }, []);

  const sendMessage = (event) => {
    // sending message logic here
    event.preventDefault();

    db.collection('messages').add({
      text: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');    
  }

  return (
    <div className="app">
     <div className="app__container">
        <div className="app_title">
            <img className="app__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facebook_Messenger_logo.svg/1920px-Facebook_Messenger_logo.svg.png" />
            <h2>Messenger Clone 🚀</h2>
            <h3>Welcome {user}</h3>
        </div>
        <FlipMove className="app__messages">
          {
            messages.map(({ id, data })=> (
              <Message key={id} user={user} message={data} />
            ))
          }
        </FlipMove>
     </div>
      <form className="app__form">
          <FormControl className="app__formControl">            
            <Input 
              className="app__input" 
              value={input} 
              onChange={event => setInput(event.target.value)} 
              placeholder="Enter your message" />            
            <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
              <SendIcon />
            </IconButton>            
        </FormControl>                
      </form>      
    </div>
  );
}

export default App;
