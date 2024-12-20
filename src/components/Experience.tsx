import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
    {
        role: "Software Engineer I", // TODO: Replace with actual role
        company: "Careem Technologies Pakistan", // TODO: Replace with actual company name
        logo: "/company.svg", // TODO: Replace with actual logo
        duration: "1/1/2024 - 1/6/2024",
        description:
            "Contributed to GPT-4-powered Arabic localization microservice, secure REST APIs with JWT, automated tasks, conducted code reviews, and implemented robust testing for reliability",
        link: "https://careem.com",
        images: [],
    },
    {
        role: "Software Engineer", // TODO: Replace with actual role
        company: "Breu Inc", // TODO: Replace with actual company name
        logo: "/company.svg", // TODO: Replace with actual logo
        duration: "1-10-2022 - 13-5-2023",
        description:
            "Developed scalable microservices with NestJS, Express, and TypeScript; built responsive UIs using React and Tailwind CSS; deployed on GCP with Kubernetes; implemented CI/CD pipelines; and optimized performance for supply chain ecosystems.",
        link: "https://breu.io",
        images: [
            "/devvault.png",
            "/devvault.png",
        ],
    }
]

export const Experience = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {jobs.map((j, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={j.logo}
                                        alt={j.company}
                                        width={40}
                                        height={40}
                                        className="rounded-md border shadow-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {j.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {j.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2"/>
                                    {j.duration}
                                </p>
                                <p className="text-sm mt-2">{j.description}</p>
                                {/* Job Images */}
                                <JobImages 
                                    role={j.role} 
                                    link={j.link}
                                    images={j.images} 
                                    duration={j.duration} 
                                />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}