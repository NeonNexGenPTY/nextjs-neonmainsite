"use client";

import React from 'react';
import StarField from '@/components/StarField';
import SpaceElements from '@/components/SpaceElements';
import { motion } from 'framer-motion';

const Terms = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>
          <p className="text-gray-400 mb-8 text-center">Updated at: September 21, 2025</p>

          <p className="mb-4">
            <strong>Entity:</strong> Neon Next Generation PTY LTD (ABN: 86 686 080 704)<br />
            <strong>Jurisdiction:</strong> Australia and European Union (EU/EEA)
          </p>

          <p className="mb-8">
            By accessing or using any part of Neon Next Generation PTY LTD's ("we", "our", "us") websites, platforms, applications, or services (collectively, the "Services"), you agree to be bound by these Terms & Conditions ("Terms","Terms of Service"). If you do not agree, do not use our Services.
          </p>

          <p className="mb-8">
            These Terms incorporate compliance with:
          </p>
          <ul className="mb-8">
            <li>The Privacy Act 1988 (Cth) and Australian Consumer Law (ACL)</li>
            <li>The General Data Protection Regulation (GDPR) and other applicable EU/EEA directives</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">1. Eligibility</h2>
          <p className="mb-8">
            You must be at least 13 years old to access or use our Services. Some services require 18+. Users under the legal age of majority must have parental or guardian consent.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Account Registration & Conduct</h2>
          <ul className="mb-8">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain confidentiality and security of login credentials</li>
            <li>Accept responsibility for all activity under your account</li>
            <li>Accounts may be suspended or deactivated for inactivity, non-compliance, or suspected fraud. Sharing credentials is prohibited unless explicitly permitted.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">3. User Content</h2>
          <h3 className="text-xl font-semibold mb-2">a. Ownership & License</h3>
          <p className="mb-4">
            You retain ownership of your content but grant Neon Next Generation PTY LTD a non-exclusive, worldwide, royalty-free license to use, reproduce, display, and distribute it as part of the Services.
          </p>
          <h3 className="text-xl font-semibold mb-2">b. Restrictions</h3>
          <ul className="mb-4">
            <li>Content must not violate laws</li>
            <li>Content must not be offensive, obscene, or unlawful</li>
            <li>Content must not infringe the rights of others</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">c. Moderation & Disclaimer</h3>
          <p className="mb-8">
            We may review, moderate, or remove content at our discretion. We do not endorse, verify, or assume responsibility for user-generated content.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Trial Periods & Subscriptions</h2>
          <p className="mb-8">
            Trial accounts may have limited functionality. Upon trial expiration, access will be suspended unless a paid subscription is activated. Subscription fees, billing cycles, and payment terms are displayed at checkout. Prices include GST (Australia) or VAT (EU) unless otherwise stated.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Fees, Refunds & Cancellation</h2>
          <p className="mb-8">
            Refunds may be requested within 7 calendar days. Approved refunds are processed within 2–3 business days. Cancelled subscriptions after this period remain active until the end of the billing cycle but will not auto-renew. Certain purchases (e.g., domains, custom services) may be non-refundable. Chargebacks without contacting us may result in account termination. Failed payments may result in a 7-day grace period before account suspension.
          </p>

          <h2 className="text-2xl font-bold mb-4">6. Third-Party Services</h2>
          <p className="mb-8">
            Our Services may integrate third-party platforms (payment gateways, analytics, Discord, etc.). We are not responsible for third-party content, privacy, or terms. Users must comply with third-party terms.
          </p>

          <h2 className="text-2xl font-bold mb-4">7. Data Protection, Privacy & Cookies</h2>
          <p className="mb-8">
            We handle personal data in compliance with the Australian Privacy Principles (APPs) and EU GDPR. Cookies are used for site functionality, analytics, and preferences. Users may manage cookies via browser settings. See our <a href="/privacy">Privacy Policy</a> for details. Users under 18 must have parental consent for data processing.
          </p>

          <h2 className="text-2xl font-bold mb-4">8. Service Availability, Security & Bandwidth</h2>
          <p className="mb-8">
            We strive for continuous service but cannot guarantee uninterrupted access. Beta or experimental features are provided as-is. Users must protect login credentials and maintain independent backups. Exceeding bandwidth or storage limits may result in throttling or suspension. Neon Next Generation is not liable for delays or failures due to force majeure or technical failures. Unauthorized activity such as DDoS attacks, phishing, or exploiting vulnerabilities is strictly prohibited.
          </p>

          <h2 className="text-2xl font-bold mb-4">9. DMCA & Copyright Infringement</h2>
          <p className="mb-8">
            We respect copyright law. If you believe your copyrighted work has been infringed, contact contact@neonnextgeneration.com with identification of the work, location of infringing material, and a statement of good faith. Repeat infringers may have accounts terminated.
          </p>

          <h2 className="text-2xl font-bold mb-4">10. Intellectual Property & Branding</h2>
          <p className="mb-8">
            All content, branding, and proprietary technology belong to Neon Next Generation PTY LTD or its licensors. Unauthorized reproduction, modification, or distribution is prohibited.
          </p>

          <h2 className="text-2xl font-bold mb-4">11. Indemnification, Termination & Limitation of Liability</h2>
          <p className="mb-8">
            You agree to indemnify Neon Next Generation PTY LTD for claims, damages, or expenses arising from your breach of Terms, misuse of Services, or violations of laws or third-party rights. We may suspend or terminate access for violations, security concerns, non-payment, or inactivity.
          </p>
          <p className="mb-8">
            To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages. Total liability is limited to AUD $100 or the amount paid in the past 6 months. Services are provided "as-is" without warranties. We do not guarantee specific results. Third-party content is not endorsed. This does not affect statutory rights.
          </p>

          <h2 className="text-2xl font-bold mb-4">12. API & Developer Terms</h2>
          <p className="mb-8">
            Developers using our API agree not to reverse-engineer, resell, or bypass usage limits. Neon Next Generation is not liable for API downtime or data loss.
          </p>

          <h2 className="text-2xl font-bold mb-4">13. Marketing, Notifications & Feedback</h2>
          <p className="mb-8">
            Users may receive promotional emails with consent and may opt-out anytime. Service updates or Terms changes will be communicated via email or dashboard. Feedback or feature requests grant Neon Next Generation a perpetual, royalty-free license to use ideas at our discretion.
          </p>

          <h2 className="text-2xl font-bold mb-4">14. Governing Law, Dispute Resolution & Arbitration</h2>
          <p className="mb-4">
            <strong>Australian users:</strong> laws of New South Wales, Australia<br />
            <strong>EU/EEA users:</strong> EU law and local jurisdiction
          </p>
          <p className="mb-8">
            Users agree to attempt resolution via support or negotiation before formal legal action or arbitration. Class-action rights are waived where enforceable.
          </p>

          <h2 className="text-2xl font-bold mb-4">15. Account Sharing, Affiliates, Export Controls & VPN Disclaimer</h2>
          <p className="mb-8">
            Accounts are for individual use. Affiliate participants must follow separate agreements. Users must comply with laws regarding software, encryption, and VPN services. Neon Next Generation is not liable for illegal activity conducted via VPN.
          </p>

          <h2 className="text-2xl font-bold mb-4">16. Contact Information</h2>
          <p className="mb-4">
            <strong>Email:</strong> contact@neonnextgeneration.com<br />
            <strong>Website:</strong> <a href="https://neonnextgeneration.com" className="text-blue-400 hover:underline">https://neonnextgeneration.com</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;