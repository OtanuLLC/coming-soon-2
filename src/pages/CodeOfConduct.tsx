import React from 'react';
import { Users, Calendar } from 'lucide-react';

const CodeOfConduct: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Users className="text-white" size={28} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Code of Conduct
          </h1>
          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <Calendar size={16} />
            <span>Last updated: January 15, 2025</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
          <div className="prose prose-slate max-w-none">
            
            {/* Header Section */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Otanu Code of Conduct</h2>
              <h3 className="text-xl font-semibold text-yellow-600 mb-6">Creating Space for Human Connection</h3>
              <p className="text-slate-600 leading-relaxed">
                At Otanu, we believe in the transformative power of face-to-face dialogue. Our platform is designed to facilitate thoughtful, respectful, and emotionally honest conversations among people from all backgrounds. To preserve this safe and welcoming space, all participants are expected to follow this Code of Conduct:
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Respect First and Always</h2>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Treat everyone with kindness and dignity—regardless of race, gender, sexual orientation, religion, nationality, political beliefs, or personal history.</li>
                <li>Listen with the intent to understand, not to respond.</li>
                <li>Disagree respectfully. Debate ideas, never people.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Be Present, Be Real</h2>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Show up with sincerity and curiosity.</li>
                <li>Speak from personal experience; use "I" statements to share your truth.</li>
                <li>Avoid trolling, baiting, or playing devil's advocate for the sake of argument.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Privacy is Sacred</h2>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Do not record, screenshot, or share conversations without the explicit consent of all participants.</li>
                <li>Do not ask for or share personal contact information during or after the chat.</li>
                <li>What is said in the room stays in the room.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. No Harassment, Hate, or Harm</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We have a zero-tolerance policy for:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
                <li>Harassment, bullying, or intimidation.</li>
                <li>Hate speech, slurs, or derogatory language.</li>
                <li>Sexual misconduct or inappropriate behavior.</li>
                <li>Threats, violent language, or incitement.</li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium">
                  Violation may result in immediate suspension or permanent removal from Otanu.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Participate With Integrity</h2>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Be yourself—no impersonation, catfishing, or fake personas.</li>
                <li>Do not use Otanu for solicitation, promotion, or recruitment.</li>
                <li>Follow the spirit of the conversation prompts; don't derail or dominate.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Report What You See</h2>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
                <li>If you witness a violation of this Code, please report it through the in-app feature or contact our support team.</li>
                <li>We take all reports seriously and investigate thoroughly.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Evolving Together</h2>
              <p className="text-slate-600 leading-relaxed">
                Otanu is a growing community and this Code may evolve. Feedback is welcome—help us build a better space for connection.
              </p>
            </section>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200 mt-8">
              <p className="text-yellow-800 font-medium text-center">
                By joining a conversation on Otanu, you agree to uphold this Code of Conduct. Let's make this a space where everyone feels seen, heard, and safe.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;