'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn } from "lucide-react"
import { useEffect, useState } from "react"

export function AuthPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] animate-pulse"></div>
        </div>
      </div>

      {/* Authentication card */}
      <Card className={`w-[400px] bg-gray-900/70 backdrop-blur-md border-gray-800 shadow-2xl transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-white">Welcome to CATALYXT</CardTitle>
          <CardDescription className="text-center text-gray-400">
            Sign in with your Google account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            className="w-full bg-white hover:bg-gray-100 text-gray-900 hover:text-gray-900 font-medium py-2 px-4 rounded-lg shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Continue with Google
          </Button>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-400">
          <p>
            By signing in, you agree to our{' '}
            <a href="#" className="text-blue-400 hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}