import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Project } from "./components/Projects";
import { GlobalStyle } from "./globalstyles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
      <Project/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
