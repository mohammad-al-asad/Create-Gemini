import { useEffect, useState } from "react";

const AdminPanel = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the submission
    const savedData = localStorage.getItem("verificationSubmission");
    const parseData = JSON.parse(savedData)
    
    if (parseData) {
      setUserData(parseData); 
    }
    setLoading(false);
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 m-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gemini</h1>
        <p className="text-gray-600">Submission Details</p>
        <div className="border-t border-gray-200 my-4"></div>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : userData ? (
        <div className="space-y-6">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">First Name</p>
                <p className="font-medium text-gray-400 text-sm">
                  {userData.firstName}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Name</p>
                <p className="font-medium text-gray-400 text-sm">
                  {userData.lastName}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-medium text-gray-400 text-sm">
                  {userData.dob}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Address
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Street</p>
                <p className="font-medium text-gray-400 text-sm">
                  {userData.street}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">City</p>
                  <p className="font-medium text-gray-400 text-sm">
                    {userData.city}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">State</p>
                  <p className="font-medium text-gray-400 text-sm">
                    {userData.state}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">ZIP</p>
                  <p className="font-medium text-gray-400 text-sm">
                    {userData.zip}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Security
            </h2>
            <div className="grid grid-rows-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-400 text-sm">
                  {userData.email}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">SSN (Last 4 Digits)</p>
                <p className="font-medium text-gray-400 text-sm">
                  ••••••••••••••
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No submission data found
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
