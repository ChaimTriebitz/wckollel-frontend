import { useEffect } from 'react'
import { Dialogs, Footer, Header, Main, Msg } from './cmps'
import { useGlobalState, useScrollToTop } from './hooks'
import { get } from './controllers'
import { ACTIONS } from './state'

function App() {
   const { dispatch, refreshCount } = useGlobalState()

   useScrollToTop()
   document.title = 'wckollel'
   useEffect(() => {
      get.schedules().then((res) => dispatch({ type: ACTIONS.SET, entity: 'schedules', payload: res.data }))
   }, [refreshCount])

   return (
      <div className="App" >
         <Msg />
         <Dialogs />
         {/* <Header /> */}
         <Main />
         <Footer />
      </div>
   )
}

export default App


