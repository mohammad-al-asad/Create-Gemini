"use client";
import { useEffect, useState } from "react";
import { FiEye, FiMail, FiLock } from "react-icons/fi";

interface Submission {
  _id: string;
  firstName: string;
  lastName: string;
  dob: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  status: "pending" | "verified" | "rejected";
  email: string;
  ssn: string;
  createdAt: Date;
}

export default function AdminPanel() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/verifications");
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleViewDetails = (submission: Submission) => {
    setSelectedSubmission(submission);
  };

  const handleCloseModal = () => {
    setSelectedSubmission(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Verification Dashboard</h1>
          <div className="text-sm text-gray-500">
            {submissions.length} {submissions.length === 1 ? "submission" : "submissions"}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SSN</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission) => (
                    <tr key={submission._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-medium">
                              {submission.firstName.charAt(0)}
                              {submission.lastName.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {submission.firstName} {submission.lastName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {new Date(submission.dob).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <FiMail className="mr-2 text-gray-400" />
                          {submission.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <FiLock className="mr-2 text-gray-400" />
                          {submission.ssn}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            submission.status === "verified"
                              ? "bg-green-100 text-green-800"
                              : submission.status === "rejected"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {submission.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(submission.createdAt).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleViewDetails(submission)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <FiEye className="inline mr-1" /> View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Detail Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Submission Details
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-500 hover:text-gray-800 text-xl"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <span className="font-medium">Name:</span>{" "}
                    {selectedSubmission.firstName} {selectedSubmission.lastName}
                  </div>
                  <div>
                    <span className="font-medium">Email:</span>{" "}
                    {selectedSubmission.email}
                  </div>
                  <div>
                    <span className="font-medium">Date of Birth:</span>{" "}
                    {new Date(selectedSubmission.dob).toLocaleDateString()}
                  </div>
                  <div>
                    <span className="font-medium">Address:</span>
                    <br />
                    {selectedSubmission.street}
                    <br />
                    {selectedSubmission.city}, {selectedSubmission.state}{" "}
                    {selectedSubmission.zip}
                  </div>
                  <div>
                    <span className="font-medium">SSN:</span>{" "}
                    {selectedSubmission.ssn}
                  </div>
                  <div>
                    <span className="font-medium">Status:</span>{" "}
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                        selectedSubmission.status === "verified"
                          ? "bg-green-100 text-green-800"
                          : selectedSubmission.status === "rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {selectedSubmission.status}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Submitted At:</span>{" "}
                    {new Date(selectedSubmission.createdAt).toLocaleString()}
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <button
                    onClick={handleCloseModal}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
