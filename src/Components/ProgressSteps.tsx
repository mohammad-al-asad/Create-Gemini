export default function ProgressSteps({ currentStep }: { currentStep: number }) {
  const steps = ['Personal', 'Address', 'Security', 'Complete']
  
  return (
    <div className="w-full mb-10">
      <div className="flex justify-between relative">
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500" 
            style={{ width: `${(currentStep - 1) * 33.33}%` }}
          ></div>
        </div>
        
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mb-2 ${
              index < currentStep 
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-md'
                : 'bg-gray-300'
            }`}>
              {index < currentStep ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <span className={`text-xs font-medium ${
              index < currentStep ? 'text-gray-900' : 'text-gray-400'
            }`}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}