import React, { useState } from 'react';
import Image from 'next/image';

export default function KeyValueProposition() {
    const [hoverIA, setHoverIA] = useState(false);
    const [hoverAI, setHoverAI] = useState(false);

    return (
        <div>
        <section className=" flex pl-4 font-serif font-bold px-2 mt-12 mb-6 text-light-text">
            <Image
              src="/linkta-logo-transparent.svg"
              width={150}
              height={150}
              alt="Linkta Logo"
            />
            <section className='mt-10'>
              <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  Streamline Your Learning with 
                  <span className='text-[#F88639]'> Linkta</span>
              </h1>
              
              <h2 className="hidden pt-4 sm:block font-sans sm:font-serif sm:text-light-text sm:mb-2 sm:text-4xl lg:text-4xl xl:text-4xl">
                  Discover the Structure of Knowledge with the help of AI
                  <span 
                      className="hidden cursor-pointer font-cursive text-6xl -mt-4 inline-block align-text-bottom mx-2 text-light-accent relative"
                      onMouseEnter={() => setHoverIA(true)} 
                      onMouseLeave={() => setHoverIA(false)}
                  >
                      IA
                      <span 
                          className={`absolute -left-24 top-full transition-transform duration-300 ease-in-out origin-top ${
                              hoverIA ? 'scale-y-100' : 'scale-y-0'
                          }`}
                          style={{ transformOrigin: '0% 0%' }}
                      >
                          <span className="block whitespace-nowrap text-3xl">Information Architecture</span>
                      </span>
                  </span>
                  
                  <span 
                      className="hidden cursor-pointer font-serif text-3xl text-light-border relative"
                      onMouseEnter={() => setHoverAI(true)} 
                      onMouseLeave={() => setHoverAI(false)}
                  >
                      AI
                      <span 
                          className={`absolute -left-14 top-full transition-transform duration-300 ease-in-out origin-top ${
                              hoverAI ? 'scale-y-100' : 'scale-y-0'
                          }`}
                          style={{ transformOrigin: '0% 0%' }}
                      >
                          <span className="block whitespace-nowrap text-3xl">Artificial Intelligence</span>
                      </span>
                  </span>
              </h2>
            </section>
            
        </section>
        <h4 className="hidden font-serif -mt-2 mb-4 leading-tight text-light-text lg:block sm:text-transparent text-2xl font-base sm:font-medium leading-tight text-light-text sm:pb-0">
        Linkta makes learning easier by uncovering the hidden relationships between concepts.
        </h4>
      </div>
    );
}
