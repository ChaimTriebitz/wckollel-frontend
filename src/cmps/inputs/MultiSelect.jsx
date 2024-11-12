import React, { useState } from 'react';

export const MultiSelect = () => {
   const [selectedOptions, setSelectedOptions] = useState([]);

   const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

   const handleCheckboxChange = (option) => {
      if (selectedOptions.includes(option)) {
         setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
      } else {
         setSelectedOptions([...selectedOptions, option]);
      }
   };

   return (
      <div className='multi-select'>
         {options.map((option, index) => (
            <div key={index} className='input'>
               <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
               />
               <label htmlFor={`checkbox-${index}`}>{option}</label>
            </div>
         ))}
      </div>
   );
};

