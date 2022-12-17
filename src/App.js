import { Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";
import Signup from "./container/Signup";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
