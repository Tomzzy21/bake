import React from 'react';
import { StarIcon } from './Icons';

const FeaturedTreatCard: React.FC = () => (
    <div className="bg-white p-3 rounded-xl shadow-lg flex items-center gap-4 max-w-xs transform hover:scale-105 transition-transform duration-300">
        <img src="/cupcakes.png" alt="Signature Cupcake" className="w-16 h-16 rounded-lg object-cover" />
        <div>
            <h4 className="font-bold text-gray-800">Signature Cupcake</h4>
            <div className="flex items-center text-yellow-500 my-1">
                <StarIcon filled={true} className="h-4 w-4" />
                <StarIcon filled={true} className="h-4 w-4" />
                <StarIcon filled={true} className="h-4 w-4" />
                <StarIcon filled={true} className="h-4 w-4" />
                <StarIcon filled={false} className="h-4 w-4" />
            </div>
            <p className="font-extrabold text-lg text-gray-900">$5.00</p>
        </div>
    </div>
);

const Hero: React.FC = () => {
    return (
        <section className="py-16 md:py-24 border-l border-r border-dashed border-gray-300">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text and image content */}
                    <div className="order-2 lg:order-1">
                        <div className="flex flex-col lg:flex-row items-start gap-12">
                             <div className="relative mt-12 w-48 h-48 flex-shrink-0">
                                <img src="/bakery_shop.png" alt="Freshly baked bread" className="w-full h-full rounded-full object-cover shadow-xl" />
                             </div>
                             <div className="flex-grow pt-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-b border-gray-300 py-8">
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email</h3>
                                        <p className="text-gray-600">info@mymealbakery.com</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Location</h3>
                                        <p className="text-gray-600">123 Sugar Lane, Seattle, USA</p>
                                    </div>
                                </div>
                                <p className="mt-8 text-gray-700 leading-relaxed">
                                    Whether you're craving a warm croissant or a decadent cake, we bring freshly baked happiness to your table. Join us and indulge in every bite!
                                </p>
                             </div>
                        </div>
                    </div>
                    {/* Large Heading */}
                    <div className="order-1 lg:order-2">
                        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-brand-dark tracking-tighter">
                            <span className="flex flex-wrap items-center gap-2 sm:gap-4">
                                <span>Savor</span>
                                <img src="/sliced_cake.png" alt="A delicious cake" className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full object-cover shadow-xl flex-shrink-0" />
                                <span>Every</span>
                            </span>
                            <span className="block mt-2">Delicious</span>
                            <span className="block mt-2">Moment</span>
                        </h1>
                    </div>
                </div>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-end gap-8">
                    <FeaturedTreatCard />
                    <button className="bg-brand-dark hover:bg-black text-white font-bold py-4 px-10 rounded-lg transition-colors w-full md:w-auto">Our Treats</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;