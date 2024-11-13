import React from 'react';
import { MapPin, Users, AlertTriangle, Sun, Heart, Wind, Home, Book } from 'lucide-react';

function InfoPanel() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <MapPin className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-semibold">About Somalia</h2>
        </div>
        <p className="text-gray-600">
          Somalia, covering 95 km² on the Horn of Africa, represents a land of rich cultural heritage and strategic importance. 
          The country's position between sub-Saharan Africa and Arabia has historically made it a crucial trading hub, 
          influencing its diverse cultural makeup and economic potential.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-semibold">Cultural Heritage & Traditions</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900">Traditional Social Structure</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Clan System (Qabiil): Forms the foundation of social organization</li>
              <li>Xeer: Traditional legal system based on customary law</li>
              <li>Council of Elders (Guurti): Community decision-making body</li>
              <li>Extended Family Networks: Strong support systems</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900">Cultural Expressions</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Poetry (Gabay): Oral tradition of storytelling and history</li>
              <li>Traditional Dance: Dhaanto and Buraanbur performances</li>
              <li>Music: Traditional instruments like shareero and drums</li>
              <li>Craftsmanship: Weaving, pottery, and metalwork</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900">Religious Practices</h3>
            <p className="text-gray-600">
              Islam plays a central role in daily life, influencing:
              - Prayer times and community gatherings
              - Charitable giving (Zakat)
              - Social responsibilities
              - Educational practices
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Wind className="h-5 w-5 text-green-600" />
          <h2 className="text-xl font-semibold">Cultural Integration of Wind Energy</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900">Community-Centered Approach</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Integration with traditional decision-making structures</li>
              <li>Respect for clan-based land management</li>
              <li>Employment opportunities aligned with local skills</li>
              <li>Training programs incorporating cultural values</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900">Cultural Benefits</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Powers mosques and religious schools</li>
              <li>Enables evening community gatherings</li>
              <li>Supports traditional craft production</li>
              <li>Facilitates cultural events and celebrations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900">Educational Integration</h3>
            <p className="text-gray-600">
              Combining traditional knowledge with modern technology:
              - Training programs in local language
              - Incorporation of traditional problem-solving methods
              - Respect for existing social hierarchies
              - Community-led maintenance programs
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Home className="h-5 w-5 text-orange-600" />
          <h2 className="text-xl font-semibold">Societal Impact & Benefits</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900">Family Life Enhancement</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Reliable power for household needs</li>
              <li>Better lighting for evening studies</li>
              <li>Improved food preservation</li>
              <li>Enhanced communication capabilities</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900">Women's Empowerment</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Small business opportunities</li>
              <li>Technical training programs</li>
              <li>Reduced domestic workload</li>
              <li>Better healthcare access</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900">Youth Development</h3>
            <p className="text-gray-600">
              Creating opportunities for the next generation:
              - Technical education
              - Digital connectivity
              - Modern skill development
              - Career pathways in renewable energy
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Book className="h-5 w-5 text-purple-600" />
          <h2 className="text-xl font-semibold">Traditional Knowledge Integration</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900">Weather Prediction</h3>
            <p className="text-gray-600">
              Combining traditional weather reading methods with modern wind forecasting:
              - Local wind pattern knowledge
              - Seasonal climate understanding
              - Traditional navigation techniques
              - Environmental indicators
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-900">Sustainable Practices</h3>
            <p className="text-gray-600">
              Integrating traditional conservation methods:
              - Land use management
              - Resource preservation
              - Environmental stewardship
              - Community-based maintenance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPanel;