import { Input, Select, Textarea } from '..'

export const Inputs = ({
   field = {},
   value,
   options = [],
   handleChange = () => { },
   handleBlur = () => { }
}) => {

   const { internal_name, name, element_type, className, label } = field

   return (
      <div className={`input ${element_type} ${className}`} >
         {label && <label htmlFor={internal_name}>{name}</label>}
         {
            element_type === 'input' &&
            <Input
               field={field}
               value={value}
               handleBlur={handleBlur}
               handleChange={handleChange}
            />
         }
         {
            element_type === 'textarea' &&
            <Textarea
               field={field}
               value={value}
               handleBlur={handleBlur}
               handleChange={handleChange}
            />
         }
         {
            element_type === 'select' &&
            <Select
               field={field}
               value={value}
               options={options}
               handleChange={handleChange}
            />
         }
      </div>
   )
}
