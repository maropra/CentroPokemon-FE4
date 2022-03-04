import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import FormContextProvider from "./context/ContextoFormulario";

function App() {
  return (
    <div className="App">
      {
        //Envuelvo la aplicacion en el context provider
      }
      <FormContextProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </FormContextProvider>
    </div>
  );
}

export default App;
