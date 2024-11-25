
import './App.css'

import FirstWindow from "./components/FirstWindow/FirstWindow.jsx";
import Story from "./components/Story/Story.jsx";
import ListP from "./components/ListP.jsx";
import TypeGitar from "./components/typeGitar/typeGitar.jsx";
import Sovet from "./components/Sovet/Sovet.jsx";
import Popular from "./components/Popular/Popular.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTopButton from "./components/btn.jsx";

function App() {
  return (
      <>
        <FirstWindow />
        <Story />
        <ListP />
        <TypeGitar />
          <Sovet />
          <Popular />
          <Footer />
          <ScrollToTopButton />
      </>

  )
}

export default App
