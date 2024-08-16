import React, { forwardRef } from 'react';

const TextArea = forwardRef(({ label, placeholder, rows = 3, value, onChange }, ref) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
    <textarea
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={onChange}
      ref={ref} // Forward the ref to the textarea element
      className="w-full p-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none transition-colors resize-none"
    ></textarea>
  </div>
));

export default TextArea;
