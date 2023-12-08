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
    </>
  );
}

export default App;
