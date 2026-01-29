"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="relative isolate bg-white dark:bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500"
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
                    >
                        Ready to modernize your operations?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400"
                    >
                        We're looking to partner with cadet and youth organizations that want to improve their digital infrastructure.
                        Reach out to discuss how we can help your unit.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 flex flex-col items-center justify-center"
                    >
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSc9KAYVtMqa5xmmCslSYZkBiZMAOv4Y1Q2AQBpbuVwWbDAQBg/viewform?embedded=true"
                            className="w-full h-[800px] rounded-lg shadow-lg"
                            title="OakSignal Unit Interest Form"
                        />

                        <a
                            href="mailto:contact.oaksignal@gmail.com"
                            className="mt-6 text-base text-zinc-600 dark:text-zinc-400 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            Or email us directly at contact.oaksignal@gmail.com
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
