import { Input, Select, Textarea } from '..'

export const   Inputs = ({
   field = {},
   value,
   options = [],
   handleChange = () => { },
   handleBlur = () => { }
}) => {

   const { internal_name, name, element_type, className } = field

   return (
      <div className={`input ${element_type} ${className}`} >
         <label htmlFor={internal_name}>{name}</label>
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
         {/* {
            element_type === 'multi_select' &&
            <MultiSelect
               field={field}
               value={value}
               handleChange={handleChange}
               options={field.options || dropDown[page][field?.internal_name] || []}
            />
         } */}
         {/* {
            (element_type === 'status' || element_type === 'checkbox') &&
            <Status
               Row={Row}
               field={{ ...field, editable: true }}
               value={value}
               handleChange={handleChange}
            />
         } */}
         {/* {
            (element_type === 'image' || type === 'image') &&
            <Image
               field={{ ...field, editable: true }}
               value={value}
               handleChange={handleChange}
            />
         } */}
         {/* {
            element_type === 'dynamic_sub' &&
            <DynamicInputs
               Row={Row}
               field={field}
               value={value}
               handleChange={handleChange}
            />
         } */}
         {/* {
            element_type === 'dynamic_all' &&
            <DynamicInputsAll
               Row={Row}
               object={value}
               handleChange={handleChange}
            />
         } */}
         {/* {
            element_type === 'html_editor' &&
            <HtmlEditor
               Row={Row}
               field={field}
               value={value}
               handleChange={handleChange}
            />
         } */}
      </div>
   )
}
