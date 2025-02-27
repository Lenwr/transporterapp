import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from './components/Auth';
import Home from './views/Home';
import Login from './components/login';
import ProtectedRoutes from './components/ProtectedRoutes'; // Importez le composant de route protégée
import Dashboard from './views/Dashboard'; // Exemple de composant protégé


function App() {
  return (
    <AuthProvider>
      <Router>
      
        <Routes>
        <Route path="/dashboard" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Home />} /> {/* Route protégée */}
            <Route path="/" element={<Dashboard />} />
            {/* Ajoutez d'autres routes protégées ici */}
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;