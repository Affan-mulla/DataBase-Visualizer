

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle";


const sections = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Use Case", href: "#usecase" },
    { name: "Contact", href: "#contact" },
    
];

const Navbar = () => {
    const [active, setActive] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const offsets = sections.map((s) => {
                const el = document.querySelector(s.href);
                return el ? { name: s.name, top: el.getBoundingClientRect().top } : null;
            });

            const current = offsets
                .filter(Boolean)
                .reduce((prev, curr) =>
                    Math.abs(curr.top) < Math.abs(prev.top) ? curr : prev
                );

            if (current) setActive(current.name);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center gap-6 px-6 py-3 rounded-full shadow-lg 
        backdrop-blur-md border transition-colors duration-300
        bg-white/70 border-gray-200 dark:bg-black/50 dark:border-gray-800">
                {sections.map((s) => (
                    <Link
                        key={s.name}
                        to={s.href}
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(s.href)?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`text-sm font-medium transition ${active === s.name
                                ? "text-[#4D96FF] dark:text-white"
                                : "text-gray-700 dark:text-gray-300 hover:text-[#4D96FF] dark:hover:text-white"
                            }`}
                    >
                        {s.name}
                    </Link>

                ))}
                <div className="ml-auto h-4 flex items-center">
                <DarkModeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
