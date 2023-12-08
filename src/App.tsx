import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import MobileLegend from "./page/MobileLegend";
import { QueryClient, QueryClientProvider } from "react-query";
import CountDuration from "./page/CountDuration";
import MatchingCard from "./page/MatchingCard";
import SalaryCalculate from "./page/SalaryCalculate";
import CurrencyConvert from "./page/CurrencyConvert";
import TicTacToe from "./page/TicTacToe";
import WordSramble from "./page/WordSramble";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile-legend" element={<MobileLegend />} />
        <Route path="/matching-card" element={<MatchingCard />} />
        <Route path="/count-duration" element={<CountDuration />} />
        <Route path="/salary-calculate" element={<SalaryCalculate />} />
        <Route path="/currency-convert" element={<CurrencyConvert />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/word-sramble" element={<WordSramble />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
