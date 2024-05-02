import React, { useState } from 'react';
import Image from 'next/image';

export default function KeyValueProposition() {
    const [hoverIA, setHoverIA] = useState(false);
    const [hoverAI, setHoverAI] = useState(false);

    return (
        <div>
        <section className="flex pl-4 font-serif font-bold px-2 mt-12 mb-6 text-light-text align-top">
            <Image
              src="/linkta-logo-transparent.svg"
              width={150}
              height={150}
              alt="Linkta Logo"
              className='scale-[0.75] sm:scale-[0.8] lg:scale-[1] mt-4 -ml-8'
            />
            <section className='mt-10 sm:-mr-96 lg:-mr-56 '>
              <h1 className="text-4xl sm:text-3xl lg:text-5xl xl:text-6xl">
                  Streamline Your Learning with 
                  <span className='text-[#F88639]'> Linkta</span>
              </h1>
              <h2 className="hidden lg:pt-4 sm:block font-sans sm:font-serif sm:text-light-text sm:mb-2 sm:text-3xl lg:text-4xl xl:text-4xl">
                  Discover the Structure of Knowledge with the help of AI
              </h2>
            </section>
        </section>
      </div>
    );
}
