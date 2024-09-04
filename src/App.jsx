import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <div className="app">
      <Provider store={store}>
        <NavBar />
        <Outlet />
      </Provider>
    </div>
  )
}

export default App
