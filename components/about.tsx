"use client";

import { motion } from "framer-motion";
import { BookOpen, Settings, Users, ShieldCheck, Zap, Heart, Layout, CheckCircle2 } from "lucide-react";

const services = [
    {
        name: "Training Operations",
        description:
            "Modernizing how training delivery is planned, tracked, and executed. We build tools that simplify curriculum management and qualification tracking.",
        icon: BookOpen,
    },
    {
        name: "Operations Management",
        description:
            "Streamlining day-to-day logistics, personnel management, and resource allocation. Reducing administrative burden so leaders can focus on mentoring.",
        icon: Settings,
    },
    {
        name: "Public Engagement",
        description:
            "Connecting organizations with their communities through accessible, informative digital presence. Recruiting the next generation of leaders.",
        icon: Users,
    },
];

const values = [
    {
        name: "Clarity",
        description: "Interfaces that require no manual to use. Information presented exactly when needed.",
        icon: Layout,
    },
    {
        name: "Accessibility",
        description: "Systems designed for everyone, adhering to modern WCAG standards.",
        icon: Heart,
    },
    {
        name: "Reliability",
        description: "Uptime and data integrity are non-negotiable foundations of our engineering.",
        icon: ShieldCheck,
    },
    {
        name: "Maintainability",
        description: "Code and infrastructure built to last, avoiding technical debt from day one.",
        icon: CheckCircle2,
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-black relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500"
                    >
                        Our Mission
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
                    >
                        Purpose-built for youth organizations
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400"
                    >
                        We believe that cadet and youth organizations deserve software that is just as modern, capable, and reliable as the tools used by top tech companies.
                        OakSignal exists to bridge the gap between legacy processes and the future of digital operations.
                    </motion.p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                className="flex flex-col group"
                            >
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-50">
                                    <motion.div
                                        whileHover={{ rotate: 15, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <service.icon className="h-5 w-5 flex-none text-blue-600 dark:text-blue-500 transition-colors group-hover:text-blue-500" aria-hidden="true" />
                                    </motion.div>
                                    {service.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                    <p className="flex-auto">{service.description}</p>
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>

                <div className="mx-auto mt-24 max-w-7xl sm:mt-32 border-t border-zinc-200 dark:border-zinc-800 pt-16">
                    <div className="mx-auto max-w-2xl lg:text-center mb-12">
                        <p className="font-semibold text-zinc-900 dark:text-zinc-50 text-xl">Our Core Values</p>
                    </div>
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative pl-16 group cursor-default"
                            >
                                <dt className="text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-50">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 dark:bg-blue-500/10 transition-colors group-hover:bg-blue-600/20">
                                        <value.icon className="h-6 w-6 text-blue-600 dark:text-blue-500" aria-hidden="true" />
                                    </div>
                                    {value.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">{value.description}</dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
