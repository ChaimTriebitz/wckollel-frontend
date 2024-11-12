export const toastMsg = {
   success,
   error,
   warning
}

function on(eventName, listener) {

   const callListener = ({ detail }) => {
      listener(detail)
   }

   window.addEventListener(eventName, callListener)

   return () => {
      window.removeEventListener(eventName, callListener)
   }
}

function emit(eventName, data) {
   window.dispatchEvent(new CustomEvent(eventName, { detail: data }))
}

export const msgEvent = { on, emit }

function showMsg(txt, type = '') {
   msgEvent.emit('show-msg', { txt, type })
}
function success(txt) {
   showMsg(txt, 'success')
}
function error(txt) {
   showMsg(txt, 'error')
}
function warning(txt) {
   showMsg(txt, 'warning')
}

window.myBus = msgEvent
window.showMsg = showMsg
