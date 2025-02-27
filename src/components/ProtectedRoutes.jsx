import { Outlet } from 'react-router-dom';
import { useAuth } from './Auth'; // Assurez-vous que le chemin est correct
import Login from './login';
import NavBar from './NavBar';

const ProtectedRoutes = () => {
  const { user } = useAuth();

  return user ?  
  <div>
  <NavBar /> {/* Placez le composant Navbar ici */}
  <Outlet />
</div>: <Login />; // Redirige vers la page de connexion si non authentifié
};

export default ProtectedRoutes;