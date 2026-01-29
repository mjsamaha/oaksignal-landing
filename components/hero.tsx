"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-zinc-50 dark:bg-black overflow-hidden border-b border-zinc-100 dark:border-zinc-900">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradien-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden sm:mb-8 sm:flex sm:justify-center"
                >
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-600 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 dark:text-zinc-400 dark:ring-zinc-100/10 dark:hover:ring-zinc-100/20">
                        Building the digital foundation for youth organizations.{" "}
                        <a href="#about" className="font-semibold text-blue-600 dark:text-blue-500">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Read our mission <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl text-balance">
                        Modern, reliable systems for <span className="text-blue-600 dark:text-blue-500">cadet & youth</span> organizations
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 text-pretty">
                        OakSignal delivers purpose-built applications for training, operations, and engagement.
                        We prioritize clarity, accessibility, and long-term sustainability over fleeting trends.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#contact">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white dark:bg-blue-600 dark:hover:bg-blue-500 shadow-lg hover:shadow-blue-500/30 transition-all">
                                    Get started
                                </Button>
                            </motion.div>
                        </a>
                    </div>
                </motion.div>
            </div>

            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0ea5e9] to-[#3b82f6] opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
        </div>
    );
}
