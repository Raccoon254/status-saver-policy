import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faShield, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  // Initialize all sections to be expanded by default
  const initialState = {
    "1. Introduction": true,
    "2. Information We Collect": true,
    "3. How We Use Your Information": true,
    "4. Third-Party Services": true,
    "5. Data Storage and Security": true,
    "6. Children's Privacy": true,
    "7. Changes to This Privacy Policy": true,
    "8. Your Data Protection Rights": true,
    "9. Contact Us": true,
  };
  
  const [expanded, setExpanded] = useState(initialState);

  const toggleSection = (section) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const Section = ({ title, children }) => (
    <div className="bg-white p-6 rounded-2xl cursor-pointer ring-1 ring-gray-100 hover:ring-custom ring-offset-2 border transition-shadow duration-300 aos-init aos-animate">
      <h2 
        className="text-lg font-semibold p-4 cursor-pointer flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-gray-800 rounded-t-md"
        onClick={() => toggleSection(title)}
      >
        {title}
        <FontAwesomeIcon icon={expanded[title] ? faChevronDown : faChevronRight} className="text-gray-600" />
      </h2>
      {expanded[title] && <div className="p-4 text-gray-700">{children}</div>}
    </div>
  );

  return (
    <div className="px-4 py-8 w-screen flex flex-col justify-center gap-6 bg-gray-50 min-h-screen">
      <div className="w-full flex flex-col gap-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-950">
          <FontAwesomeIcon icon={faShield} className="mr-2" />
          Privacy Policy for Status Saver App
        </h1>
        
        <p className="mb-8 text-center text-gray-600">
          Last updated: {new Date().toDateString()}
        </p>

        <Section title="1. Introduction">
          <p>Welcome to the Status Saver app. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.</p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect the following types of information:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Access to your device's storage to read and save status files</li>
            <li>Non-personal identification information for AdMob personalized ads</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>To provide and maintain our service</li>
            <li>To improve user experience</li>
            <li>To display personalized advertisements through AdMob</li>
          </ul>
        </Section>

        <Section title="4. Third-Party Services">
          <p>Our app uses AdMob, a third-party advertising service provided by Google. AdMob may collect and use data for personalized advertising. Please refer to Google's Privacy Policy for more information on how they handle data.</p>
        </Section>

        <Section title="5. Data Storage and Security">
          <p>We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>
        </Section>

        <Section title="6. Children's Privacy">
          <p>Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.</p>
        </Section>

        <Section title="7. Changes to This Privacy Policy">
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.</p>
        </Section>

        <Section title="8. Your Data Protection Rights">
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 mt-2">
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
          <ul className="list-none pl-0 mt-2">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-indigo-600" />
              By email: 254kentom@gmail.com
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faGlobe} className="mr-2 text-indigo-600" />
              By visiting our website: <a href="https://stevetom.vercel.app" className="text-blue-600 hover:underline ml-1">https://stevetom.vercel.app</a>
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default App;
