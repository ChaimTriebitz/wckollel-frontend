import { useEffect } from 'react'
import { Dialogs, Footer, Header, Main, Msg } from './cmps'
import { useGlobalState, useScrollToTop } from './hooks'
import { get } from './controllers'
import { ACTIONS } from './state'

function App() {

   const { dispatch, refreshCount, page } = useGlobalState()

   document.title = `wckollel - ${page || 'home'}`

   useScrollToTop()

   useEffect(() => {
      get.schedules()
         .then((res) => dispatch({ type: ACTIONS.SET, entity: 'schedules', payload: res.data }))
         .then(() => dispatch({ type: ACTIONS.SET, entity: 'isDataLoading', payload: false }))
   }, [refreshCount])

   return (
      <div className="App" >
         <Msg />
         <Dialogs />
         <Header />
         <Main />
         <Footer />
      </div>
   )
}

export default App


