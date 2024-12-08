import {  AddRowDialog, ConfirmDialog, DetailsDialog, Login, Register } from '../../cmps'
import { useGlobalState } from '../../hooks'

export const Dialogs = () => {
   const { dialogs } = useGlobalState()

   return (
      <>
         {dialogs?.details?.isOpen && <DetailsDialog />}
         {dialogs?.confirm?.isOpen && <ConfirmDialog />}
         {dialogs?.addRow?.isOpen && <AddRowDialog />}
      </>
   )
} 