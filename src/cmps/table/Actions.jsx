import { Cells } from './Cells'


export const Actions = ({ row, header }) => {

   return (
      <div className='actions'>
         {
            header.headers.map((header, i) =>
               <Cells
                  key={i}
                  row={row}
                  header={header}
               />
            )
         }
      </div>
   )
}
