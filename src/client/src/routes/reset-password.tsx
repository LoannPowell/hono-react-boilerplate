import { createFileRoute } from '@tanstack/react-router'
import { resetPassword } from '../lib/auth-client'
import React from 'react'

export const Route = createFileRoute('/reset-password')({
  component: RouteComponent,
})

function RouteComponent() {
  const token = new URLSearchParams(window.location.search).get("token");
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  
  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");   
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    
    if (!token) {
      setError("Invalid or missing reset token");
      setLoading(false);
      return;
    }
    
      const {error, data} = await resetPassword({
        token: token,
        newPassword: password,
      });

      console.log(error);
      if(data) {
        setSuccess(true);
      }
      if(error) {
        setError(error.message as string);
      }
  }

  if (success) {
    return (
      <div className="max-w-md mx-auto mt-8 bg-green-50 border border-green-200 rounded-lg">
        <h2 className="text-xl font-semibold text-green-800 mb-2">Reset Successful</h2>
        <p className="text-green-700">Your password has been reset successfully. You can now log in with your new password.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 white border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-200 rounded text-red-700">
          {error}
        </div>
      )}
      
      <form onSubmit={handleResetPassword}>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">      New Password
          </label>
          <input 
            type="password" 
            name="password" 
            id="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input 
            type="password" 
            name="confirmPassword" 
            id="confirmPassword"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
