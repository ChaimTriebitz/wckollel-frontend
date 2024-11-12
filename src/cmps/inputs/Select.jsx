export const Select = ({ field, options = [], value, handleChange }) => {

   const { name, internal_name, id, required = false } = field

   return (
      <select
         name={internal_name}
         id={id}
         onChange={(e) => handleChange(e.target.name, e.target.value)}
         value={value || ''}
         className='select'
         required={required}
      >
         <option value='' disabled>{name}</option>
         {
            options.map((option, optionIdx) =>
               <option
                  key={option.id || optionIdx}
                  value={option.option_value || ''}
               >
                  {option.option_display}
               </option>
            )
         }
      </select>
   )
}
