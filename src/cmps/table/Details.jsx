import { svgs } from '../../assets/svgs'
import { useGlobalState } from '../../hooks'
import { ACTIONS } from '../../state'

export const Details = ({ row, header }) => {

   const { dispatch } = useGlobalState()

   const handleClick = () => {
      dispatch({
         type: ACTIONS.OPEN_DIALOG,
         entity: 'details',
         payload: {
            header,
            row
         }
      })
   }

   return (
      <button onClick={handleClick}>
         {svgs.details}
      </button>
   )
}