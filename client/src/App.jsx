import { Routes, Route } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import PeoplePage from "./pages/PeoplePage";
import PreferencesPage from "./pages/PreferencesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OverviewPage />} />
      <Route path="/people" element={<PeoplePage />} />
      <Route path="/preferences" element={<PreferencesPage />} />
    </Routes>
  );
}

export default App;