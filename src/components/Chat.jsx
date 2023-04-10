import React, { useState } from 'react';
import Loader from './Loader';
import { ChatWindow, ChatInput } from '../styled-components';

const Chat = ({ chatHistory, onSendMessageAsync }) => {
    const [messageText, setMessageText] = useState('');
    const [isBusy, setIsBusy] = useState(false);

    const handleSendClickAsync = async () => {
        if (messageText.trim()) {
            if (await onSendMessageAsync(messageText)) {
                setIsBusy(false);
            };
            setMessageText('');
        }
    };

    const handleKeyPressAsync = async (event) => {
        if (event.key === 'Enter') {
            setIsBusy(true);
            await handleSendClickAsync();
        }
    };

    return (
        <div>
            {isBusy ? (
                <Loader />
            ) : (
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
                    </ChatWindow>
                    <ChatInput
                        type="text"
                        placeholder="Type a message..."
                        value={messageText}
                        onChange={(event) => setMessageText(event.target.value)}
                        onKeyPress={handleKeyPressAsync}
                    />
                </>
            )}
        </div>
    );
}

export default Chat;
