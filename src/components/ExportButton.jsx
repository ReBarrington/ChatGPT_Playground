import React from 'react';
import { PrimaryButton } from '../styled-components';

const ExportButton = ({ format, data, className }) => {
  const handleExportClick = () => {
    // Export data to specified format
    switch (format) {
      case 'markdown':
        // Code for exporting to Markdown format
        break;
      case 'text':
        // Code for exporting to plain text format
        break;
      default:
        console.error(`Unsupported export format: ${format}`);
        break;
    }
  };

  return (
    <div className={className}>
        <PrimaryButton onClick={handleExportClick}>
        Export as {format}
        </PrimaryButton>
    </div>
  );
}

export default ExportButton;
