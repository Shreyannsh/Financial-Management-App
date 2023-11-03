import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import IncomePage from "./pages/incomePage/incomePage";
import ExpensePage from "./pages/expensePage/expensePage";
import SavingsPage from "./pages/savingsPage/savingsPage";
import FinancialReport from "./pages/financialReport/financialReport";
import Navbar from "./components/navbar/navbar";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Header from "./components/header/header";
import Loader from "./components/loader/loader";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((state) => state.isLoading);

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Header />
      <Navbar />
      <Loader loading={loading} />

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
