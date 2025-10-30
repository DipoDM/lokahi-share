export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-12 text-center">
        {/* App Icon */}
        <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mx-auto mb-8 flex items-center justify-center">
          <span className="text-7xl">🌺</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Lokahi Ohana
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Connect with your community through shared experiences
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <a
            href="https://apps.apple.com/app/your-app-id"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-black text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span>Download on App Store</span>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.mofakolabs.ohana"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-black text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <span>Get it on Google Play</span>
          </a>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-4">
            <div className="text-3xl mb-2">🎉</div>
            <h3 className="font-semibold text-gray-900 mb-1">Discover Events</h3>
            <p className="text-sm text-gray-600">Find and join community events near you</p>
          </div>

          <div className="p-4">
            <div className="text-3xl mb-2">👥</div>
            <h3 className="font-semibold text-gray-900 mb-1">Connect</h3>
            <p className="text-sm text-gray-600">Build meaningful relationships with neighbors</p>
          </div>

          <div className="p-4">
            <div className="text-3xl mb-2">📲</div>
            <h3 className="font-semibold text-gray-900 mb-1">Share</h3>
            <p className="text-sm text-gray-600">Invite friends to events with a simple link</p>
          </div>
        </div>
      </div>
    </div>
  );
}
