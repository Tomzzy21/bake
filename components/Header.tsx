import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { LogoIcon, SearchIcon, CartIcon, MenuIcon, CloseIcon } from './Icons';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="py-6 border-b border-dashed border-gray-300 relative">
            <div className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 text-2xl font-serif font-bold">
                    <LogoIcon className="h-6 w-6 text-brand-dark" />
                    <span>My Meal Bakery</span>
                </a>

                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map(link => (
                        <a key={link} href="#" className="text-sm font-bold tracking-widest text-gray-700 hover:text-brand-orange-dark transition-colors">{link}</a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-6">
                    <button className="text-gray-700 hover:text-brand-orange-dark transition-colors"><SearchIcon className="h-6 w-6" /></button>
                    <button className="text-gray-700 hover:text-brand-orange-dark transition-colors"><CartIcon className="h-6 w-6" /></button>
                    <button className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-md transition-colors">Order Now</button>
                </div>
                
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                        {isMenuOpen ? <CloseIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
                    </button>
                </div>
            </div>
            
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-cream z-50 shadow-lg border-t border-dashed border-gray-300">
                   <div className="flex flex-col items-center py-8 px-4">
                     <nav className="flex flex-col items-center gap-6 mb-6">
                        {NAV_LINKS.map(link => (
                            <a key={link} href="#" className="text-lg font-bold tracking-widest text-gray-700 hover:text-brand-orange-dark transition-colors">{link}</a>
                        ))}
                     </nav>
                     <div className="flex items-center gap-6 mb-6">
                        <button className="text-gray-700 hover:text-brand-orange-dark transition-colors"><SearchIcon className="h-7 w-7" /></button>
                        <button className="text-gray-700 hover:text-brand-orange-dark transition-colors"><CartIcon className="h-7 w-7" /></button>
                     </div>
                     <button className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-8 rounded-md transition-colors w-full">Order Now</button>
                   </div>
                </div>
            )}
        </header>
    );
};

export default Header;