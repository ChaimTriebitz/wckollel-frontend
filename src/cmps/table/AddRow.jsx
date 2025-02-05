import React from 'react'
import { svgs } from '../../assets/svgs'
import { ACTIONS } from '../../state'
import { useGlobalState } from '../../hooks'

export const AddRow = () => {
   const { dispatch } = useGlobalState()

   const handleClick = () => {
      dispatch({ type: ACTIONS.OPEN_DIALOG, entity: 'addRow' })
   }
   return (
      <button className='btn' onClick={handleClick}>{svgs.plus}</button>
   )
}
