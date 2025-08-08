
import React from 'react';

const StatItem: React.FC<{ value: string; label: string; sublabel: string }> = ({ value, label, sublabel }) => (
    <div className="text-center md:text-left">
        <p className="font-serif text-5xl md:text-6xl font-bold text-white">{value}</p>
        <p className="mt-2 text-sm font-bold text-gray-300 tracking-widest">{label}</p>
        <p className="text-sm text-gray-400 tracking-widest">{sublabel}</p>
    </div>
);

const Stats: React.FC = () => {
    return (
        <section className="bg-brand-dark py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-around gap-12">
                    <StatItem value="100%" label="FRESHLY BAKED" sublabel="DAILY" />
                    <div className="w-px h-24 bg-gray-700 hidden md:block"></div>
                    <StatItem value="12" label="MASTER BAKERS" sublabel="ON STAFF" />
                    <div className="w-px h-24 bg-gray-700 hidden md:block"></div>
                    <StatItem value="8k+" label="HAPPY CUSTOMERS" sublabel="SERVED" />
                </div>
            </div>
        </section>
    );
};

export default Stats;