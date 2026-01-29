import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black py-24">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Breadcrumb Navigation */}
                <div className="mb-8">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/#projects">Projects</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{project.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Hero Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                            {project.title}
                        </h1>
                        <Badge
                            variant={project.status === "Live" ? "default" : "secondary"}
                            className={`${project.status === 'In Development' ? 'animate-pulse' : ''} text-sm`}
                        >
                            {project.status}
                        </Badge>
                    </div>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mb-6">
                        {project.executiveSummary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-zinc-600 dark:text-zinc-400">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    {/* Quick Links */}
                    <div className="flex gap-4">
                        <Button asChild>
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Source Code
                            </a>
                        </Button>
                        {project.demoUrl ? (
                            <Button asChild variant="outline">
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <Globe className="mr-2 h-4 w-4" />
                                    Live Demo
                                </a>
                            </Button>
                        ) : (
                            <Button variant="outline" disabled>
                                <Globe className="mr-2 h-4 w-4" />
                                Live Demo (Coming Soon)
                            </Button>
                        )}
                    </div>
                </div>

                <Separator className="my-12" />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Overview & Features */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Overview</h2>
                            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                {project.detailedOverview}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Problem Domain</h2>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl">{project.problemDomain.headline}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {project.problemDomain.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start text-zinc-600 dark:text-zinc-300">
                                                <span className="mr-2">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Our Solution</h2>
                            <Card className="border-blue-200 dark:border-blue-900/50 bg-blue-50/30 dark:bg-blue-900/10">
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-900 dark:text-blue-100">{project.solution.headline}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {project.solution.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start text-zinc-700 dark:text-zinc-300">
                                                <span className="mr-2 text-blue-500">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </section>
                    </div>

                    {/* Right Column: Key Features Sidebar */}
                    <div className="space-y-8">
                        <div className="lg:sticky lg:top-24">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Key Features</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm font-medium text-zinc-600 dark:text-zinc-300">
                                                <ArrowLeft className="mr-2 h-4 w-4 rotate-180 text-blue-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <div className="mt-8">
                                <Button variant="ghost" asChild className="w-full justify-start pl-0 hover:bg-transparent hover:text-blue-600">
                                    <Link href="/#projects">
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Back to All Projects
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
