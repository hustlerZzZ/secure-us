import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/welcome')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="animate-fall absolute w-2 h-2 bg-yellow-500 top-0 left-10 opacity-70"></div>
          <div className="animate-fall absolute w-2 h-2 bg-red-500 top-0 left-20 opacity-70"></div>
          <div className="animate-fall absolute w-2 h-2 bg-blue-500 top-0 left-40 opacity-70"></div>
          <div className="animate-fall absolute w-2 h-2 bg-green-500 top-0 left-60 opacity-70"></div>
      </div>

      <h1 className="text-4xl font-bold mb-4">🎉 Welcome to the Platform! 🎉</h1>
      <p className="text-lg text-gray-300 max-w-md">
          You have successfully passed all authentication checks. Enjoy secure and seamless access to our platform.
      </p>

      <button
          onClick={() => (window.location.href = "/dashboard")}
          className="mt-6 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
      >
          Go to Dashboard 🚀
      </button>
  </div>
}
