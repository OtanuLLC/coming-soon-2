import React from 'react';
import { FileText, Calendar } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <FileText className="text-white" size={28} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Terms and Conditions
          </h1>
          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <Calendar size={16} />
            <span>Effective as of: December 23, 2024</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
          <div className="prose prose-slate max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Background</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern our relationship with you as a user of Otanu's products and services, including our iOS and Android apps and our website (together, we refer to these as our "Products"). By using our Products, you agree to be bound by these Terms and acknowledge that you have read our Privacy Policy. You also confirm that you have read and agree to our Community Guidelines.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                These Terms contain an arbitration clause that applies to residents of the United States. Please review Section 11 of the Terms for details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Using Otanu</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Otanu is a social network based on video chat rooms facilitating conversations. Our products include our iOS and Android apps and our website (our "Products").
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Among other things, our Products allow you to use your voice to interact with others through "Conversations." These audio Conversations may include "Chats," "Live Rooms," and Voice Messages called "VMs" or "Messages." Our Products also allow you to share recordings of your interactions for others to enjoy (or participate in) later.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                You may use our Products only if you can form a binding contract with Otanu, and only in compliance with these Terms and all applicable laws. You must be at least 13 years old to use our Products, or if the age of lawful consent under the laws of your country of residence is older than 13, you must be at least the age of lawful consent to use our Products.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Creating an account</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you open an Otanu account, you must provide us with accurate and complete information to allow us to create, verify, and maintain your account.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Guest Users</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may also allow you to use our Products to a limited extent without opening an account, such as by allowing you to participate in audio conversations with other users. You may be able to join a Conversation (such as a Chat or Live Room) or a community (a "House"), to speak to other users in real time for a limited amount of time using a link, or accept invitations for Conversations (such as Live Rooms) scheduled for a future date. Before you can participate in Conversations as a Guest User, we may ask you for some information (i.e. your name) which will be used to identify you to other users for the duration of your experience while using our Products. We will only allow you to do so if you agree to our Terms like any other user must; all provisions of our Terms, our Privacy Policy, and our Community Guidelines apply to you the same as they do for any other user.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Subject to these Terms and our policies (including our Community Guidelines), we grant you a limited, non-exclusive, non-transferable and revocable license to use our Products. If you are using the Products on behalf of a business or some other entity, you represent that you are authorized to bind that business or entity to these Terms and you agree to these Terms on behalf of that business or entity (and all references to "you" and "your" in these Terms will mean both you as the end user and that business or entity).
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Some of our Products may consist of software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to all upgrades.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                By providing your mobile telephone number or email address, you agree that we may communicate with you via text messages or other electronic means to your mobile device, provided that we obtain your consent where we are legally required to do so. In the event you change or deactivate your mobile telephone number or email address, you agree to promptly update your Otanu account information to ensure that your messages are not sent to the wrong person. You can opt out of certain types of communications via your account settings.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may collect personal data of minors under 18, who in any case are of age under applicable privacy law. All users under 18 are defaulted into a "private profile" setting, which limits what information is publicly available. (Privacy settings for others' Conversations will vary based on the creator's preferences.) You can change these settings in your profile at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Personalization</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our Products are personalized for you by design. We'll use your activity and interests on our apps and website to recommend Conversations, content you might want to share, Conversations you might want to start or join, other users to connect with, Houses or groups you can join, and other content we think may be interesting to you. For additional details, please see our Personalization FAQ.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Your Content</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our Products allow you to interact with others through Conversations. You can start live conversations that happen in real-time ("Live Rooms"). or asynchronous conversations, including "Chats" and "Messages" or "VMs," which do not happen in real time.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our Products also allow you to create content, including audio content, visual images, GIFs, text, and symbols. Anything you say or make available in our Products or generate using the Products is referred to as "User Content."
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                User Content may also include personal information you provide us (such as Account Information and Biographical Information) and personal information we get when you use Otanu (such as Usage and Activity Information and Conversations), as described in our Privacy Policy. Our Privacy Policy describes how we handle the information you provide to us when you use our Products.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                You can share User Content as Public Content, or with your "friends-only," "friends-of-friends," or "House" (user community) networks, depending on your set preferences.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                More details about each type of Conversation and other type of User Content you can create, the applicable privacy settings you can set for each Conversation, and how to manage your content on Otanu can be found in our Privacy Policy.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">A. Your rights and responsibilities</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Otanu is a place for people to talk, tell stories, develop ideas, deepen friendships, and meet interesting new people around the world.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                As part of this community, you must follow our Community Guidelines when you use our Products. You are responsible for any activity that occurs in your account, so it's important that you keep your account secure, and it is your responsibility to maintain the security of any passwords or other codes you use to access your account. If you think that someone has gained unauthorized access to your account, please advise us immediately.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                You retain all ownership rights in the User Content you contribute to Otanu. But you also give us legal permission to use that content, as explained in the next section.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">B. How Otanu and others can use your content</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                When you share User Content on Otanu, you grant us a license to use that content. The license we are granted depends on the features you use, the type of User Content you share, and the settings and preferences you have selected.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                For all User Content you grant Otanu and our affiliates a worldwide, royalty-free, sublicensable, and transferable license to host, store, cache, use, display, reproduce, modify, create derivative works, publicly perform, adapt, edit, publish, analyze, transmit, and distribute that content for the purpose of operating, developing, providing, promoting, and improving our Products in any media formats or channels. This license includes a right for us to make your content available to, and pass these rights along to, service providers with whom we have contractual relationships related to the provision of our Products, solely for the purpose of providing such Products.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Furthermore, you grant Otanu, our affiliates, other users of the Products, and our business partners an unrestricted, worldwide, royalty-free, irrevocable, and perpetual right and license to create derivative works from, promote, exhibit, broadcast, syndicate, reproduce, distribute, synchronize, overlay graphics and auditory effects on, publicly perform, and publicly display all or any portion of your User Content in any form and in any and all media or distribution methods, now known or later developed, including use of your name, likeness, and voice, for commercial and non-commercial purposes.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Nothing in these Terms restricts other legal rights Otanu or its users may have to User Content, for example under other licenses, express or implied. We reserve the right to remove or modify User Content for any reason, including User Content that we believe violates these Terms, our Community Guidelines, or other policies.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                You represent and warrant to us that the User Content you contribute to Otanu is either not subject to copyright or any other proprietary rights or that you have all necessary permissions, clearances, and authorizations to contribute the User Content to Otanu and to grant us all of the rights that you grant to us under these Terms.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We have no obligation to edit or control User Content that is contributed to our Products. While we're not required to do so, we may access, review, screen, and delete your User Content at any time and for any reason, including to provide and develop our Products or if we think your User Content violates these Terms, our Community Guidelines, or other policies.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">C. Recordings on Otanu</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                As explained in our Privacy Policy, Otanu records audio Conversations, including Conversations in Live Rooms, in order to identify and investigate potential violations of our Community Guidelines or our Terms of Service, or otherwise illegal or illicit activity. This is part of our commitment to you under these Terms of Service to work to provide a safe space for your Conversations and combat illegal and harmful conduct and content.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                In Live Rooms that are open to all users, we may also generate transcripts of the Conversation to analyze the contents of it in order to personalize our Products ("Transcripts").
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                By speaking in a Conversation, you acknowledge that Otanu and its users may record your voice and other User Content, generate Transcripts of those Conversations, and Otanu is permitted to use these recordings or Transcripts in any manner consistent with our Privacy Policy.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">D. Feedback you provide</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We always love to hear from our users, but you are not required to provide us with feedback. If you do provide feedback or suggestions to us, we may use your feedback and suggestions without compensating you, and without any restriction or obligation to you. You agree that we will own all rights in any materials or other items that we develop based on your feedback or suggestions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Respect For Other People's Legal Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Otanu respects the intellectual property rights of others and we expect our users to do the same. You may not use our Products in a way that violates or infringes someone else's rights of publicity, privacy, copyright, trademark, or other intellectual property rights.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">A. Repeat infringer policy</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                It's our policy, in appropriate circumstances and at our discretion, to disable or terminate the accounts of people who repeatedly infringe or are repeatedly charged with infringing copyrights or other intellectual property rights. In keeping with the Digital Millennium Copyright Act, we'll respond quickly to claims of copyright infringement on Otanu that are reported to our designated copyright agent, identified below.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">B. Reporting claimed infringement</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you're a copyright owner or authorized to act on behalf of one, you can report alleged copyright infringements on our Products by completing the DMCA Notice of Alleged Infringement and sending it to our designated copyright agent. To submit a DMCA notice, follow the instructions below.
              </p>

              <h4 className="text-lg font-semibold text-slate-800 mb-3">Submit a DMCA Notice</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Please send the following information to designated copyright agent: <strong>Otanu.App@gmail.com</strong> with the subject line <strong>*Otanu Copyright*</strong>.
              </p>
              <ol className="list-decimal list-inside text-slate-600 space-y-2 ml-4 mb-4">
                <li>Identify the copyrighted work you believe has been infringed. If you're reporting multiple copyrighted works, you can provide a representative list of those copyrighted works.</li>
                <li>Identify the content on our Product you claim to be infringing your rights, including the information we need to help us find it, such as a URL.</li>
                <li>Provide your mailing address, phone number and email address.</li>
                <li>Include both of these statements in the body of your notice:
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>"I hereby state that I have a good faith belief that the disputed use of the copyrighted material or reference or link to such material is not authorized by the copyright owner, its agent, or the law (for example, as a fair use)."</li>
                    <li>"I hereby state that the information in this notice is accurate and, under penalty of perjury, that I'm the owner, or authorized to act on behalf of the owner of the copyright or of an exclusive right under the copyright that's allegedly infringed."</li>
                  </ul>
                </li>
                <li>Include your full legal name and your electronic or physical signature (for example, by typing your full name).</li>
              </ol>
              <p className="text-slate-600 leading-relaxed mb-4">
                You can also send your completed DMCA notice to our physical address:
              </p>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 mb-4">
                <p className="text-slate-700 font-medium">PO BOX 475700</p>
                <p className="text-slate-700 font-medium">3749 Buchanan Street</p>
                <p className="text-slate-700 font-medium">San Francisco, California 94123, USA</p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                When we get your DMCA notice, we'll take whatever action we determine is appropriate, which may include removing the reported content from our Products. If we remove content in response to a DMCA notice, we may notify the person who contributed it to Otanu so they have the opportunity to submit a counter-notice. We may also send a complete copy of the notice to others, as appropriate.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Trust and Safety</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We try hard to make sure Otanu is a safe place for all users, and we expect you to do the same. By using our Products, you agree that you will comply with these Terms, including our Community Guidelines and any other policies Otanu makes available in order to maintain the safety of our Products. We may use automated systems, whenever necessary with or without human intervention, to scan the names of rooms, images, or other surfaces to identify potential violations. We reserve the right to remove any content from our Products for any reason, or to limit its availability. We likewise reserve the right to terminate or suspend your account, or limit its availability, for any reason.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Third-Party Links, Content, And Services</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our Products may contain links to third-party websites, services, special offers, content, or other events or activities that are not owned or controlled by Otanu. We do not endorse or assume any responsibility for any third-party sites, information, materials, products or services. If you access any third-party website, service or content from our Products, you do so at your own risk and you agree that Otanu will have no liability arising from your use of or access to any third-party website, service or content or the accuracy of any outputs generated by these services. You understand that any third party AI tools may return inaccurate, offensive, or wrong information that does not accurately reflect the inputs you provide.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Examples of third-party services and content that may be integrated with our Products include social integrations, which may be used to provide you with social sharing, and to allow you to share your content on other platforms; and AI integrations, which may be used to help make suggestions or make our Products easier to use. If you share your content to third party services, then that content may stay on those third party services even if you subsequently delete your content on our Products or delete your Otanu account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Modification And Termination Of The Products</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We're improving our Products and creating new ones all the time. That means we may add or remove features, products, or functions of our Products, and we may also suspend or stop providing our Products. We may take any of these actions at any time for any reason, and when we do, we may not provide you with any notice beforehand.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Otanu may terminate or suspend this license and your access to our Products at any time, with or without cause or notice to you. Otanu may also limit your use of specific features in our Products with or without cause or notice to you. While we'll try to give you reasonable notice beforehand, we can't guarantee that will be possible in all circumstances. For example:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
                <li>if you are under the age of 18, you may be limited from accessing certain types of content or features;</li>
                <li>if another user has blocked you, you will not be able to see content from them;</li>
                <li>if your account is found to have violated our terms or policies, and your account is not immediately terminated, you may retain access to the service but be limited from using certain features, or sharing content;</li>
                <li>we may deactivate your account due to prolonged inactivity;</li>
                <li>we may reclaim your username at any time for any reason.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                You can terminate these Terms at any time and for any reason by deleting your Otanu account. If you violate any provision of these Terms or our Community Guidelines, your authorization to access our Products terminates automatically.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Regardless of who terminates these Terms, both you and Otanu continue to be bound by Sections 3, and 9-13 of the Terms notwithstanding termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Indemnity</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You agree, to the maximum extent permitted by law, to indemnify, defend, and hold harmless Otanu and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), relating to (a) your access to or use of our Products, (b) your User Content, (c) any dispute between you and any third party, or (d) your breach of any of these Terms. Otanu may assume the exclusive control and defense of any matter for which you have a duty to indemnify Otanu and, if we do, you agree to cooperate with our defense of those claims.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Disclaimers</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our Products and all included content are provided on an "as is" basis without warranty of any kind, whether express or implied.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Otanu SPECIFICALLY DISCLAIMS ANY AND ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Otanu takes no responsibility and assumes no liability for any User Content that you or any other user or third party posts or transmits using our Products. You understand and agree that you may be exposed to User Content that is inaccurate, objectionable, inappropriate for children or otherwise unsuited to your purpose.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                THE LIMITATIONS, EXCLUSIONS, AND DISCLAIMERS IN THIS SECTION APPLY TO THE MAXIMUM EXTENT PERMITTED BY LAW. Otanu does not disclaim any warranty or other right that we are prohibited from disclaiming under applicable law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Limitations Of Liability</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, Otanu WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE PRODUCTS; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE PRODUCTS, INCLUDING, WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD PARTIES; OR (C) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                EXCEPT AS PROVIDED IN SECTION 11, TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL OTANU'S AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS RELATING TO THE PRODUCTS EXCEED ONE HUNDRED U.S. DOLLARS (U.S. $100.00).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">11. Arbitration And Dispute Resolution</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have a concern or dispute with Otanu, we would appreciate the opportunity to resolve it without having to resort to formal legal proceedings. You agree to notify Otanu in writing at <strong>legalrequest@Otanu.com</strong> before filing any claims with a court or arbitration body so that we can attempt to resolve the issue with you. Your notice should include an explanation of your concern or dispute, how it arose, and what (if anything) you want Otanu to do to resolve it. If you and Otanu cannot resolve the dispute within 60 days of your notice, either you or we may file a formal proceeding in accordance with this Section 11.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Please read the following terms carefully because they require U.S. residents and Otanu to resolve all disputes through binding arbitration.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">A. Mandatory Arbitration Agreement for U.S. Residents</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you are a resident of the United States, you and Otanu agree that all claims between us, including any disputes arising out of or relating to these Terms or use of the Products will be resolved through binding arbitration on an individual basis. There are two exceptions. First, for claims that qualify, you or Otanu can elect to have those claims heard in small claims court. Second, any dispute in which either party seeks equitable relief for the alleged unlawful use of copyrights, trademarks, trade names, logos, trade secrets, or patents will be resolved in court. Any disputes concerning the arbitrability of a claim (including disputes about the scope, applicability, enforceability, revocability, or validity of the Arbitration Agreement) will be decided by the arbitrator, except as expressly provided below.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                You can opt-out of this agreement to arbitrate by sending a letter to Otanu at <strong>legalrequest@Otanu.com</strong> stating that you wish to opt-out of the arbitration agreement. You must send us your opt-out notice within 30 days of first registering your Otanu account or agreeing to these Terms, but if you previously agreed to a prior version of these Terms that provided for an arbitration opt-out, you do not have the opportunity to opt-out under this version of the Terms.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Any arbitration will be administered by JAMS pursuant to its employment arbitration rules & procedures (the "JAMS rules"), which are available here. If these rules cannot be enforced for any reason, then you and Otanu will arbitrate the dispute utilizing JAMS comprehensive arbitration rules and procedures, or other rules the arbitrator deems appropriate for the dispute. The arbitration will be before a single arbitrator and conducted in English.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The arbitrator will have the power to decide any motions brought by any party to the arbitration, including motions for summary judgment and/or adjudication, and motions to dismiss and demurrers, applying the standards set forth for such motions under the California Code of Civil Procedure. The arbitrator will issue a written decision on the merits, the arbitrator will have the power to award any remedies available under applicable law, and the arbitrator may award attorneys' fees and costs to the prevailing party where permitted by applicable law. The decree or award rendered by the arbitrator may be entered as a final and binding judgment in any court having jurisdiction thereof.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Subject to the Federal Arbitration Act's exclusive applicability to the enforcement of this agreement to arbitrate, you agree that the arbitrator will conduct any arbitration hearing or proceeding applying California substantive and decisional law and the California Code of Civil Procedure, including the California Civil Discovery Act. You agree that any arbitration under this agreement will be conducted in the county in which you live or such other mutually-agreed location. If the claim is for less than $10,000 (ten thousand U.S. dollars) (and doesn't involve injunctive relief), you may choose whether the arbitration is conducted (i) solely on the basis of documents submitted to the arbitrator, (ii) through telephone or video calls, or (iii) by an in-person hearing under the JAMS rules in your county of residence.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The arbitrator can award any relief that a court of competent jurisdiction could award. If the arbitrator awards you an amount higher than the last written settlement amount offered by Otanu before an arbitrator was selected, Otanu will pay you the higher of (i) the amount awarded by the arbitrator, and (ii) $10,000 (ten thousand U.S. dollars).
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                ALL CLAIMS MUST BE BROUGHT IN THE PARTIES' INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING, AND, UNLESS WE AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON'S CLAIMS. YOU AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND Otanu ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                To the extent any claim, dispute or controversy regarding Otanu or our Products isn't arbitrable under applicable laws or otherwise: you and Otanu both agree that any claim or dispute with Otanu will be resolved exclusively in accordance with Section 11.B. of these Terms.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">B. Venue</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                For any claims or disputes arising out of or relating to these Terms or use of the Products that are not resolved through binding arbitration under Section 11.A. of these Terms, you and Otanu agree to submit to the personal and exclusive jurisdiction of the Delaware Court of Chancery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">12. Governing Law and Jurisdiction</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                These Terms are governed by the laws of the State of Delaware, without regard to its conflict of laws principles. If the laws in your country require agreements with consumers to be governed by the local laws, then Section 12 does not apply to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">13. Miscellaneous</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Changes and Notifications</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may revise these Terms from time to time and the most current version will always be available on our website and via our apps. Unless otherwise required by law, or where we need to make urgent changes for safety, security or regulatory reasons, we will give you reasonable advance notice through appropriate, transparent notifications (for example, through our Products) of material changes to these Terms which impact you and the date that they will come into force. The changes will only apply to our relationship going forward. If you do not agree to the changes to the Terms, you will have to stop using our Products. If you continue to use the Products once the changes come into effect, we will take that as your acceptance of the updated Terms.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Assignment</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                These Terms, and any rights and licenses granted under these Terms, may not be transferred or assigned by you, but may be assigned by Otanu without restriction. Any attempted transfer or assignment in violation of the above will be null and void.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Entire Agreement</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                These Terms, together with the Privacy Policy, Community Guidelines, and any amendments and additional agreements you may enter into with Otanu in connection with our Products, constitute the entire agreement between you and Otanu concerning our Products. If any provision of these Terms is deemed invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">No Waiver</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                No waiver of any term of these Terms will be deemed a further or continuing waiver of such term or any other term, and Otanu's failure to assert any right or provision under these Terms will not constitute a waiver of such right or provision.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Parties</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                This is a contract between you and Otanu LLC (D/B/A "Otanu"), with offices located at PO BOX 475700, 3749 Buchanan Street, San Francisco, California 94123, USA. Any reference to Otanu includes all worldwide subsidiaries.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                These Terms are effective as of December 23, 2024.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;