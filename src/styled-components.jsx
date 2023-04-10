import styled from 'styled-components';

export const ChatWindow = styled.div`
  height: 50%;
  overflow-y: scroll;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const CodeWindowContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
`;

export const ExportButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    margin: 0 1rem;
  }
`;

export const PersonaDropdownContainer = styled.div`
  margin: 1rem auto;
`;

export const PromptLibraryContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;

  button {
    background-color: #fff;
    color: #2780e3;
    border: 1px solid #2780e3;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: #f8f8f8;
    }

    &:active {
      background-color: #e5e5e5;
    }
  }

  div {
    margin-bottom: 0.5rem;
    cursor: pointer;
    font-size: 0.875rem;

    &:hover {
      background-color: #f8f8f8;
    }

    &:active {
      background-color: #e5e5e5;
    }
  }
`;

export const ChatInput = styled.input`
    border: none;
    background-color: #f7f7f7;
    color: #333;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 1rem;
    box-shadow: 0 0 0 1px #d9d9d9;
    outline: none;
    transition: box-shadow 0.2s ease-in-out;

    &:focus {
    box-shadow: 0 0 0 2px #2780e3;
    }

    ::placeholder {
    color: #999;
    }
`;

export const PrimaryButton = styled.button`
  background-color: #fff;
  color: #2780e3;
  border: 1px solid #2780e3;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #f8f8f8;
  }

  &:active {
    background-color: #e5e5e5;
  }
`;

export const SecondaryButton = styled.button`
  background-color: #f8f8f8;
  color: #444;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }

  &:active {
    background-color: #ccc;
  }
`;
