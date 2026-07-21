import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div
        /* BACKGROUND */
            className="min-h-screen flex flex-col justify-between items-center px-4 md:px-6 py-12 border-8 border-[#2c221e] relative"
            style={{
                backgroundImage: `
          radial-gradient(#2c221e 1.2px, transparent 1.2px), 
          linear-gradient(to top, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.1) 15%, transparent 35%),
          url('/assets/design/bg-castle.png')
        `,
                backgroundSize: '24px 24px, 100% 100%, cover',
                backgroundPosition: 'center, center, center',
                backgroundRepeat: 'repeat, no-repeat, no-repeat'
            }}
        >
            {/* --- HERO / RPG QUEST BOARD SECTION --- */}
            <div className="flex-1 flex flex-col justify-center items-center max-w-2xl text-center space-y-6 my-auto">

                {/* BANNER */}
                <span className="bg-[#2c221e] text-[#f4ebd0] px-5 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase shadow-md border border-[#baa07b]">
                    ⚔️ Forge Your Avatar ⚔️
                </span>

                {/* TITLE...STILL NEEDS WORK, FEEELS CRINGY */}
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#2c221e] leading-tight font-serif drop-shadow-sm">
                    Turn Your Portrait Into an <span className="text-[#b85c38] block md:inline">RPG Chibi Hero</span>
                </h1>

                {/* DIVIDERRRR */}
                <div className="flex items-center justify-center space-x-2 w-full max-w-xs pb-7 py-1">
                    <div className="h-[2px] bg-[#2c221e]/30 flex-1"></div>
                    <span className="text-[#2c221e]/50 text-sm">✦</span>
                    <div className="h-[2px] bg-[#2c221e]/30 flex-1"></div>
                </div>

                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                </div>

                {/* BUTTON TO START */}
                <div className="pt-6">
                    <button
                        onClick={() => navigate('/upload')}
                        className="bg-[#b85c38] hover:bg-[#a04e2e] text-[#f4ebd0] font-bold text-lg px-10 py-4 rounded-xl shadow-[0_4px_0_0_#5c2e1c] hover:shadow-[0_2px_0_0_#5c2e1c] active:shadow-none border-2 border-[#2c221e] transition-all duration-150 transform hover:translate-y-[2px] active:translate-y-[4px] focus:outline-none tracking-wide uppercase"
                    >
                        Begin Your Journey
                    </button>
                </div>
            </div>

            {/* FOOTERRRRRR 3rd VERRR */}
            <footer className="w-full text-center mt-8 max-w-xl flex flex-col justify-center items-center space-y-1.5 mx-auto z-10 pb-2">
                <div className="text-center">
                    <p className="text-[11px] uppercase tracking-wider text-[#f4ebd0]/90 font-medium">
                        Project conceptualized and engineered by
                        <br />
                        <span className="text-white font-extrabold block md:inline md:ml-1">John Dexter V. Cullados</span>
                    </p>
                </div>

                {/* SOCIALSzss */}
                <div className="flex justify-center items-center space-x-4 w-full py-0.5">
                    {/* GITHUB */}
                    <a
                        href="https://github.com/johndextercullados"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#f4ebd0]/70 hover:text-[#b85c38] transition-colors duration-200"
                        title="GitHub Profile"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>

                    {/* LINKEDIN */}
                    <a
                        href="https://www.linkedin.com/in/jdcullados/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#f4ebd0]/70 hover:text-[#b85c38] transition-colors duration-200"
                        title="LinkedIn Profile"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>

                <p className="text-[10px] uppercase tracking-widest text-[#f4ebd0]/40 font-bold">
                    Summer Project • Year 2026
                </p>
            </footer>

        </div>
    );
}