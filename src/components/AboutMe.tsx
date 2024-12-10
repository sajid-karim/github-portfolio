import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";

export const AboutMe = ( ) => {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    {/* Write 1-2 sentences about yourself */}
                    Hi, I'm Sajid Karim, a skilled software engineer specializing in backend development and microservices architecture. With expertise in Python, FastAPI, and Kubernetes, I create scalable, efficient systems. My experience includes integrating EHR systems, building secure RESTful APIs, and optimizing cloud deployments. Passionate about problem-solving, I leverage technologies like GPT-4 and FHIR API to deliver impactful solutions. Explore my portfolio to see my projects and innovations
                </p>
            </CardContent>
        </Card>
    )
}