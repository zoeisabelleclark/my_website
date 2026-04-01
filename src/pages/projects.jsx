import React from "react";
import { SiteFrame } from "../components/ui/SiteFrame";
import { Section } from "../components/ui/Section";
import { Grid } from "../components/ui/Grid";
import { Stack } from "../components/ui/Stack";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Heading } from "../components/ui/Heading";
import { TextLink } from "../components/ui/TextLink";
import { SectionIntro } from "../components/ui/SectionIntro";

const projects = [
    {
        title: "Portfolio Redesign",
        type: "Web",
        year: "2026",
        summary: "A structured personal site with editorial layout, reusable primitives, and accessible visual identity.",
        tags: ["Design System", "React", "Tailwind"],
        href: "/projects/portfolio-redesign",
    },
    {
        title: "Case Study Archive",
        type: "Content System",
        year: "2025",
        summary: "A scalable way to present process, outcomes, and artefacts across multiple projects.",
        tags: ["IA", "Content Design", "Gatsby"],
        href: "/projects/case-study-archive",
    },
    {
        title: "Brand Refresh Toolkit",
        type: "Identity",
        year: "2025",
        summary: "A restrained visual toolkit translating brand cues into digital components and layouts.",
        tags: ["Brand", "UI", "Typography"],
        href: "/projects/brand-refresh-toolkit",
    },
];

export default function ProjectsPage() {
    return (
        <SiteFrame>
            <Section>
                <SectionIntro
                    label="WAIUT"
                    title="What am I up to?"
                    intro="I'm currently travelling around the Caucasus and Central Asia "
                />
            </Section>

            <Section divider>
                <Stack space="lg">
                    {projects.map((project, i) => (
                        <Card key={project.title} className="p-0 overflow-hidden">
                            <Grid cols="default" className="gap-0">
                                <div className="md:col-span-3 border-b border-border p-4 md:border-b-0 md:border-r md:p-6">
                                    <Stack space="sm">
                                        <Badge variant="muted">{String(i + 1).padStart(2, "0")}</Badge>
                                        <div className="text-xs uppercase tracking-label text-text-muted">{project.type}</div>
                                        <div className="text-sm text-text-secondary">{project.year}</div>
                                    </Stack>
                                </div>

                                <div className="md:col-span-9 p-4 md:p-6">
                                    <Stack space="md">
                                        <Heading as="h2" size="sm">{project.title}</Heading>
                                        <p className="max-w-2xl text-sm text-text-secondary">{project.summary}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                                        </div>
                                        <TextLink href={project.href}>View case study</TextLink>
                                    </Stack>
                                </div>
                            </Grid>
                        </Card>
                    ))}
                </Stack>
            </Section>
        </SiteFrame>
    );
}