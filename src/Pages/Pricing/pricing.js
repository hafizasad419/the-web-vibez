import { Trophy, Gem, BadgePercent } from 'lucide-react';

export const pricing = [
    {
        id: 1,
        title: "Custom Business Website",
        description: "A professional website for small businesses to establish their online presence.",
        price: 799,
        features: [
            { title: "Up to 5 pages (Home, About, Services, Contact, Blog)", included: true },
            { title: "Mobile-friendly & responsive design", included: true },
            { title: "Basic SEO optimization", included: true },
            { title: "Contact form integration", included: true },
            { title: "1 month free maintenance", included: true },
        ],
        svg: Trophy,
    },
    {
        id: 2,
        title: "Growth Plan - Website & SEO",
        description: "Get a website for free with a 12-month commitment to our SEO & maintenance plan at just $99/month.",
        price: 0,
        originalPrice: 1200,
        features: [
            { title: "Custom website design (up to 10 pages)", included: true },
            { title: "Advanced SEO optimization & keyword research", included: true },
            { title: "Speed & performance optimization", included: true },
            { title: "Security updates & daily backups", included: true },
            { title: "Monthly SEO reports & improvements", included: true },
            { title: "Unlimited content updates", included: true },
        ],
        svg: BadgePercent,
        badge: "Best Value",
        isLimitedTime: true,
        bonuses: [
            "Free SSL Certificate",
            "Google My Business setup",
            "Conversion-optimized landing page",
        ]
    },
    {
        id: 3,
        title: "E-Commerce Website",
        description: "A full-featured online store to sell your products effectively.",
        price: 1499,
        features: [
            { title: "Custom e-commerce design", included: true },
            { title: "Up to 50 products added", included: true },
            { title: "Secure payment gateway integration", included: true },
            { title: "Inventory management system", included: true },
            { title: "SEO & speed optimization", included: true },
            { title: "1 month of free maintenance", included: true },
        ],
        svg: Gem,
    }
];
