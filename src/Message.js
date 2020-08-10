import React, { forwardRef } from 'react'
import "./Message.css";
import { Card, CardContent, Typography } from '@material-ui/core';
import moment from "moment";

const Message = forwardRef(({ user, message }, ref) => {
    const isUser = user === message.user;
    console.log(message)
    return (        
        <div ref={ref} className={`message__card ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography                        
                        variant="subtitle1"
                        color="white"
                        component="p"
                    >
                     {!isUser && `${message.user || 'Unknown User'}:`} {message.text}
                    </Typography>
                </CardContent>                
            </Card>           
            <Typography 
                variant="caption"
                component="p"
                className={isUser ? "message__timeUser" : "message__time"}
            >{moment.unix(message.timestamp.seconds).fromNow()}</Typography>         
        </div>
    )
});

export default Message
