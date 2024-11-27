import React from 'react'
import { useChangedValues, useDialog, useForm, useGlobalState } from '../../hooks'
import { svgs } from '../../assets/svgs'
import { Input } from '..';
import { objects } from '../../functions';
import { update } from '../../controllers';
import { FIELDS, HEADERS } from '../../data';

export const DetailsDialog = () => {

   const { dialogs } = useGlobalState()
   const { row } = dialogs.details

   const { values, handleChange, changedValues, isValuesChanged, restart } = useForm(objects.filterFields(row, FIELDS.scheduler.map(v => v.internal_name)))
   const { closeDialog, dialogRef, } = useDialog('details')
   console.log(values);

   const handleSave = () => {
      console.log(values);
      update.data(row.id, values)
   }

   return (
      <dialog className={`dialog form details`} ref={dialogRef} onClose={closeDialog} >
         <div className="dialog-content">

            <header>
               <h1>{row?.name}</h1>
               <section className='btns'>
                  {isValuesChanged && <button onClick={handleSave} >{svgs.save}</button>}
                  <button type='button' onClick={closeDialog}>{svgs.clear}</button>
               </section>
            </header>
            <main >
               {
                  FIELDS.scheduler.map(header =>
                     <Input
                        key={header.internal_name}
                        value={values[header.internal_name]}
                        field={header}
                        handleChange={handleChange}
                     />
                  )
               }
            </main>
         </div>

      </dialog>
   )
}
