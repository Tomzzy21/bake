
import React from 'react';

const MenuItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="flex items-start gap-4">
        <div className="w-4 h-4 rounded-full bg-brand-orange mt-1.5 flex-shrink-0"></div>
        <div>
            <h4 className="font-serif text-xl font-bold text-white">{title}</h4>
            <p className="text-gray-400 mt-1">{description}</p>
        </div>
    </div>
);

const Feast: React.FC = () => {
    const menuDescription = "Discover our wide range of freshly baked goods, made with the finest ingredients.";
    
    return (
        <section className="bg-brand-dark py-24 relative overflow-hidden">
             {/* Decorative background elements can be added here if needed */}
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-serif text-5xl md:text-6xl font-extrabold text-white">A Treat for Every Craving</h2>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                        From flaky morning pastries to decadent custom cakes, every dish is made to tantalize your taste buds.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    <div className="w-full lg:w-1/3 flex flex-col gap-8 text-right">
                        <MenuItem title="Pastries" description={menuDescription} />
                        <MenuItem title="Breads" description={menuDescription} />
                        <MenuItem title="Custom Cakes" description={menuDescription} />
                    </div>

                    <div className="w-full lg:w-auto my-8 lg:my-0">
                         <img src="/bread.png" alt="Assortment of baked goods" className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover mx-auto shadow-2xl border-8 border-gray-800" />
                    </div>

                    <div className="w-full lg:w-1/3 flex flex-col gap-8 text-left">
                         <MenuItem title="Beverages" description={menuDescription} />
                         <MenuItem title="Vegan Options" description={menuDescription} />
                         <MenuItem title="Seasonal Specials" description={menuDescription} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feast;