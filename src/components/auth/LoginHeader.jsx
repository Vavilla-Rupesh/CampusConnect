import React from 'react';
import { Calendar } from 'lucide-react';

export default function LoginHeader() {
  return (
    <div className="text-center transform transition-all duration-300">
      <div className="flex justify-center mb-6">
        <div
          className="glass-icon-container p-4 rounded-full 
                     border border-gray-200 dark:border-gray-700 backdrop-blur-sm
                     transform hover:scale-110 transition-all duration-300"
          style={{ background: 'transparent' }}
        >
          <img src="../logo.png" alt="logo" width={60} height={60} />
        </div>
      </div>
      <h2
        className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent
                   transform hover:scale-105 transition-all duration-300"
      >
        Welcome Back
      </h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Sign in to continue to Campus Connect
      </p>
    </div>
  );
}
