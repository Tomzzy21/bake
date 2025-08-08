
import React from 'react';
import { CheckIcon } from './Icons';

const Chef: React.FC = () => {
    return (
        <section className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div>
                    <h2 className="font-serif text-5xl md:text-6xl font-extrabold text-brand-dark">Our Head Baker</h2>
                    <p className="mt-6 text-gray-600 leading-relaxed">
                        Behind every extraordinary pastry is a passionate baker dedicated to perfection. Meet our culinary artist with years of experience in creating unforgettable flavors.
                    </p>
                    <ul className="mt-8 space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0 mt-1">
                                <CheckIcon className="w-4 h-4 text-white" />
                            </div>
                            <span>Trained at prestigious culinary institutes with a specialization in patisserie.</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0 mt-1">
                                <CheckIcon className="w-4 h-4 text-white" />
                            </div>
                            <span>Believes in using the freshest, locally-sourced ingredients for all baked goods.</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0 mt-1">
                                <CheckIcon className="w-4 h-4 text-white" />
                            </div>
                            <span>Master of sourdough and renowned for creating spectacular, one-of-a-kind celebration cakes.</span>
                        </li>
                    </ul>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <button className="bg-brand-dark hover:bg-black text-white font-bold py-4 px-10 rounded-lg transition-colors flex-1">Our Treats</button>
                        <button className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-4 px-10 rounded-lg transition-colors flex-1">Order Now</button>
                    </div>
                </div>
                <div className="relative flex justify-center items-center h-full min-h-[400px]">
                    <div className="absolute bg-brand-orange w-80 h-80 sm:w-96 sm:h-96 rounded-full"></div>
                    <img src="/bakek1.jpg" alt="Head Baker" className="relative z-10 w-full max-w-sm h-auto object-contain" />
                </div>
            </div>
        </section>
    );
};

export default Chef;