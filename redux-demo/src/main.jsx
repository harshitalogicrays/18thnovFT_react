import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import mystore from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={mystore}>
       <App /> 
  </Provider>
  ,
)
