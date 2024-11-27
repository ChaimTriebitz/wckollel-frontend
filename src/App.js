import { Dialogs, Footer, Header, Main, Msg } from './cmps'
import { useScrollToTop } from './hooks'

function App() {
   useScrollToTop()
   document.title = 'wckollel'

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


