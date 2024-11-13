import React, { useState } from 'react';
import { Wind, Sun, LineChart, Info, Zap, Map } from 'lucide-react';
import DataVisualizer from './components/DataVisualizer';
import InfoPanel from './components/InfoPanel';
import Calculator from './components/Calculator';
import Charts from './components/Charts';
import TechnicalDetails from './components/TechnicalDetails';

function App() {
  const [activeTab, setActiveTab] = useState('data');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wind className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Wind Turbine Physics Lab</h1>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('data')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'data'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <LineChart className="h-5 w-5 inline mr-2" />
                Data Analysis
              </button>
              <button
                onClick={() => setActiveTab('charts')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'charts'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <LineChart className="h-5 w-5 inline mr-2" />
                Visualizations
              </button>
              <button
                onClick={() => setActiveTab('calculator')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'calculator'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Sun className="h-5 w-5 inline mr-2" />
                Power Calculator
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'technical'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Zap className="h-5 w-5 inline mr-2" />
                Technical Details
              </button>
              <button
                onClick={() => setActiveTab('info')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'info'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Info className="h-5 w-5 inline mr-2" />
                Somalia Info
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === 'data' && <DataVisualizer />}
        {activeTab === 'charts' && <Charts />}
        {activeTab === 'calculator' && <Calculator />}
        {activeTab === 'technical' && <TechnicalDetails />}
        {activeTab === 'info' && <InfoPanel />}
      </main>
    </div>
  );
}

export default App;