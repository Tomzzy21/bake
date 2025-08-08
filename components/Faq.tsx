
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import type { FaqItem } from '../types';
import { PlusIcon, MinusIcon } from './Icons';

const FaqAccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-300">
            <button
                className="w-full flex justify-between items-center text-left py-6"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-bold text-brand-dark">{item.question}</h3>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-300">
                    {isOpen ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="pb-6 pr-10 text-gray-600 leading-relaxed">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="lg:sticky top-24">
                    <h2 className="font-serif text-5xl md:text-6xl font-extrabold text-brand-dark">Frequently Asked Questions</h2>
                    <div className="mt-8">
                       <img src="/baker2.jpeg" alt="Bread and pastries" className="rounded-2xl object-cover shadow-lg" />
                    </div>
                </div>
                <div>
                    {FAQ_DATA.map((item, index) => (
                        <FaqAccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;