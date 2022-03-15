import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import FormContextProvider from "./context/ContextoFormulario";
import {QueryClient, QueryClientProvider} from "react-query";

function App() {

  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/formularioIngreso" element={<Formulario />} />
          </Routes>
        </FormContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
