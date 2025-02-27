
import { useAuth } from "./Auth";
import { useState } from "react";





function Login () {
    const { signup, login} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
          await signup(email, password);
          console.log("Inscription réussie !");
        } catch (error) {
          console.error("Erreur lors de l'inscription :", error);
        }
      };
      
      const handleLogin = async () => {
        try {
          await login(email, password);
          console.log("Connexion réussie !");
        } catch (error) {
          console.error("Erreur lors de la connexion :", error);
        }
      };

    return (
        
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Connexion / Inscription</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-6 border rounded"
          />
          <div className="flex justify-between">
            <button
              onClick={handleSignup}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
            Incription
            </button>
            <button
              onClick={handleLogin}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Se connecter
            </button>
          </div>
        </div>
    )
    
}
export default Login