
import ContainerModals from "./components/ContainerModals";
import { CardProvider } from "./context/CardContext";


function App() {
  return (
    <CardProvider>
      <div>
        <ContainerModals />
      </div >
    </CardProvider>

  );
}

export default App;
