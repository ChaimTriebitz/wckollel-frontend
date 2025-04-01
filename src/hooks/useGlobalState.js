import { useContext } from 'react'
import { Context } from '../state'

/**
 * @typedef  {Object}   initialState
 * @property {Number}   refreshCount
 * @property {Boolean}  isDataLoading
 * @property {String}   page
 * @property {Object}   loggedInUser
 * @property {object}   donation
 * @property {Array}    schedules
 * @property {Array}    donations
 */

/**
 * @typedef {initialState & { dispatch: React.Dispatch<any> }} context
 */

/**
 * @returns {context}
 */

export const useGlobalState = () => {
   const context = useContext(Context)
   return context
}

