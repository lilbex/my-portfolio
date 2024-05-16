import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </a>
        </div>
        <div>
          &copy; 2024 Elias Imokhai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
