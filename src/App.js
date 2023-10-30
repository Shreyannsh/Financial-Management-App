import "./App.css";
import { Route, Routes } from "react-router-dom";

import IncomePage from "./pages/incomePage/incomePage";
import ExpensePage from "./pages/expensePage/expensePage";
import SavingsPage from "./pages/savingsPage/savingsPage";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/expensePage" element={<ExpensePage />} />
        <Route path="/incomePage" element={<IncomePage />} />
        <Route path="/savingPage" element={<SavingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
