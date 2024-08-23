import { useState } from 'react';

const App = () => {
  const [expanded, setExpanded] = useState({});

  const toggleSection = (section) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const Section = ({ title, children }) => (
    <div className="mb-4">
      <h2 
        className="text-lg font-semibold mb-2 cursor-pointer flex items-center"
        onClick={() => toggleSection(title)}
      >
        {title}
        <span className="ml-2">{expanded[title] ? '▼' : '►'}</span>
      </h2>
      {expanded[title] && <div className="pl-4">{children}</div>}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for Status Saver App</h1>
      
      <p className="mb-4">
        Last updated: {new Date().toDateString()}
      </p>

      <Section title="1. Introduction">
        <p>Welcome to the Status Saver app. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.</p>
      </Section>

      <Section title="2. Information We Collect">
        <p>We collect the following types of information:</p>
        <ul className="list-disc pl-6">
          <li>Access to your device's storage to read and save status files</li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use the collected information for the following purposes:</p>
        <ul className="list-disc pl-6">
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To allow you to participate in interactive features of our service when you choose to do so</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our service</li>
          <li>To monitor the usage of our service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
      </Section>

      <Section title="4. Data Storage and Security">
        <p>We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>
      </Section>

      <Section title="5. Third-Party Services">
        <p>Our app may contain links to other sites that are not operated by us. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
      </Section>

      <Section title="6. Children's Privacy">
        <p>Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.</p>
      </Section>

      <Section title="7. Changes to This Privacy Policy">
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.</p>
      </Section>

      <Section title="8. Your Data Protection Rights">
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul className="list-disc pl-6">
          <li>The right to access, update or delete the information we have on you</li>
          <li>The right of rectification</li>
          <li>The right to object</li>
          <li>The right of restriction</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent</li>
        </ul>
      </Section>

      <Section title="9. Contact Us">
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul className="list-disc pl-6">
          <li>By email: 254kentom@gmail.com</li>
          <li>By visiting this page on our website: https://stevetom.vercel.app</li>
        </ul>
      </Section>
    </div>
  );
};

export default App;