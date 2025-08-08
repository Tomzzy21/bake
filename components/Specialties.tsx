import React from 'react';
import { SPECIALTIES_DATA } from '../constants';
import type { SpecialtyItem } from '../types';

const SpecialtyCard: React.FC<{ dish: SpecialtyItem }> = ({ dish }) => (
    <div className="relative w-full max-w-xs border-4 border-gray-300 px-6 pt-24 pb-16 text-center h-full">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40">
            <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full rounded-full object-cover shadow-lg" 
            />
            <div className="absolute top-2 right-2 bg-brand-dark text-white font-bold text-sm w-12 h-12 flex items-center justify-center rounded-full border-4 border-brand-cream">
                ${dish.price}
            </div>
        </div>
        <h3 className="font-serif text-2xl font-bold my-4">{dish.name}</h3>
        <p className="text-gray-600 leading-relaxed">{dish.description}</p>
    </div>
);

const Specialties: React.FC = () => {
    return (
        <section className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-28">
                <h2 className="font-serif text-5xl md:text-6xl font-extrabold text-brand-dark">Our Specialties</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    From classic pastries to creative confections, each item is a masterpiece baked with love to delight your taste buds.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-28 justify-items-center">
                {SPECIALTIES_DATA.map((dish) => (
                    <SpecialtyCard key={dish.name} dish={dish} />
                ))}
            </div>
        </section>
    );
};

export default Specialties;