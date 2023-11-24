import { Outlet } from 'react-router-dom'
import './App.css'
import { NavComponent } from "./components/NavComponent.jsx"
import {FooterComponent} from './components/FooterComponent.jsx'


export function App() {

  return (
    <div className="App" id="app">
      <header>
        <NavComponent/>
      </header>

      <main className="min-h-screen">
        <Outlet />
      </main>

      
     <FooterComponent/>
        
      

    </div>
  )
}
