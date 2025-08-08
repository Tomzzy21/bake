
import React from 'react';

const Newsletter: React.FC = () => {
    return (
        <section className="bg-brand-dark py-20 mt-20">
            <div className="max-w-4xl mx-auto px-4 text-center text-white">
                <h2 className="font-serif text-4xl md:text-5xl font-extrabold">Get Sweet Deals by Subscribing To Our Newsletter</h2>
                <form className="mt-10 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col sm:flex-row items-center gap-4 p-2 border border-gray-600 rounded-lg">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-transparent text-white placeholder-gray-400 px-4 py-3 focus:outline-none flex-grow"
                            aria-label="Email for newsletter"
                        />
                        <button
                            type="submit"
                            className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-8 rounded-md transition-colors w-full sm:w-auto"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;