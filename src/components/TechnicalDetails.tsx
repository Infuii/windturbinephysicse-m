import React from 'react';
import { Zap, Settings, Wrench, Wind } from 'lucide-react';

function TechnicalDetails() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Zap className="h-5 w-5 text-yellow-500" />
          <h2 className="text-xl font-semibold">Electromagnetic Induction Principles</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900">Faraday's Law Application</h3>
            <p className="text-gray-600">
              The turbine utilizes Faraday's law of electromagnetic induction where the rate of change of magnetic flux through a conductor induces an electromotive force. In our design, permanent magnets mounted on the rotating turbine blades pass by stationary copper coils, generating electrical current.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Generator Design</h3>
            <p className="text-gray-600">
              Our generator employs a three-phase AC design with:
              - Neodymium permanent magnets (N52 grade)
              - Copper wire coils (AWG 14)
              - Optimized air gap of 1.5mm
              - 12 pole pairs for maximum efficiency
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Motor Components</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Stator with concentrated windings</li>
              <li>Rotor with permanent magnets</li>
              <li>Precision bearings rated for desert conditions</li>
              <li>Heat-resistant insulation (Class H)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Wind className="h-5 w-5 text-blue-500" />
          <h2 className="text-xl font-semibold">Performance in Somali Conditions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900">Climate Adaptations</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Sand-resistant sealing</li>
              <li>High-temperature bearings</li>
              <li>UV-resistant materials</li>
              <li>Corrosion-resistant coating</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Efficiency Metrics</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Peak efficiency: 96.69%</li>
              <li>Cut-in wind speed: 3.5 m/s</li>
              <li>Rated output: 4.4W at 6.19 m/s</li>
              <li>Annual availability: Over 98%</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Wrench className="h-5 w-5 text-gray-500" />
          <h2 className="text-xl font-semibold">Maintenance Requirements</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900">Regular Maintenance</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Monthly visual inspections</li>
              <li>Quarterly bearing lubrication</li>
              <li>Semi-annual electrical system check</li>
              <li>Annual full service</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Local Training Program</h3>
            <p className="text-gray-600">
              We provide comprehensive training to local technicians, focusing on:
              - Basic troubleshooting
              - Preventive maintenance
              - Safety procedures
              - Emergency repairs
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Settings className="h-5 w-5 text-gray-500" />
          <h2 className="text-xl font-semibold">Implementation Strategy</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900">Grid Integration</h3>
            <p className="text-gray-600">
              The system includes:
              - Grid-tie inverters
              - Smart metering
              - Load management systems
              - Backup power capabilities
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Storage Solutions</h3>
            <p className="text-gray-600">
              Hybrid storage system combining:
              - Lithium-ion batteries
              - Mechanical flywheel storage
              - Smart charge controllers
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Community Impact</h3>
            <p className="text-gray-600">
              Benefits include:
              - Job creation for maintenance and operations
              - Reduced energy costs
              - Improved energy reliability
              - Environmental benefits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalDetails;