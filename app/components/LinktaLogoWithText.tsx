import React from 'react';
import Image from 'next/image';

const LinktaLogoWithText: React.FC = () => {
  return (
    <figure>
      <Image
        src="/linkta-logo-gray.svg"
        width={50}
        height={50}
        alt="Linkta Logo"
      />
      <figcaption>Linkta</figcaption>
    </figure>
  );
};

export default LinktaLogoWithText;
