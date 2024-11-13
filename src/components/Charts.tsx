import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const powerData = [
  { windSpeed: 5.7, theoretical: 3.5617, actual: 3.4000 },
  { windSpeed: 6.09, theoretical: 4.3440, actual: 4.2000 },
  { windSpeed: 6.19, theoretical: 4.5615, actual: 4.4000 },
];

const costBenefitData = [
  { year: 2024, cost: 1000000, savings: 100000, netBenefit: -900000 },
  { year: 2025, cost: 200000, savings: 300000, netBenefit: -800000 },
  { year: 2026, cost: 200000, savings: 500000, netBenefit: -500000 },
  { year: 2027, cost: 200000, savings: 700000, netBenefit: 0 },
  { year: 2028, cost: 200000, savings: 900000, netBenefit: 700000 },
];

const energyDemandData = [
  { month: 'Jan', production: 450, demand: 600 },
  { month: 'Feb', production: 500, demand: 580 },
  { month: 'Mar', production: 550, demand: 620 },
  { month: 'Apr', production: 600, demand: 650 },
  { month: 'May', production: 650, demand: 700 },
  { month: 'Jun', production: 700, demand: 750 },
];

const environmentalData = [
  { year: 2024, co2Reduction: 100, treesEquivalent: 1000 },
  { year: 2025, co2Reduction: 250, treesEquivalent: 2500 },
  { year: 2026, co2Reduction: 400, treesEquivalent: 4000 },
  { year: 2027, co2Reduction: 550, treesEquivalent: 5500 },
  { year: 2028, co2Reduction: 700, treesEquivalent: 7000 },
];

function Charts() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Wind Speed vs Power Output</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={powerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="windSpeed" label={{ value: 'Wind Speed (m/s)', position: 'bottom' }} />
              <YAxis label={{ value: 'Power (W)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="theoretical" stroke="#8884d8" name="Theoretical Power" />
              <Line type="monotone" dataKey="actual" stroke="#82ca9d" name="Actual Power" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Cost-Benefit Analysis</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={costBenefitData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="cost" stackId="1" stroke="#ff7c43" fill="#ff7c43" name="Cost" />
              <Area type="monotone" dataKey="savings" stackId="2" stroke="#00b4d8" fill="#00b4d8" name="Savings" />
              <Line type="monotone" dataKey="netBenefit" stroke="#023e8a" name="Net Benefit" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Energy Production vs Local Demand</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={energyDemandData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="production" stroke="#2b9348" name="Production" />
              <Line type="monotone" dataKey="demand" stroke="#bc4749" name="Demand" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Environmental Impact</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={environmentalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="co2Reduction" stroke="#2b9348" name="CO2 Reduction (tons)" />
              <Line yAxisId="right" type="monotone" dataKey="treesEquivalent" stroke="#606c38" name="Trees Equivalent" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Charts;