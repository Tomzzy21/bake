
import type { SpecialtyItem, FaqItem } from './types';

export const NAV_LINKS = ['HOME', 'ABOUT US', 'OUR TREATS', 'CAKES', 'FAQ', 'CONTACT'];

export const SPECIALTIES_DATA: SpecialtyItem[] = [
  {
    name: 'Classic Croissant',
    description: 'Buttery, flaky, and baked to golden perfection. The perfect start to any morning.',
    price: 4,
    image: '/croissant.png',
  },
  {
    name: 'Decadent Chocolate Cake',
    description: 'Rich, moist chocolate sponge with a silky smooth ganache. A true indulgence.',
    price: 8,
    image: '/sliced_cake.png',
  },
  {
    name: 'Artisanal Sourdough',
    description: 'A crusty loaf with a soft, tangy crumb, made from our lovingly maintained starter.',
    price: 7,
    image: '/sourdough.png',
  },
  {
    name: 'Colorful Macarons',
    description: 'Delicate almond meringue cookies with a variety of flavorful fillings.',
    price: 3,
    image: '/cookies.png',
  },
];

export const FAQ_DATA: FaqItem[] = [
    {
        question: 'Do you offer custom cakes for special occasions?',
        answer: 'Absolutely! We specialize in custom cakes for birthdays, weddings, and other events. Please contact us at least one week in advance to discuss your design and flavor preferences.'
    },
    {
        question: 'Do you have any gluten-free or vegan options?',
        answer: 'Yes, we offer a selection of gluten-free and vegan treats daily. Please ask our staff about the available options, as they can vary. We take care to prevent cross-contamination, but our kitchen is not 100% allergen-free.'
    },
    {
        question: 'How do I place a large order for an event or office?',
        answer: 'For large orders, please email us or call us at least 48 hours in advance. We offer catering menus and can help you select the perfect assortment of pastries and breads for your needs.'
    },
    {
        question: 'What are your opening hours?',
        answer: 'We are open from Tuesday to Sunday, 7:00 AM to 6:00 PM. We are closed on Mondays. You can find any special holiday hours on our social media pages.'
    },
];