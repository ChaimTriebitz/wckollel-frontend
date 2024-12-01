export const Textarea = ({
   field = {},
   value,
   handleChange = () => { },
}) => {

   const { internal_name, type, name, required = false } = field

   return (
      <textarea
         type={type}
         name={internal_name}
         value={value || ''}
         onChange={handleChange}
         required={required}
      />
   )
}
