
export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    executiveSummary: string;
    status: "Live" | "In Development" | "Planning";
    statusColor: string;
    tech: string[];
    href: string;
    repoUrl: string;
    demoUrl?: string; // Optional
    problem: string;
    problemDomain: {
        headline: string;
        points: string[];
    };
    outcome: string;
    solution: {
        headline: string;
        points: string[];
    };
    features: string[];
    detailedOverview: string;
    technicalDetails?: {
        frontend: string;
        backend: string;
        database: string;
        auth: string;
        storage: string;
        security: string;
    };
    timeline?: {
        phase: string;
        date: string;
        details: string | string[];
    }[];
    roles?: {
        role: string;
        access: string;
    }[];
    multiTenantDetails?: {
        headline: string;
        structure: string[];
    };
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "signalsmaster",
        title: "SignalsMaster",
        description: "Multi-tenant learning management platform for sea cadet units.",
        executiveSummary: "A specialized learning management system purpose-built for sea cadets where each unit operates in its own isolated digital space with complete data separation. Think D2L/Canvas, but for maritime training.",
        status: "In Development",
        statusColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500 ring-yellow-600/20",
        tech: ["Next.js", "ShadCN/UI", "PostgreSQL", "Multi-Tenant", "OAuth2"],
        href: "/projects/signalsmaster",
        repoUrl: "https://github.com/mjsamaha/signalsmaster",
        problem: "Fragmented knowledge management and inconsistent training delivery across cadet units.",
        problemDomain: {
            headline: "The Challenge: Fragmented & Inconsistent Training",
            points: [
                "No centralized learning platform tailored to maritime cadet training.",
                "Fragmented knowledge management across drives, emails, and paper.",
                "Inconsistent training delivery across different units.",
                "No way to track cadet progress or mastery of critical skills.",
                "Limited engagement—training feels like homework rather than achievement.",
                "Legacy Ionic app had limitations—need for modern stack for better UX and maintainability."
            ]
        },
        outcome: "A modern, multi-tenant LMS providing isolated digital spaces for units with structured assessments and gamified learning.",
        solution: {
            headline: "Our Solution: Dedicated Multi-Tenant Platform",
            points: [
                "Modern Stack Migration: Re-building from Ionic to Next.js + ShadCN for better performance.",
                "Multi-Tenant Architecture: Each unit sees only their cadets, quizzes, and leaderboards.",
                "Specialized Learning Modules: Signal Flags, Points of Sail, Drill, Seamanship.",
                "Gamified Assessments: Quizzes with instant feedback, achievements, and unit leaderboards.",
                "Data Isolation & Security: Complete separation of unit data with row-level security.",
                "Offline Capability: PWA with offline mode for field training scenarios."
            ]
        },
        features: [
            "Multi-Tenant Architecture",
            "Unit-Specific Leaderboards",
            "Interactive Learning Modules",
            "Real-time Progress Tracking",
            "Role-Based Access Control",
            "Offline PWA Support"
        ],
        detailedOverview: "SignalsMaster is a specialized learning management system designed to modernize sea cadet training. Unlike generic LMS platforms, it is purpose-built for the maritime context, offering specific modules for Signal Flags, Seamanship, and Drill. The platform utilizes a multi-tenant architecture, ensuring that each cadet unit operates in a completely isolated environment—securely managing their own cadets, data, and progress tracking while benefiting from a shared, robust infrastructure. Starting with a pilot at an initial partner unit, it aims to scale to units nationwide.",
        technicalDetails: {
            frontend: "Next.js (React), TypeScript, ShadCN/UI, Tailwind CSS",
            backend: "Node.js/Express or Next.js API routes",
            database: "PostgreSQL with multi-tenant schema (unit_id scoping)",
            auth: "Microsoft Azure AD OAuth2 + JWT tokens",
            storage: "Cloud-based storage for learning materials (images, videos, PDFs)",
            security: "Row-level security, email domain validation, encrypted traffic"
        },
        timeline: [
            { phase: "Alpha Launch", date: "March 2026", details: "Pilot deployment with an initial partner unit" },
            { phase: "Beta Launch", date: "April 2026", details: "Expanded testing and feature refinement" },
            { phase: "Expansion", date: "Q3 2026", details: "Rollout to future Sea Cadet units and potential Army/Air expansion" }
        ],
        roles: [
            { role: "Junior Cadets", access: "Access learning materials, complete assessments, view own progress" },
            { role: "Senior Cadets", access: "Mentor/tutor capabilities + Junior access" },
            { role: "Officers/Instructors", access: "Full admin—create content, manage cadets, view analytics, configure unit settings" }
        ],
        multiTenantDetails: {
            headline: "Isolated Digital Spaces",
            structure: [
                "Unit: Partner Unit Alpha (Pilot) - Cadets, Officers, Modules, Data",
                "Unit: Future Units - Same structure, completely isolated data",
                "Platform Level: Shared infrastructure, expansion ready"
            ]
        }
    },
    {
        id: 2,
        slug: "quartermaster",
        title: "Quartermaster",
        description: "Enterprise-grade cadet inventory and supply management system.",
        executiveSummary: "An enterprise-grade inventory and supply management system built to streamline logistics and accountability for cadet units, featuring multi-tenant data isolation and role-based permissions.",
        status: "Planning",
        statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 ring-blue-600/20",
        tech: ["Multi-Tenant", "Inventory Tracking", "Audit Logging", "Role-Based Access"],
        href: "/projects/quartermaster",
        repoUrl: "https://github.com/mjsamaha/quartermaster",
        problem: "Poor inventory visibility and reliance on paper tracking leads to lost equipment and lack of accountability.",
        problemDomain: {
            headline: "The Challenge: Logistics & Accountability",
            points: [
                "Poor inventory visibility across units making resource allocation difficult.",
                "Reliance on manual or paper-based tracking which is prone to human error.",
                "Lack of clear audit trails and accountability for equipment issuance.",
                "Difficulty managing equipment distribution, returns, and maintenance schedules.",
                "No real-time insights into supply levels leading to shortages or overstocking.",
                "No system for delegating inventory tasks to senior cadets while maintaining oversight."
            ]
        },
        outcome: "Centralized system with real-time tracking, role-based permissions, audit history, and reporting for effective logistics.",
        solution: {
            headline: "Our Solution: Centralized Supply Chain Management",
            points: [
                "Multi-Tenant Design: Each unit maintains separate inventory data, users, and workflows.",
                "Real-Time Tracking: Centralized system showing current location and status of all assets.",
                "Role-Based Access Control: Granular permissions for Officers, Senior Cadets, and Junior Cadets.",
                "Digital Audit Trails: Complete accountability for every item movement.",
                "Automated Alerts: Low-stock warnings, overdue returns, and maintenance reminders.",
                "Check-In/Check-Out Workflows: Streamlined equipment sign-out with digital hand receipts."
            ]
        },
        features: [
            "Real-time Inventory Tracking",
            "Role-Based Access Control",
            "Digital Audit Trails",
            "Automated Low-Stock Alerts",
            "Equipment Maintenance Scheduling",
            "Digital Hand Receipts"
        ],
        detailedOverview: "Quartermaster is an enterprise-grade inventory management system designed to solve the logistics challenges faced by cadet units. Currently in the planning and analysis phase, it aims to replace fragmented paper-based tracking with a robust, multi-tenant digital platform. By providing each unit with its own isolated data environment, Quartermaster ensures security and autonomy while offering powerful tools for tracking uniforms, equipment, and supplies. The system emphasizes accountability through digital audit trails and simplifies operations with role-based delegation, allowing senior cadets to assist with logistics under officer supervision.",
        technicalDetails: {
            frontend: "Next.js (React), TypeScript, ShadCN/UI",
            backend: "Node.js/Express or Next.js API routes",
            database: "PostgreSQL with multi-tenant schema",
            auth: "Microsoft Azure AD OAuth2 + JWT tokens",
            storage: "Cloud Storage for asset documentation",
            security: "Row-level security, audit logging, role-based permissions"
        },
        timeline: [
            {
                phase: "Q1 2026: Planning & Analysis",
                date: "Jan - Mar 2026",
                details: [
                    "Survey existing inventory practices at pilot unit",
                    "Analyze pain points with current manual systems",
                    "Evaluate technical approaches and architecture options",
                    "Select best solution strategy (build vs. adapt)"
                ]
            },
            {
                phase: "Q2 2026: Design & Validation",
                date: "Apr - Jun 2026",
                details: [
                    "Finalize requirements and technical architecture",
                    "Approve database schema design",
                    "Create and validate UI/UX mockups with stakeholders",
                    "Establish development roadmap"
                ]
            },
            {
                phase: "Q3 2026: Pre-Development",
                date: "Jul - Sep 2026",
                details: [
                    "Refine multi-tenant isolation strategy",
                    "Validate cross-branch applicability (Sea vs. Army)",
                    "Begin preliminary development (Auth, CRUD)",
                    "Incorporate lessons from SignalsMaster release"
                ]
            },
            {
                phase: "Active Development",
                date: "Q4 2026+",
                details: "Target beta deployment to pilot unit"
            }
        ],
        roles: [
            { role: "Junior Cadets", access: "View-only access, ability to submit equipment requests" },
            { role: "Senior Cadets", access: "Limited admin access for day-to-day operations, equipment issue/return" },
            { role: "Officers/Adult Staff", access: "Full administrative access, reporting, system configuration" }
        ],
        multiTenantDetails: {
            headline: "Isolated Inventory Systems",
            structure: [
                "Unit: Partner Unit Alpha (Pilot) - Equipment, Users, Audit Logs",
                "Multi-Unit: Shared Platform Infrastructure"
            ]
        }
    },
    {
        id: 3,
        slug: "unit-website-platform",
        title: "Unit Website Platform",
        description: "Multi-tenant web platform providing professional public-facing websites for cadet units.",
        executiveSummary: "A multi-tenant, modern web platform designed to provide cadet units with a professional, public-facing digital presence that is easy to manage, consistent in quality, and aligned with the culture and structure of Sea, Army, and Air Cadet organizations.",
        status: "Planning",
        statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 ring-blue-600/20",
        tech: ["Next.js", "React + TypeScript", "ShadCN/UI", "PostgreSQL", "Multi-Tenant", "Azure AD B2C"],
        href: "/projects/unit-website-platform",
        repoUrl: "https://github.com/mjsamaha/unit-website-platform",
        problem: "Outdated, fragmented unit websites that are difficult to maintain and fail to reflect professional cadet culture.",
        problemDomain: {
            headline: "The Challenge: Outdated & Fragmented Digital Presence",
            points: [
                "Units rely on outdated websites that appear unprofessional to parents and the public.",
                "Difficult to update content without technical expertise or web developer support.",
                "Information fragmented across multiple platforms (websites, social media, email).",
                "Websites fail to reflect the structure, leadership, and culture of cadet organizations.",
                "Unnecessary administrative burden on officers and volunteers.",
                "Inconsistent quality and branding across different units."
            ]
        },
        outcome: "Professional, standardized digital presence for every cadet unit with easy content management and consistent quality.",
        solution: {
            headline: "Our Solution: Centralized Multi-Tenant Platform",
            points: [
                "Multi-Tenant Architecture: One platform serving many units, each with isolated digital space.",
                "Branch-Themed Templates: Professional designs for Sea, Army, and Air Cadets.",
                "Built-in CMS: Non-technical staff can publish news, manage events, and update content.",
                "Subdomain Routing: Each unit gets their own branded subdomain (e.g., unit-alpha.oaksignal.ca).",
                "Leadership Board: Structured display of officers, staff, and senior cadets with ranks.",
                "Integration Ready: Designed to complement SignalsMaster and Quartermaster systems."
            ]
        },
        features: [
            "Branch-Themed Design System",
            "Public-Facing Website Pages",
            "Leadership Board Display",
            "Events and Calendar",
            "Forms Integration",
            "Culture and History Hub",
            "Multi-Tenant CMS",
            "Subdomain Routing"
        ],
        detailedOverview: "The OakSignal Unit Website Platform is a multi-tenant web platform that delivers branch-themed unit websites powered by a centralized content management system. Each cadet unit is provisioned with its own fully branded website and administrative portal, allowing non-technical staff to publish news, manage events, showcase leadership, share documents, and preserve unit culture without relying on external web developers. Offered as a complementary package alongside SignalsMaster and Quartermaster, the platform serves as the public front door to a unit's operations, recruitment efforts, and community engagement. Each unit operates within its own isolated digital space while benefiting from a shared, secure, and scalable infrastructure.",
        technicalDetails: {
            frontend: "Next.js (App Router), React, TypeScript, ShadCN/UI, Tailwind CSS, Framer Motion",
            backend: "Next.js API Routes / Server Actions",
            database: "PostgreSQL with multi-tenant schema (unit_id scoping)",
            auth: "Azure AD B2C or Auth.js (OAuth) with role-based permissions",
            storage: "Cloud object storage (S3/Azure Blob/Cloudflare R2) with CDN delivery",
            security: "Row-level security, subdomain isolation, role-based permissions, signed URLs"
        },
        timeline: [
            {
                phase: "Q1 2026: Planning & Requirements",
                date: "Jan - Mar 2026",
                details: [
                    "Define core features and user requirements",
                    "Research branch-specific design guidelines",
                    "Evaluate multi-tenant architecture patterns",
                    "Create technical specification document"
                ]
            },
            {
                phase: "Q2 2026: Design & Architecture",
                date: "Apr - Jun 2026",
                details: [
                    "Design branch-themed templates (Sea, Army, Air)",
                    "Create CMS interface mockups",
                    "Finalize database schema and API design",
                    "Validate designs with stakeholders"
                ]
            },
            {
                phase: "Q3 2026: Core Development",
                date: "Jul - Sep 2026",
                details: [
                    "Build multi-tenant infrastructure",
                    "Implement CMS and content management",
                    "Develop public-facing website templates",
                    "Set up subdomain routing and authentication"
                ]
            },
            {
                phase: "Q4 2026: Beta Testing & Refinement",
                date: "Oct - Dec 2026",
                details: [
                    "Internal testing with pilot units",
                    "Gather feedback and iterate on features",
                    "Performance optimization and security hardening",
                    "Documentation and training materials"
                ]
            },
            {
                phase: "Q1 2027: Production Launch",
                date: "Jan - Mar 2027",
                details: "General Availability rollout to cadet units with ongoing support"
            }
        ],
        roles: [
            { role: "Public Visitors", access: "View public content, submit inquiries and forms, browse events and news" },
            { role: "Unit Staff/Officers", access: "Full CMS access—create content, manage events, update leadership, configure unit settings" },
            { role: "Senior Cadets", access: "Limited administrative capabilities for specific content areas under officer supervision" }
        ],
        multiTenantDetails: {
            headline: "Isolated Unit Websites",
            structure: [
                "Unit: Example Sea Cadets - Website, CMS Access, Events, Leadership Data",
                "Platform Level: Shared Infrastructure, Centralized Updates, Security"
            ]
        }
    },
];
