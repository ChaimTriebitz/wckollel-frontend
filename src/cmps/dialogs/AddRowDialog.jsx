import React from 'react'
import { useDialog, useForm, useGlobalState } from '../../hooks'
import { svgs } from '../../assets/svgs'
import { FIELDS } from '../../data'
import { Inputs } from '../inputs/Inputs'
import { objects } from '../../functions'
import { create } from '../../controllers'
import { toastMsg } from '../../functions/msgEvent'
import { ACTIONS } from '../../state'

export const AddRowDialog = () => {
   const { dialogs, dispatch } = useGlobalState()

   const { values, handleChange, changedValues, isValuesChanged, restart } = useForm(objects.filterFields({}, FIELDS.scheduler.map(v => v.internal_name)))
   const { closeDialog, dialogRef, } = useDialog('addRow')

   const handleSave = () => {
      create.schedule(values)
         .then((res) => toastMsg.success(res.data.message))
         .then(() => dispatch({ type: ACTIONS.REFRESH_DATA }))
         .then(closeDialog)
         .catch((err) => toastMsg.error(err.response.data.message))
   }

   return (
      <dialog className={`dialog form addRow`} ref={dialogRef} onClose={closeDialog} >
         <div className="dialog-content">
            <header>
               <h3>Add Row</h3>
               <section className='btns'>
                  {isValuesChanged && <button onClick={handleSave} >{svgs.save}</button>}
                  <button onClick={closeDialog}>{svgs.clear}</button>
               </section>
            </header>
            <main >
               {
                  FIELDS.scheduler.map(field =>
                     <Inputs
                        key={field.internal_name}
                        value={values[field.internal_name]}
                        field={field}
                        handleChange={handleChange}
                     />
                  )
               }
            </main>
         </div>

      </dialog>
   )
}
