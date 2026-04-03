import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import WeddingInvitation from "./pages/WeddingInvitation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeddingInvitation />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
