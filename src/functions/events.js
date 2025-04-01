export const events = {
   listen,
   showMsg: _showMsg(),
   copyTextToClipboard
}

function listen(eventName, listener) {

   const callListener = ({ detail }) => {
      listener(detail)
   }

   window.addEventListener(eventName, callListener)

   return () => {
      window.removeEventListener(eventName, callListener)
   }
}

async function copyTextToClipboard(txt) {
   try {
      await navigator.clipboard.writeText(txt)
      _emit('show-msg', { txt: txt + ' Copied to clipboard', type: 'success' })
   } catch (error) {
      _emit('show-msg', { txt: 'Failed to copy text', type: 'warning' })
   }
}

function _emit(eventName, data) {
   window.dispatchEvent(new CustomEvent(eventName, { detail: data }))
}

function _showMsg() {
   return {
      success: (txt) => _emit('show-msg', { txt, type: 'success' }),
      error: (txt) => _emit('show-msg', { txt, type: 'error' }),
      warning: (txt) => _emit('show-msg', { txt, type: 'warning' }),
   }
}