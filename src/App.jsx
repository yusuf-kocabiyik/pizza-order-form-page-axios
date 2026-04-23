import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import Banner from './components/Banner'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import FormPage from './components/FormPage'
import SuccessPage from './components/SuccessPage'

function App() {
   ////////sipariş detayı için boş bir state tanımlıyoruz
    const [ordersDetail,setOrdersDetail]=useState({
        isim:"",
        boyut:"",
        malzemeler:[],
        note:"",
        hamur:"",
        quantity:1,
        
     })
  

  return (
    <BrowserRouter>
    <Switch>

      <Route exact path="/">
        <Banner/>
     </Route>

      <Route path="/formPage">
        <FormPage ordersDetail={ordersDetail} setOrdersDetail={setOrdersDetail} />
      </Route>

      <Route path="/successPage">
        <SuccessPage ordersDetail={ordersDetail}  />
      </Route>

    </Switch>
    </BrowserRouter>
  )
}

export default App
