import React, { useState } from 'react';

export default function KeyValueProposition() {
    const [hover, setHover] = useState(false);

    return (
        <section className="pl-4 font-serif font-bold px-2 mt-16 mb-10 text-black">
            <h1 className="text-5xl my-4 sm:text-4xl lg:text-5xl xl:text-6xl">
                Streamline Your Learning with <span className='font-cursive text-8xl -mt-4 inline-block align-text-bottom lg:ml-2 text-light-border'>Linkta</span>
            </h1>
            <h2 className="hidden sm:block font-sans sm:font-serif sm:text-black sm:mb-2 sm:text-4xl lg:text-5xl xl:text-6xl">
                Discover the 
                <span 
                    className="cursor-pointer font-cursive text-8xl -mt-4 inline-block align-text-bottom mx-2 text-light-accent relative"
                    onMouseEnter={() => setHover(true)} 
                    onMouseLeave={() => setHover(false)}
                >
                    IA
                    <span 
                        className={`absolute -left-24 top-full transition-transform duration-300 ease-in-out origin-top ${
                            hover ? 'scale-y-100' : 'scale-y-0'
                        }`}
                        style={{ transformOrigin: '0% 0%' }}
                    >
                        <span className="block whitespace-nowrap text-3xl">Information Architecture</span>
                    </span>
                </span>
                of Knowledge with the help of <span className='font-cursive text-8xl inline-block align-text-bottom ml-2 text-light-border'>AI</span>
            </h2>
            <h4 className="font-sans block text-light-text sm:hidden lg:block sm:text-transparent font-base mb-4 font-base sm:font-medium leading-tight text-light-text pb-4 sm:pb-0">
                Linkta makes learning easier by uncovering the hidden relationships between concepts.
            </h4>
        </section>
    );
}
