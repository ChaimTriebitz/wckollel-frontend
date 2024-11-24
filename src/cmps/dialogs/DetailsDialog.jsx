import React from 'react'
import { useChangedValues, useDialog, useForm, useGlobalState } from '../../hooks'
import { svgs } from '../../assets/svgs'
import { Input } from '..';
import { objects } from '../../functions';
import { update } from '../../controllers';

export const DetailsDialog = () => {

   const { dialogs } = useGlobalState()
   const { row } = dialogs.details

   const { values, handleChange, changedValues, isValuesChanged, restart } = useForm({})
   const { closeDialog, dialogRef, } = useDialog('details')

   const handleSave = (e) => {
      e.preventDefault()
   }

   return (
      <dialog className={`dialog form details`} ref={dialogRef} onClose={closeDialog} >
         <div className="dialog-content">

            <header>
               <h1>{row?.name}</h1>
               <section className='btns'>
                  {isValuesChanged && <button type='submit' >{svgs.save}</button>}
                  <button type='button' onClick={closeDialog}>{svgs.clear}</button>
               </section>
            </header>
            <main >
               <form onSubmit={handleSave} className='form'>
                  {/* {
                     DIALOG_HEADERS.map(header =>
                        <Input
                           key={header.internal_name}
                           value={values[header.internal_name]}
                           field={header}
                           handleChange={handleChange}
                        />
                     )
                  } */}
               </form>
            </main>
         </div>

      </dialog>
   )
}
