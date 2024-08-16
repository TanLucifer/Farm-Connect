import React, { forwardRef } from 'react';

const PriceInput = forwardRef(({ label, value, onChange }, ref) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
    <div className="relative">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600">₹</span>
      <input
        ref={ref} // Forward the ref to the input element
        type="text"
        placeholder="0.00"
        value={value}
        onChange={onChange}
        className="w-full p-2 pl-8 border-b border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
      />
    </div>
  </div>
));

export default PriceInput;
