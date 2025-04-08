import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { API_ENDPOINTS } from '../api/apiConfig';

export default function SettingsPanel() {
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState(false);
    const [activeTab, setActiveTab] = useState('general');

    const handleBack = () => navigate('/start');
    const toggleDetails = () => setShowDetails(!showDetails);

    const renderContent = () => {
        switch (activeTab) {
            case 'api':
                return (
                    <div className="space-y-2">
                        <h3 className="text-[#d1e7dd] font-semibold text-md mb-1">API Endpoints</h3>
                        <div className="bg-[#1a2e1a]/30 p-3 rounded-lg space-y-1">
                            {Object.entries(API_ENDPOINTS).map(([key, value]) => (
                                <div key={key} className="flex items-center text-[#d1e7dd] text-sm">
                                    <span className="font-mono text-[#8abf8a] w-24">{key}:</span>
                                    <span className="flex-1 break-all">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'info':
                return (
                    <div className="space-y-2">
                        <h3 className="text-[#d1e7dd] font-semibold text-md mb-1">Software Information</h3>
                        <div className="bg-[#1a2e1a]/30 p-3 rounded-lg space-y-1">
                            <InfoItem label="Version" value="2.3.1" />
                            <InfoItem label="Build" value="#LL2-2024" />
                            <InfoItem label="License" value="MIT" />
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="space-y-2">
                        <button 
                            onClick={handleBack}
                            className="w-full px-3 py-2 rounded-lg bg-[#2d4a2d]/50 text-[#d1e7dd] hover:bg-[#1a2e1a]/50 transition-colors flex items-center space-x-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Change Simulation Country</span>
                        </button>
                    </div>
                );
        }
    };

    const InfoItem = ({ label, value }) => (
        <div className="flex justify-between text-[#d1e7dd] text-sm">
            <span className="font-semibold">{label}:</span>
            <span>{value}</span>
        </div>
    );

    return (
        <div className="mt-2 w-full max-w-2xl bg-gradient-to-br from-[#1a2e1a] to-[#0f1a0f] p-4 rounded-xl shadow-md border border-[#2d4a2d]/50 backdrop-blur-sm mb-2">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-[#d1e7dd] text-lg font-semibold">Settings Panel</h2>
                <button 
                    onClick={toggleDetails}
                    className="text-sm px-3 py-1 rounded-lg bg-[#2d4a2d]/50 text-[#d1e7dd] hover:bg-[#1a2e1a]/50 transition-colors flex items-center space-x-1"
                >
                    <span>{showDetails ? 'Hide' : 'Show'} Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transform transition-transform ${showDetails ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            
            {showDetails && (
                <>
                    <div className="mt-2 flex space-x-2 border-b border-[#2d4a2d]/30 pb-1">
                        {['general', 'api', 'info'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 py-1 text-sm capitalize rounded-t-lg ${
                                    activeTab === tab 
                                        ? 'text-[#d1e7dd] border-b-2 border-[#8abf8a] bg-[#1a2e1a]/30' 
                                        : 'text-[#d1e7dd]/70 hover:text-[#d1e7dd] hover:bg-[#1a2e1a]/20'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    
                    <div className="mt-2">
                        {renderContent()}
                    </div>
                </>
            )}
            
            <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[#2d4a2d]/50 to-transparent" />
        </div>
    );
}
