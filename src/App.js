import "./App.css";
import { Route, Routes } from "react-router-dom";

import IncomePage from "./pages/incomePage/incomePage";
import ExpensePage from "./pages/expensePage/expensePage";
import SavingsPage from "./pages/savingsPage/savingsPage";
import FinancialReport from "./pages/financialReport/financialReport";
import Navbar from "./components/navbar/navbar";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <div className="allPages">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/expensePage" element={<ExpensePage />} />
          <Route path="/incomePage" element={<IncomePage />} />
          <Route path="/savingPage" element={<SavingsPage />} />
          <Route path="/financialReport" element={<FinancialReport />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
