import React from 'react';

const data = [
  { windSpeed: 5.7, theoretical: 3.5617, actual: 3.4000, efficiency: 95.46 },
  { windSpeed: 6.09, theoretical: 4.3440, actual: 4.2000, efficiency: 96.69 },
  { windSpeed: 6.19, theoretical: 4.5615, actual: 4.4000, efficiency: 96.46 },
];

const designValues = {
  densityOfAir: 1.2250,
  radiusOfTurbine: 0.1000,
  areaOfTurbine: 0.0314,
  efficiency: 100.0000,
};

function DataVisualizer() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Design Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(designValues).map(([key, value]) => (
            <div key={key} className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 capitalize">
                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
              </div>
              <div className="text-lg font-medium">{value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Experimental Results</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Wind Speed (m/s)
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Theoretical Power (W)
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actual Power (W)
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Efficiency (%)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.windSpeed}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.theoretical.toFixed(4)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.actual.toFixed(4)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.efficiency.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Analysis</h2>
        <div className="prose max-w-none">
          <p>
            The data shows excellent efficiency across all wind speeds, with values
            consistently above 95%. The highest efficiency of 96.69% was achieved
            at a wind speed of 6.09 m/s, producing 4.2W of actual power output
            compared to the theoretical 4.344W.
          </p>
          <p className="mt-4">
            The relationship between wind speed and power output follows the
            expected cubic relationship, where power is proportional to the cube
            of wind speed. This can be observed in both theoretical and actual
            power measurements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataVisualizer;