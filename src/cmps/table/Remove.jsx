import { svgs } from '../../assets/svgs'
import { get, remove } from '../../controllers'
import { toastMsg } from '../../functions/msgEvent'
import { useGlobalState } from '../../hooks'
import { ACTIONS } from '../../state'


export const Remove = ({ row, header }) => {
   const { dispatch } = useGlobalState()


   const handleRemove = () => {
      remove.schedule(row._id)
         .then((res) => toastMsg.success(res.data.message))
         .then(() => dispatch({ type: ACTIONS.REFRESH_DATA }))
   }
   return (
      <button className='remove' onClick={handleRemove}>{svgs.trashBin}{svgs.trashCover}</button>
   )
}
