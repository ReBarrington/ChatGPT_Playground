import React, { useState } from 'react';
import { PrimaryButton, CodeWindowContainer } from '../styled-components';

const CodeWindow = ({ code, className }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    // Copy code to clipboard
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <CodeWindowContainer>
      <pre>
        <code>{code}</code>
      </pre>
      <PrimaryButton onClick={handleCopyClick}>
        {copySuccess ? 'Copied!' : 'Copy'}
      </PrimaryButton>
    </CodeWindowContainer>
  );
}

export default CodeWindow;
