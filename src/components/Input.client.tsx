'use client';

import { Input } from './Input';
import { useState } from 'react';

export function ClientInput() {
  const [value, setValue] = useState('');

  return (
    <Input
      label='Sample Input'
      placeholder='Type something...'
      value={value}
      onChange={setValue}
    />
  );
}
