'use client'

import { useEffect, useState } from 'react'

export default function AuthCallbackPage() {
  const [status, setStatus] = useState('Processing authentication...')

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the hash fragment from the URL
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        const accessToken = hashParams.get('access_token')
        const refreshToken = hashParams.get('refresh_token')
        const error = hashParams.get('error')
        const errorDescription = hashParams.get('error_description')

        if (error) {
          setStatus(`Authentication failed: ${errorDescription || error}`)
          return
        }

        if (accessToken && refreshToken) {
          // Redirect to the mobile app with the auth tokens
          setStatus('Redirecting to Lokahi app...')
          window.location.href = `lokahi://auth-callback${window.location.hash}`

          // If the app doesn't open after 2 seconds, show a message
          setTimeout(() => {
            setStatus('Please open the Lokahi app to complete sign in.')
          }, 2000)
        } else {
          setStatus('Authentication successful! You can close this window.')
        }
      } catch (err) {
        console.error('Auth callback error:', err)
        setStatus('An error occurred during authentication.')
      }
    }

    handleCallback()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <div className="mb-4">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Lōkahi
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {status}
          </p>
        </div>
      </div>
    </div>
  )
}
