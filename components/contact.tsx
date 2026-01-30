"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Mail } from "lucide-react";

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
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        {/* Dialog with Form */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="lg" className="group">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>Start Your Journey with OakSignal</DialogTitle>
                                    <DialogDescription>
                                        Fill out the form below and we'll get back to you within 24 hours.
                                    </DialogDescription>
                                </DialogHeader>
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSc9KAYVtMqa5xmmCslSYZkBiZMAOv4Y1Q2AQBpbuVwWbDAQBg/viewform?embedded=true"
                                    className="w-full h-[700px] rounded-lg"
                                    title="OakSignal Unit Interest Form"
                                />
                            </DialogContent>
                        </Dialog>

                        {/* Email fallback button */}
                        <Button variant="outline" size="lg" asChild>
                            <a href="mailto:contact.oaksignal@gmail.com">
                                <Mail className="mr-2 h-4 w-4" />
                                Email Us Directly
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
