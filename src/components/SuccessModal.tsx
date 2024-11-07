import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to MINY!</h3>
          <p className="text-gray-600 mb-6">
            We're excited to have you join our community of world music artists.
            Check your email for next steps and important resources.
          </p>

          <div className="space-y-4 text-left bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900">What's Next:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Complete your artist profile setup</li>
              <li>• Create your first digital collectible</li>
              <li>• Connect with NYC's music community</li>
              <li>• Explore promotional tools and analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;