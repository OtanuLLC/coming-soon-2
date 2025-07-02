import React from 'react';
import { Mail, Calendar, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Mail className="text-white" size={28} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
          
          {/* Main Contact Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Get In Touch</h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Have questions about Otanu? Want to learn more about our upcoming launch? 
              We're here to help and would love to connect with you.
            </p>
            
            {/* Email Contact Card */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Email Us</h3>
              <p className="text-slate-600 mb-4">
                Send us a message and we'll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:info@otanuapp.com"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Send size={16} />
                <span>info@otanuapp.com</span>
              </a>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-3">General Inquiries</h3>
              <p className="text-slate-600 leading-relaxed">
                Questions about Otanu, our mission, or how our platform works? We're happy to share more about what we're building.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-3">Partnership Opportunities</h3>
              <p className="text-slate-600 leading-relaxed">
                Interested in partnering with us or exploring collaboration opportunities? Let's start a conversation.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-3">Media & Press</h3>
              <p className="text-slate-600 leading-relaxed">
                Members of the press looking for information, interviews, or press materials? We'd be delighted to connect.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-3">Feedback & Suggestions</h3>
              <p className="text-slate-600 leading-relaxed">
                Have ideas for how we can improve? Your feedback helps us build a better platform for meaningful connections.
              </p>
            </div>
          </div>

          {/* Response Time Notice */}
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 text-center">
            <div className="flex items-center justify-center mb-3">
              <Calendar className="text-blue-600" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Response Time</h3>
            <p className="text-blue-700">
              We typically respond to all inquiries within 24-48 hours during business days.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;