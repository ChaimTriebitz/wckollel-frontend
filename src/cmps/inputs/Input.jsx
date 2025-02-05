export const Input = ({
   field = {},
   value,
   handleChange = () => { },
   handleBlur = () => { }
}) => {

   const { internal_name = '', type = 'text', required = false, placeholder = '' } = field

   return (
      <input
         type={type}
         name={internal_name}
         value={value || ''}
         onChange={handleChange}
         required={required}
         onBlur={handleBlur}
         placeholder={placeholder}
      />
   )
}
