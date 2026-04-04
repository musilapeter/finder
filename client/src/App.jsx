import {BrowserRouter} from "react-router-dom";

// Import mainapp
import MainApp from "./mainapp/MainApp.jsx";

function App() {

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <MainApp />
    </BrowserRouter>
  )
}

export default App
