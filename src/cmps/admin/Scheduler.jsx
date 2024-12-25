import React, { useEffect } from 'react'
import { useForm, useGlobalState } from '../../hooks'
import { FIELDS, HEADERS } from '../../data'
import { create, get } from '../../controllers'
import { ACTIONS } from '../../state'
import { Input, Inputs, Table } from '../../cmps'
import { toastMsg } from '../../functions/msgEvent'
import { objects } from '../../functions'

export const Scheduler = () => {
   const { schedules, dispatch } = useGlobalState()
   

   return (
      <div className='scheduler column'>

      </div>
   )
}
