import React from 'react'
import { svgs } from '../../assets/svgs'
import { ACTIONS } from '../../state'
import { useGlobalState } from '../../hooks'
import { create } from '../../controllers'
import { FIELDS } from '../../data'
import { objects } from '../../functions'

export const AddRow = () => {
   const { dispatch } = useGlobalState()

   const handleClick = () => {
      dispatch({ type: ACTIONS.OPEN_DIALOG, entity: 'addRow' })
   }
   return (
      <button onClick={handleClick}>{svgs.plus}</button>
   )
}
