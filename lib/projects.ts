
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
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "signalsmaster",
        title: "SignalsMaster",
        description: "Standardized, mobile-first quiz platform for cadet signal flag and pennant training.",
        executiveSummary: "A standardized, mobile-first quiz platform designed to modernize and unify cadet signal flag and pennant training across units.",
        status: "In Development",
        statusColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500 ring-yellow-600/20",
        tech: ["Mobile-First", "Assessment Platform", "Training Tool"],
        href: "/projects/signalsmaster",
        repoUrl: "https://github.com/mjsamaha/signalsmaster",
        problem: "Evaluation of cadet knowledge is often manual, inconsistent, and lacks progress tracking.",
        problemDomain: {
            headline: "The Challenge: Inconsistent Training Standards",
            points: [
                "No consistent way to assess cadet knowledge across different units.",
                "Manual or informal evaluations lack standardization and fairness.",
                "No centralized progress tracking or repeatable testing frameworks.",
                "Difficulty measuring the actual effectiveness of training programs.",
            ]
        },
        outcome: "Structured assessments with instant feedback and measurable training progress across any device.",
        solution: {
            headline: "Our Solution: Standardized Digital Assessment",
            points: [
                "Structured, standardized assessments that provide instant feedback to cadets.",
                "A mobile-accessible platform allowing for learning and training anytime, anywhere.",
                "Comprehensive progress tracking and performance analytics for instructors.",
                "Measurable training progress consistent across all devices and units.",
            ]
        },
        features: [
            "Interactive Flag Quizzes",
            "Real-time Score Tracking",
            "Mobile-Responsive Design",
            "Admin Dashboard for Instructors"
        ],
        detailedOverview: "SignalsMaster addresses the need for a modern, accessible training tool for sea cadets. By digitizing the learning process for signal flags and pennants, it removes the variability of manual testing and provides a fun, engaging way for cadets to master essential skills. The platform is built with a focus on mobile usability, ensuring that training materials are available to cadets whenever they have a moment to spare.",
    },
    {
        id: 2,
        slug: "quartermaster",
        title: "Quartermaster",
        description: "Enterprise-grade cadet inventory and supply management system with role-based access control.",
        executiveSummary: "An enterprise-grade inventory and supply management system built to streamline logistics and accountability for cadet units, with role-based permissions for officers, senior cadets, and junior cadets.",
        status: "In Development",
        statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 ring-blue-600/20",
        tech: ["Inventory Management", "Audit System", "Operations Tool", "Role-Based Access"],
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
                "A centralized inventory system providing real-time tracking of all assets.",
                "Role-based access control: Officers (full admin), Senior Cadets (limited admin), Junior Cadets (view/request only).",
                "Digital audit trails that ensure complete accountability for every item.",
                "Comprehensive reporting and analytics to optimize supply levels.",
                "Automated low-stock alerts and maintenance reminders.",
                "Streamlined equipment check-in/check-out workflows to save time."
            ]
        },
        features: [
            "Real-time Inventory Tracking",
            "Role-Based Access Control",
            "Audit Trail & Accountability Logging",
            "Equipment Check-In/Check-Out Workflows"
        ],
        detailedOverview: "Quartermaster creates a digital backbone for cadet logistics. It replaces outdated spreadsheets and paper logs with a robust, cloud-based system that ensures every piece of kit is accounted for. The system features role-based access control, allowing officers and adult staff full administrative capabilities, senior cadets limited admin access for day-to-day operations, and junior cadets the ability to view inventory and submit requests. From uniforms to training equipment, Quartermaster provides the visibility, delegation, and control needed to run an efficient supply chain, allowing staff to focus more on training and less on counting stock.",
    },
];
