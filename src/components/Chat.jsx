import React, { useState } from 'react';
import { ChatWindow, ChatInput, PrimaryButton } from '../styled-components';


const Chat = ({ chatHistory, onSendMessageAsync }) => {
    const [messageText, setMessageText] = useState('');

    const handleSendClick = async () => {
        if (messageText.trim()) {
            await onSendMessageAsync(messageText);
            setMessageText('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendClick();
        }
    };

    return (
        <>
            <ChatWindow>
                <div>
                    {chatHistory.map((message, index) => (
                        <div key={index}>
                            <strong>{message.sender}: </strong>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div>
                </div>
            </ChatWindow>
            <ChatInput
                type="text"
                placeholder="Type a message..."
                value={messageText}
                onChange={(event) => setMessageText(event.target.value)}
                onKeyPress={handleKeyPress}
            />
        </>
    );
}

export default Chat;
