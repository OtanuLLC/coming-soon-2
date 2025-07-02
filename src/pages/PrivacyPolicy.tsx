import React from 'react';
import { Shield, Calendar } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="text-white" size={28} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Privacy Policy
          </h1>
          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <Calendar size={16} />
            <span>Last updated: January 15, 2025</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
          <div className="prose prose-slate max-w-none">
            
            <section className="mb-8">
              <p className="text-slate-600 leading-relaxed mb-4">
                Thank you for using Otanu!
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Otanu is a social network based on live video chats. Our products include our iOS and Android apps and our website (our "Products"). Among other things, our Products allow you to use video chats to interact with others in real-time through facilitated "Conversations" ("Chats," "Live Rooms," and "VMs,"), and to share recordings of those interactions for others to enjoy (or participate in) later.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                When you use our Products, you provide personal information to us. We wrote this privacy policy (the "Privacy Policy" or "Policy") to help you understand what personal information we collect, how we use it and disclose it, how long we retain it, and what choices you have about it. This Policy does not cover information that does not identify you. Nor does it cover the practices of Otanu users. Users who you interact with on Otanu, or view information you share on Otanu, might save that information outside of our Products using other tools.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Table of Contents</h2>
              <ol className="list-decimal list-inside text-slate-600 space-y-2 ml-4">
                <li><a href="#information-we-collect" className="text-yellow-600 hover:text-yellow-700">Information We Collect</a></li>
                <li><a href="#how-we-use" className="text-yellow-600 hover:text-yellow-700">How We Use The Information We Collect</a></li>
                <li><a href="#how-we-disclose" className="text-yellow-600 hover:text-yellow-700">How We Disclose The Information We Collect</a></li>
                <li><a href="#how-long-we-keep" className="text-yellow-600 hover:text-yellow-700">How Long We Keep Information</a></li>
                <li><a href="#managing-your-information" className="text-yellow-600 hover:text-yellow-700">Managing Your Information</a></li>
                <li><a href="#transferring-information" className="text-yellow-600 hover:text-yellow-700">Transferring Information</a></li>
                <li><a href="#revisions" className="text-yellow-600 hover:text-yellow-700">Revisions</a></li>
                <li><a href="#contact-us" className="text-yellow-600 hover:text-yellow-700">Contact Us</a></li>
                <li><a href="#california-disclosures" className="text-yellow-600 hover:text-yellow-700">California Consumer Privacy Act Disclosures</a></li>
              </ol>
            </section>

            <section className="mb-8" id="information-we-collect">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">A. Information You Provide</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                When you use Otanu, we collect personal information that you provide to us. This includes:
              </p>
              
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Account Information</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                When you set up an account, we may ask you to provide information about yourself, including your name, phone number, email address, and date of birth. If you use our Products as a guest without setting up an account, we may ask you to provide your name, phone number or other information.
              </p>

              <h4 className="text-lg font-semibold text-slate-800 mb-3">Biographical Information</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may also ask you to provide us with some additional personal information about you that will be visible in our Products, such as topics that interest you ("Interests"), a profile picture, and a bio in your profile to tell others more about you. When you change your profile picture we store a copy of the new picture you upload and retain all profile pictures you uploaded previously for trust and safety purposes and in accordance with our data retention policies.
              </p>

              <h4 className="text-lg font-semibold text-slate-800 mb-3">Social Media And Contact Information</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                You may choose to connect your other social media accounts, or sync your contacts. If you choose to do so we will collect this information.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">B. Information We Get When You Use Our Products</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                When you use our Products, we collect additional personal information based on your activity and other personal information you might choose to provide. This includes:
              </p>

              <h4 className="text-lg font-semibold text-slate-800 mb-3">Audio/Visual Conversations</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>Chats.</strong> Chats are audio/text conversations you can have on Otanu that occur asynchronously with other users, and which may also contain attachments like links or images. With Chats, the content you create can be shared with groups of users or user networks more publicly.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>Voice Messages ("Messages" or "VMs").</strong> Direct voice messages, which we call "Messages" or "VMs" are voice conversations allowing you to send audio content directly to one person or a group of people.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>Live conversations ("Live Rooms").</strong> Live Rooms are Conversations where you interact with other users in real time through video chat using your voice, camera and other features provided within Live Rooms.
              </p>
            </section>

            <section className="mb-8" id="how-we-use">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. How We Use The Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use the personal information we collect to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Register your account and verify your identity</li>
                <li>Develop, operate, improve, maintain, and protect our Products</li>
                <li>Personalize our Products</li>
                <li>Send you communications</li>
                <li>Verify and enhance the safety and security of our Products</li>
                <li>Prevent fraud or other unauthorized activity</li>
              </ul>
            </section>

            <section className="mb-8" id="how-we-disclose">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Disclose The Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We do not sell personal information about our users. We may, however, disclose that information to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Other online services you connect to your Otanu account</li>
                <li>Services we use to market Otanu</li>
                <li>Service providers and other third parties</li>
                <li>Law enforcement or governmental organizations when required</li>
              </ul>
            </section>

            <section className="mb-8" id="how-long-we-keep">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. How Long We Keep Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We keep your personal information only for as long as we reasonably need it to provide our Products to you and fulfill the purposes described in this Policy. This is also the case for anyone that we disclose your personal information to and who carries out services on our behalf.
              </p>
            </section>

            <section className="mb-8" id="managing-your-information">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Managing Your Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You can manage your information by:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Updating your profile settings</li>
                <li>Requesting access to your information</li>
                <li>Requesting deletion of your information</li>
                <li>Opting out of communications</li>
              </ul>
            </section>

            <section className="mb-8" id="transferring-information">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Transferring Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                While our Products are offered worldwide, we are based in the United States and rely on cloud storage providers that store user data on our behalf in the United States.
              </p>
            </section>

            <section className="mb-8" id="revisions">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Revisions</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may change this Policy from time to time. If we do, we'll post any changes on this page.
              </p>
            </section>

            <section className="mb-8" id="contact-us">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The best way to get in touch with us is through email at info@otanuapp.com
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                You can also reach us at:
              </p>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 font-medium">PO BOX 475700</p>
                <p className="text-slate-700 font-medium">3749 Buchanan Street</p>
                <p className="text-slate-700 font-medium">San Francisco, California 94123</p>
                <p className="text-slate-700 font-medium">USA</p>
              </div>
            </section>

            <section className="mb-8" id="california-disclosures">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. California Consumer Privacy Act Disclosures</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The California Consumer Privacy Act (CCPA) requires us to disclose categories of Personal Information we collect and how we use it, the categories of sources from whom we collect Personal Information, and the third parties to whom we disclose it, which we have explained above.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;