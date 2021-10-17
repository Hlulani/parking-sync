import React from 'react';
import { useBarcode } from '@createnextapp/react-barcode';

function BarcodeComponent() {
  const { inputRef } = useBarcode({
    value: '288200674800',
    options: {
      background: '#ccffff',
    }
  });
  
  return <svg ref={inputRef} />;
};

export default BarcodeComponent;