# ChatGPT Web App

This is a web app that allows employees to chat with an AI-powered ChatGPT model. It includes a variety of features, such as Active Directory authentication, chat history, message exporting, and persona selection.

## Installation

To run the app, you will need to have Node.js and npm installed on your machine. You can download them from the official Node.js website: https://nodejs.org/

Once you have Node.js and npm installed, you can clone this repository and install the required dependencies by running the following commands in your terminal:

```
git clone https://github.com/your-username/chatgpt-web-app.git
cd chatgpt-web-app
npm install
```


## Configuration

Before running the app, you will need to configure your API key for the OpenAI ChatGPT API. To do this, create a file named `.env` in the root of your project and add the following line, replacing `YOUR_API_KEY` with your actual API key:

```
REACT_APP_OPENAI_API_KEY=YOUR_API_KEY
REACT_APP_OPENAI_ORGANIZATION=YOUR_ORGANIZATION_ID
```


## Usage

To start the app, run the following command in your terminal:

```
npm start
```


This will start the app and open it in your default web browser.

You can select a persona from the dropdown box to change the tone of the conversation. You can type messages into the input field at the bottom of the chat window and press Enter to send them. The chat history will be displayed in the chat window, with your messages on the right and the ChatGPT responses on the left.

You can export the chat history in various formats by clicking the export buttons at the bottom of the chat window.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure to follow the project's coding conventions and test your changes thoroughly before submitting a pull request.
