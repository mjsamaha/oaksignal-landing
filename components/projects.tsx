"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { projects } from "@/lib/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500"
                    >
                        Our Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
                    >
                        Current Initiatives
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400"
                    >
                        Explore the applications we are building to empower the next generation.
                    </motion.p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 300, velocity: 2, delay: index * 0.1 + 0.2 }}
                            className="flex flex-col justify-between rounded-2xl bg-white dark:bg-black p-8 shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-800 hover:ring-blue-500/50 dark:hover:ring-blue-500/50 transition-all h-full"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4 text-xs mb-4">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-medium ring-1 ring-inset ${project.statusColor} ${project.status === 'In Development' ? 'animate-pulse' : ''}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold leading-6 text-zinc-900 dark:text-zinc-50 mb-2">
                                    <Link href={`/projects/${project.slug}`}>
                                        <span className="absolute inset-0" />
                                        {project.title}
                                    </Link>
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 mb-6">
                                    {project.description}
                                </p>

                                {(project.problem || project.outcome) && (
                                    <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                        {project.problem && (
                                            <div className="flex gap-3">
                                                <AlertCircle className="h-5 w-5 flex-shrink-0 text-amber-500/80 mt-0.5" />
                                                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                                                    <span className="font-semibold text-zinc-900 dark:text-zinc-200 block mb-1">The Challenge</span>
                                                    {project.problem}
                                                </div>
                                            </div>
                                        )}
                                        {project.outcome && (
                                            <div className="flex gap-3">
                                                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-500/80 mt-0.5" />
                                                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                                                    <span className="font-semibold text-zinc-900 dark:text-zinc-200 block mb-1">The Solution</span>
                                                    {project.outcome}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
