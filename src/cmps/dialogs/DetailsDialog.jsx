import React from 'react'
import { useChangedValues, useDialog, useForm, useGlobalState } from '../../hooks'
import { svgs } from '../../assets/svgs'
import { Input, Inputs } from '..';
import { objects, strings } from '../../functions';
import { get, update } from '../../controllers';
import { FIELDS, HEADERS } from '../../data';
import { toastMsg } from '../../functions/msgEvent';
import { ACTIONS } from '../../state';

export const DetailsDialog = () => {

   const { dialogs, dispatch } = useGlobalState()
   const { row } = dialogs.details

   const { values, handleChange, changedValues, isValuesChanged, restart } = useForm(objects.filterFields(row, FIELDS.scheduler.map(v => v.internal_name)))
   const { closeDialog, dialogRef, } = useDialog('details')

   const handleSave = () => {
      update.schedule(row._id, values)
         .then((res) => toastMsg.success(res.data.message))
         .then(() => dispatch({ type: ACTIONS.REFRESH_DATA }))
         .then(closeDialog)
         .catch((err) => toastMsg.error(err.response.data.message))
   }

   return (
      <dialog className={`dialog form details`} ref={dialogRef} onClose={closeDialog} >
         <div className="dialog-content">
            <header>
               <h3>{strings.monthday(row.date)}</h3>
               <section className='btns'>
                  {isValuesChanged && <button onClick={handleSave} >{svgs.save}</button>}
                  <button type='button' onClick={closeDialog}>{svgs.clear}</button>
               </section>
            </header>
            <main >
               {
                  FIELDS.scheduler.map(header =>
                     <Inputs
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
