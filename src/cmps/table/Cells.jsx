import { Date, DropDown, Remove, SelectRow, Text, Details, Actions } from '..'

export const Cells = ({ row, header }) => {
   switch (header.cell_type) {
      case 'remove': return <Remove row={row} header={header} />
      case 'details': return <Details row={row} header={header} />
      case 'select': return <SelectRow row={row} header={header} />
      case 'dropDown': return <DropDown row={row} header={header} />
      case 'text': return <Text row={row} header={header} />
      case 'date': return <Date row={row} header={header} />
      case 'actions': return <Actions row={row} header={header} />
      default: return <Text row={row} header={header} />
   }
}