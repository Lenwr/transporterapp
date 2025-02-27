import { useAuth } from "../components/Auth";
import { useState } from "react";
import BarCodeScanner from "../components/BarCodeScanner";

function Dashboard() {
  const { user, logout } = useAuth();
  const [displayScan, setDisplayScan] = useState(false);
  const [scannedCode, setScannedCode] = useState("");

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="bg-white p-8  w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Tableau de bord
        </h1>

        {user && (
          <div className="mb-4 text-center">
            <p className="text-lg text-gray-700">
              Bienvenue, <span className="font-semibold">{user.email}</span> !
            </p>
          </div>
        )}

        <div className="text-center">
      
          {!displayScan && (
            <BarCodeScanner onScan={(code) => setScannedCode(code)} />
          )}

          {scannedCode && (
            <p className="mt-4">
              Dernier code scanné : <strong>{scannedCode}</strong>
            </p>
          )}
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
