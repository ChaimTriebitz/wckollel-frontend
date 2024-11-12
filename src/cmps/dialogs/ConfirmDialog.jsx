import { useDialog } from '../../hooks';


export const ConfirmDialog = () => {
   const { closeDialog, dialogRef } = useDialog('confirm')

const handleClick = (x) => {
console.log(x);


}
   return (
      <dialog className='dialog confirm' onClose={() => handleClick(false)} ref={dialogRef} >
         <div className="dialog-content">
            <h1>Are You Sure?</h1>
            <div></div>
            <div className="btns">
               <button onClick={() => handleClick(true)} className="btn yes">Yes</button>
               <button onClick={() => handleClick(false)} className="btn no">No</button>
            </div>
         </div>
      </dialog>
   )
}
