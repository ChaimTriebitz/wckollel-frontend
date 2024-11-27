import { useEffect, useState } from 'react'
import { ACTIONS } from '../state'
import { useBlur } from './useBlur'
import { useGlobalState } from './useGlobalState'
import { useKeyPress } from './useKeyPress'
import { APP } from '../data'

export const useDialog = (entity) => {

   const { dispatch, dialogs } = useGlobalState()

   const dialogRef = useBlur(() => dialogRef.current.close(), 'dialog')

   useKeyPress(false, 'Escape', () => dialogRef.current.close())

   useEffect(() => dialogRef.current.show(), [])

   const closeDialog = () => {
      dispatch({ type: ACTIONS.CLOSE_DIALOG, entity })
   }

   return {
      dialogRef,
      closeDialog,
   }

}
