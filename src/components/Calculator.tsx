import { useState, useCallback } from "react";

function Calculator() {
  const [windSpeed, setWindSpeed] = useState(5.7);
  const [radius, setRadius] = useState(0.1);
  const [density, setDensity] = useState(1.225);

  const calculatePower = useCallback(() => {
    const area = Math.PI * radius * radius;
    const power = 0.5 * density * area * Math.pow(windSpeed, 3);
    return power.toFixed(4);
  }, [windSpeed, radius, density]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Wind Power Calculator</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Wind Speed (m/s)
          </label>
          <input
            type="number"
            value={windSpeed}
            onChange={(e) => setWindSpeed(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            step="0.1"
            min="0"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Turbine Radius (m)
          </label>
          <input
            type="number"
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            step="0.01"
            min="0"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Air Density (kg/m³)
          </label>
          <input
            type="number"
            value={density}
            onChange={(e) => setDensity(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            step="0.001"
            min="0"
          />
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <div className="text-center">
          <div className="text-sm text-gray-600">Theoretical Power Output</div>
          <div className="text-3xl font-bold text-blue-600">
            {calculatePower()} W
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <p>
          The theoretical power output is calculated using the formula: P =
          ½ρAv³
        </p>
        <p className="mt-2">
          Where: ρ (rho) = air density A = swept area (πr²) v = wind speed
        </p>
      </div>
    </div>
  );
}

export default Calculator;
