import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function BarCodeScanner({ onScan }) {
  const [data, setData] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-lg font-bold mb-4">Scannez un Code-Barres</h2>

      <button
        onClick={() => setIsScanning(!isScanning)}
        className="bg-green-600 text-white px-4 py-2 rounded-md"
      >
        {isScanning ? "Arrêter le Scan" : "Lancer le Scan"}
      </button>

      {isScanning && (
        <div className="mt-4 border p-4 rounded-md bg-gray-200">
          <BarcodeScannerComponent
            onUpdate={(err, result) => {
              if (result) {
                setData(result.text);
                setIsScanning(false); // Arrêter après le scan
                onScan(result.text); // Envoyer le code scanné au parent
              }
            }}
          />
        </div>
      )}

      {data && (
        <p className="mt-4">
          Code Scanné : <strong>{data}</strong>
        </p>
      )}
    </div>
  );
}

export default BarCodeScanner;
