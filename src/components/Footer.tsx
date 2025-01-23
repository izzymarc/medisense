import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = {
company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
],
resources: [
    { name: "Documentation", href: "/docs" },
    { name: "API", href: "/api" },
    { name: "Community", href: "/community" },
    { name: "Updates", href: "/updates" },
],
support: [
    { name: "Help Center", href: "/help" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
],
social: [
    {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
    },
    {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
    },
    {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    },
    {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    },
    {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
    },
],
};

export function Footer() {
const currentYear = new Date().getFullYear();

return (
    <footer className="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
        Footer
    </h2>
    <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8">
            <Link to="/" className="text-xl font-bold text-gray-900">
            MediSense
            </Link>
            <p className="text-sm leading-6 text-gray-600">
            Making healthcare smarter through AI-powered symptom analysis and health insights.
            </p>
            <div className="flex space-x-6">
            {navigation.social.map((item) => (
                <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
                >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
            ))}
            </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                    <li key={item.name}>
                    <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                {navigation.resources.map((item) => (
                    <li key={item.name}>
                    <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                    <li key={item.name}>
                    <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
        <p className="text-xs leading-5 text-gray-500">
            &copy; {currentYear} MediSense. All rights reserved. Not intended to be a substitute for professional medical advice.
        </p>
        </div>
    </div>
    </footer>
);
}
