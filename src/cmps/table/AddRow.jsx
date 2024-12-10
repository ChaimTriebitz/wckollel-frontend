import React from 'react'
import { svgs } from '../../assets/svgs'
import { ACTIONS } from '../../state'
import { useGlobalState } from '../../hooks'
import { create } from '../../controllers'
import { FIELDS } from '../../data'
import { objects } from '../../functions'

export const AddRow = ({ date }) => {
   const { dispatch } = useGlobalState()

   const handleClick = () => {
      create.schedule(objects.filterFields({ date }, FIELDS.scheduler.map(v => v.internal_name)))
         .then(() => dispatch({ type: ACTIONS.REFRESH_DATA }))
   }
   return (
      <button onClick={handleClick}>{svgs.plus}</button>
   )
}
