import './App.css';
import Header from "./screens/header/Header"
import { FooterComp } from './screens/FooterComp';
import Navigations from './navigation/Navigations'

function App() {
  return (
    <>
      <Header />
      <Navigations />
      <FooterComp />
    </>
  )
}

export default App;
