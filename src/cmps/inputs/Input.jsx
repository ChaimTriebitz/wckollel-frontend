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
         onChange={(e) => handleChange(e.target.name, e.target.value)}
         required={required}
         onBlur={handleBlur}
         placeholder={placeholder}
         autoComplete={type === 'number' ? "off" : 'on'}
         onWheel={(e)=>e.target.blur()}
      />
   )
}
