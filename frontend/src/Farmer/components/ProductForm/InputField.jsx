import React, { forwardRef } from 'react';

const InputField = forwardRef(({ label, type = 'text', placeholder, value, onChange, readOnly = false }, ref) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      ref={ref} // Forward the ref to the input element
      className="w-full p-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
    />
  </div>
));

export default InputField;
