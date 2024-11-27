import { svgs } from '../../assets/svgs'
import { useGlobalState } from '../../hooks'
import { ACTIONS } from '../../state'


export const Remove = ({ row, header }) => {
   const { dispatch } = useGlobalState()


   const handleRemove = () => {
      dispatch({
         type: ACTIONS.OPEN_DIALOG,
         entity: 'confirm',
         payload: {
            row
         }
      })
   }
   return (
      <button className='remove' onClick={handleRemove}>{svgs.trashBin}{svgs.trashCover}</button>
   )
}
