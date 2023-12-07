import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { GlobalStyle } from "./globalstyles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header></Header>
      <Home></Home>
    </>
  );
}

export default App;
