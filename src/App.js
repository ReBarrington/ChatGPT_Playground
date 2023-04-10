import React, { useState } from 'react';
import Chat from './components/Chat';
import CodeWindow from './components/CodeWindow';
import PersonaDropdown from './components/PersonaDropdown';
import { Configuration, OpenAIApi } from "openai";
import './App.css';

const App = () => {
  const [persona, setPersona] = useState('software engineer');
  const [chatHistory, setChatHistory] = useState([]);
  const [code, setCode] = useState('');

  const openai = new OpenAIApi(new Configuration({
    organization: process.env.REACT_APP_OPENAI_ORGANIZATION,
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
  }));

  const handleSendMessageAsync = async (message) => {
    chatHistory.push({ text: message, sender: 'me' });

    // Send message to ChatGPT API
    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    })
      .then(result => {
        var response = result.data.choices[0].message.content;
        chatHistory.push({ text: response, sender: 'GPT' });
        return true;
      })
      .catch(err => {
        console.log(err);
        return false;
      })

  };

  const handlePersonaChange = (newPersona) => {
    setPersona(newPersona);
    setChatHistory([]);
    setCode('');
  };

  return (
    <div>
      <h1>ChatGPT-style Web App</h1>
      <PersonaDropdown
        options={['engineer', 'analyst']}
        onChange={handlePersonaChange}
      />
      <Chat persona={persona} chatHistory={chatHistory} onSendMessageAsync={handleSendMessageAsync} />
      <CodeWindow code={code} />
    </div>
  );
}

export default App;
