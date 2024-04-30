import React, { useState } from 'react';

export default function KeyValueProposition() {
    const [hoverIA, setHoverIA] = useState(false);
    const [hoverAI, setHoverAI] = useState(false);

    return (
        <section className="pl-4 font-serif font-bold px-2 mt-12 mb-6 text-light-text">
            <h1 className="text-5xl sm:text-4xl lg:text-5xl xl:text-6xl">
                Streamline Your Learning with <span className='font-cursive text-8xl xl:-mt-4 inline-block align-text-bottom lg:ml-2 my-0.5 text-light-border'>Linkta</span>
            </h1>
            <h2 className="hidden sm:block font-sans sm:font-serif sm:text-light-text sm:mb-2 sm:text-4xl lg:text-5xl xl:text-6xl">
                Discover the 
                <span 
                    className="cursor-pointer font-cursive text-8xl -mt-4 inline-block align-text-bottom mx-2 text-light-accent relative"
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
                of Knowledge with the help of 
                <span 
                    className="cursor-pointer font-cursive text-8xl -mt-4 inline-block align-text-bottom mx-2 ml-4 text-light-border relative"
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
            <h4 className="font-serif block -mt-2 mb-4 leading-tight text-light-text sm:hidden lg:block sm:text-transparent text-2xl font-base sm:font-medium leading-tight text-light-text sm:pb-0">
                Linkta makes learning easier by uncovering the hidden relationships between concepts.
            </h4>
        </section>
    );
}
