import Link from "next/link";
import { Github } from "lucide-react";

const navigation = {
    main: [
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" },
    ],
    social: [
        {
            name: "GitHub",
            href: "https://github.com/mjsamaha",
            icon: Github,
        },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-zinc-900" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center sm:justify-start">
                        <span className="text-xl font-bold text-white">OakSignal</span>
                    </div>
                    <nav className="mt-8 sm:mt-0 flex justify-center gap-x-8" aria-label="Footer">
                        {navigation.main.map((item) => (
                            <Link key={item.name} href={item.href} className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-8 sm:mt-0 flex justify-center gap-x-6 sm:justify-end">
                        {navigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-zinc-400 hover:text-white transition-colors">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-8 sm:mt-12 md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:order-2">
                        <p className="text-center text-xs leading-5 text-zinc-400">
                            Building reliable systems for cadet & youth organizations.
                        </p>
                    </div>
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-center text-xs leading-5 text-zinc-400">
                            &copy; {new Date().getFullYear()} OakSignal. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
