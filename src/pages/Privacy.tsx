"use client";

import React from 'react';
import StarField from '@/components/StarField';
import SpaceElements from '@/components/SpaceElements';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      {/* Background with radial gradient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[600px] bg-gradient-radial from-white/10 via-white/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Starry Background */}
      <StarField />

      {/* Space Elements */}
      <SpaceElements />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 px-4 py-20"
      >
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h1 className="text-4xl font-bold mb-8 italic text-center">Privacy Policy</h1>
          <p className="text-gray-400 mb-8 italic text-center">Effective Date: August 26, 2025</p>

          <p className="mb-8 italic">
            At Neon Next Generation PTY LTD ("we," "our," or "us"), your privacy is a priority. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data. We are committed to complying with: 
          </p>
          <ul className="mb-8 italic">
            <li>The Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs)</li>
            <li>The General Data Protection Regulation (GDPR) for individuals located in the European Union (EU) and European Economic Area (EEA)</li>
          </ul>
          <p className="mb-8 italic">
            By using our website or services, you acknowledge that your personal information may be processed under both Australian and EU privacy frameworks, depending on your location.
          </p>

          <h2 className="text-2xl font-bold mb-4">1. Information We Collect </h2>
          <p className="mb-4">
            We may collect and process the following types of personal data:
          </p>
          <ul className="mb-8 italic">
            <li>Contact details (name, email, phone number)</li>
            <li>Usage data (IP address, browser type, device info, cookies)</li>
            <li>Any information you voluntarily provide via our forms, messages, or interactions</li>
          </ul>
          <p className="mb-8 italic">
            We only collect information through lawful and fair means, with your knowledge and consent where required.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Legal Basis for Processing</h2>
          <p className="mb-4">
            Depending on your location, we process your data on one or more of the following legal bases:
          </p>
          <ul className="mb-8 italic">
            <li>Your consent</li>
            <li>Contractual necessity</li>
            <li>Legal obligations</li>
            <li>Our legitimate interests so long as they do not override your personal rights</li>
          </ul>
          <p className="mb-8 italic">
            This applies especially to users in the EU/EEA under GDPR.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information </h2>
          <p className="mb-4">
            We may use your data to:
          </p>
          <ul className="mb-8 italic">
            <li>Provide, operate, and maintain our services</li>
            <li>Improve user experience and develop new features</li>
            <li>Communicate with you about products, updates, or offers</li>
            <li>Ensure legal and regulatory compliance</li>
            <li>Prevent fraud and protect our infrastructure</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar tools to understand user behavior, manage sessions, and improve functionality.
          </p>
          <ul className="mb-8 italic">
            <li>EU users will be shown a cookie consent banner before non-essential cookies are used.</li>
            <li>All users can manage cookies through their browser settings.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">5. Sharing of Information </h2>
          <p className="mb-4">
            We do not sell your personal information.
          </p>
          <p className="mb-4">
            We may share your data with:
          </p>
          <ul className="mb-8 italic">
            <li>Service providers who help deliver our services</li>
            <li>Government or regulatory authorities, when legally required</li>
            <li>Other third parties, with your consent or where legally permitted</li>
          </ul>
          <p className="mb-8 italic">
            When transferring data internationally (e.g. EU to Australia), we ensure appropriate safeguards are in place (e.g. Standard Contractual Clauses).
          </p>

          <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
          <p className="mb-4">
            We use industry-standard measures to protect your data from unauthorized access, alteration, or destruction. These include:
          </p>
          <ul className="mb-8 italic">
            <li>Encryption</li>
            <li>Access controls</li>
            <li>Secure hosting environments</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">7. Your Rights </h2>
          <p className="mb-4">
            <strong>Under Australian Law:</strong>
          </p>
          <ul className="mb-4">
            <li>You have the right to access and correct your personal information.</li>
          </ul>
          <p className="mb-4">
            <strong>Under the GDPR, if you are in the EU/EEA, you also have the right to:</strong>
          </p>
          <ul className="mb-8 italic">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Erase your data ("right to be forgotten")</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with your Data Protection Authority</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
          <p className="mb-8 italic">
            We keep your personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
          </p>

          <h2 className="text-2xl font-bold mb-4">9. Children's Privacy </h2>
          <p className="mb-8 italic">
            Our services are not intended for children under the age of 13 (or the minimum age permitted by your local laws). We do not knowingly collect data from children under this age. If we discover such data, we will delete it immediately.
          </p>

          <h2 className="text-2xl font-bold mb-4">10. Policy Updates</h2>
          <p className="mb-8 italic">
            We may update this Privacy Policy from time to time whenever we see fit. Any changes will be published on this page with the updated effective date. Your continued use of our services indicates your acceptance of any changes.
          </p>

          <h2 className="text-2xl font-bold mb-4">11. VPN & Website Monitoring </h2>
          <p className="mb-4">
            Neon Next Generation PTY LTD values user privacy and security. To clarify:
          </p>
          <p className="mb-4">
            <strong>No VPN Logging:</strong> We do not log, monitor, or store the content of your VPN traffic, browsing history, or connection destinations. Only minimal operational data (such as server load and uptime) may be processed to ensure service stability.
          </p>
          <p className="mb-4">
            <strong>Website & Service Monitoring:</strong> While we do not interfere with lawful use of our services, we reserve the right to monitor websites, accounts, and network activity where necessary to:
          </p>
          <ul className="mb-8 italic">
            <li>Ensure compliance with our Terms of Service</li>
            <li>Prevent fraud, abuse, or malicious activity</li>
            <li>Comply with legal or regulatory obligations</li>
            <li>Investigate services or websites when reported to us for suspected abuse or illegal activity</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
          <p className="mb-4">
            📧 Email: contact@neonnextgeneration.com
          </p>
          <p className="mb-8">
            You can also contact:
          </p>
          <ul>
            <li>Australia: Office of the Australian Information Commissioner (OAIC)</li>
            <li>EU/EEA: Your local Data Protection Authority</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;