import React from 'react';
import { Clock, Mail, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl p-2">
              <img 
                src="/src/assets/Otanu Logo No Background.png" 
                alt="Otanu Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500"> Amazing </span>
            is Coming
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            We're crafting an exceptional digital experience that will transform the way you meet new people.
          </p>
          
          {/* Status badge */}
          <div className="inline-flex items-center space-x-2 bg-yellow-50 text-yellow-700 px-6 py-3 rounded-full mb-12 border border-yellow-200">
            <Clock size={20} />
            <span className="font-medium">Coming Soon</span>
          </div>
          
          {/* Newsletter signup */}
          <div className="max-w-md mx-auto mb-16">
            <p className="text-slate-600 mb-4 font-medium">Be the first to know when we launch</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all duration-200"
                />
              </div>
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Notify Me</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="flex items-center justify-center space-x-2 text-slate-500">
            <Mail size={16} />
            <span>Questions? Reach us at info@otanuapp.com</span>
          </div>
        </div>
      </div>
      
      {/* Features preview section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We're building something revolutionary. Here's a glimpse of what's coming.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Design",
                description: "Beautiful, intuitive interfaces that feel natural and engaging.",
                gradient: "from-yellow-400 to-orange-400"
              },
              {
                title: "Powerful Features",
                description: "Advanced functionality that simplifies complex tasks.",
                gradient: "from-orange-400 to-red-400"
              },
              {
                title: "Seamless Experience",
                description: "Smooth, fast, and reliable across all your devices.",
                gradient: "from-yellow-500 to-yellow-600"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;