import './App.css';
import Header from "./screens/header/Header"
import { FooterComp } from './screens/FooterComp';
import Navigations from './navigation/Navigations'
import Footer from './screens/Footer';

function App() {
  return (
    <>
      <Header />
      <Navigations />
      <FooterComp />
      <Footer />
    </>
  )
}

export default App;
