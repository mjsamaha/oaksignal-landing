"use client";

import { motion } from "framer-motion";
import { Mail, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <section id="contact" className="relative isolate bg-white dark:bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
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
                        className="mt-10 flex flex-col items-center justify-center gap-6"
                    >
                        <a href="mailto:contact.oaksignal@gmail.com" className="w-full sm:w-auto">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-500 text-white gap-2 shadow-lg hover:shadow-blue-500/40 transition-all">
                                    <Mail className="h-4 w-4" />
                                    contact.oaksignal@gmail.com
                                </Button>
                            </motion.div>
                        </a>



                        <a
                            href="https://github.com/mjsamaha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <Github className="h-5 w-5" />
                            <span>Visit on GitHub</span>
                            <ExternalLink className="h-3 w-3" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
