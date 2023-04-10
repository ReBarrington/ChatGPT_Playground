import React, { useState } from 'react';
import Chat from './components/Chat';
import CodeWindow from './components/CodeWindow';
//import ExportButton from './components/ExportButton';
import PersonaDropdown from './components/PersonaDropdown';
import { Configuration, OpenAIApi } from "openai";
import './App.css';

const App = () => {
  const [persona, setPersona] = useState('software engineer');
  const [chatHistory, setChatHistory] = useState([]);
  const [code, setCode] = useState('');
  
  const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
  }));
  
  const handleSendMessageAsync = async (message) => {
    chatHistory.push({text: message, sender: 'me'});
    
    // Send message to ChatGPT API
    var result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    })

    var response = result.data.choices[0].message.content;
    chatHistory.push({text: response, sender: 'GPT'});
  };
  
  const handlePersonaChange = (newPersona) => {
    setPersona(newPersona);
    setChatHistory([]);
    setCode('');
  };

  const handleExport = (format) => {
    // Export chat history to specified format
  };

  return (
    <div style={{ padding: '25px' }} >
      <h1>ChatGPT-style Web App</h1>
      <PersonaDropdown
        className="persona-dropdown"
        options={['engineer', 'analyst']}
        onChange={handlePersonaChange}
      />
      <Chat className="chat-window" persona={persona} chatHistory={chatHistory} onSendMessageAsync={handleSendMessageAsync} />
      <CodeWindow className="code-window" code={code} />
      {/* <ExportButton className="export-buttons" format="markdown" data={chatHistory} onExport={handleExport} />
      <ExportButton className="export-buttons" format="text" data={chatHistory} onExport={handleExport} /> */}
    </div>
  );
}

export default App;
