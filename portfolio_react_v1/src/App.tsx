import { ContainerApp, GlobalStyle } from "./styleGlobal/StyleGlobal";
import Header from "./containers/header";
import Hero from "./containers/_hero";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContainerApp>
        <div className="main"></div>
      </ContainerApp>
      <Hero />
    </>
  );
}

export default App;
