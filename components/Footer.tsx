import React from 'react';

const FooterLinkColumn: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
    <div>
        <h4 className="font-bold text-lg mb-4 text-brand-dark">{title}</h4>
        <ul className="space-y-3">
            {links.map((link, index) => (
                <li key={index}><a href="#" className="text-gray-600 hover:text-brand-orange-dark transition-colors">{link}</a></li>
            ))}
        </ul>
    </div>
);

const Footer: React.FC = () => {
    const importantLinks = ['Home', 'About Us', 'Our Treats', 'Cakes', 'Contact'];
    const supportLinks = ['FAQs', 'Privacy Policy', 'Terms of Service', 'Allergy Information'];

    return (
        <footer className="py-20 border-t border-dashed border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="md:col-span-2 lg:col-span-2">
                    <h3 className="font-serif text-5xl font-extrabold text-brand-dark">Baked With Love</h3>
                </div>
                <FooterLinkColumn title="Important Links" links={importantLinks} />
                <FooterLinkColumn title="Support" links={supportLinks} />
            </div>
            <div className="mt-16 pt-8 border-t border-dashed border-gray-300 text-center text-gray-500">
                <p>Copyright 2025 © My Meal Bakery. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;