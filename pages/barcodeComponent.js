import React from 'react';
import { useBarcode } from '@createnextapp/react-barcode';

function BarcodeComponent({barcode}) {
  const { inputRef } = useBarcode({
    value: barcode,
    options: {
      background: '#ccffff',
    }
  });
  
  return <svg ref={inputRef} />;
};

export default BarcodeComponent;