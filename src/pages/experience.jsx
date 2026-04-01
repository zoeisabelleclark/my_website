import React from "react";
import { SiteFrame } from "../components/ui/SiteFrame";
import { Section } from "../components/ui/Section";
import { Stack } from "../components/ui/Stack";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Heading } from "../components/ui/Heading";
import { Grid } from "../components/ui/Grid";
import { SectionIntro } from "../components/ui/SectionIntro";

const roles = [
    {
        company: "the Fifth Wave Institute",
        title: " Freelance Contributor",
        period: "2026 - present",
        bullets: [
            "Authored commissioned article on the role of technology in care",
            "Conducted independed research and produced analytical content for publication",
            "Engaged with editorial feedback to refine and publish work.",
        ],
    },
    {
        company: "Baillie Gifford (Asset Management)",
        title: "Software Developer / Researcher ",
        period: "2023 — 2026",
        bullets: [
            "Delivered solo research reports on technical topics e.g. epistemic phrase usage in LLMs and quantum computing.",
            "Reviewed internal business strategy and processes and assessed their efficacy or potential in relation to emerging technologies.",
            "Developed prod and POC applications in Python, Angular, C# and more.",
        ],
    },
    {
        company: "EHFM / SAM radio ",
        title: "Radio Host",
        period: "2024 — 2026",
        bullets: [
            "Presented live and pre-recorded shows, highlighting music from around the world.",
            "Edited audio content and scripted sections.",
            "https://www.ehfm.live/residents/curiosities",
        ],
    },
    {
        company: "Bristol University ",
        title: "MSc Computer Science",
        period: "2022 — 2023",
        bullets: [
            "Awarded prize for the best thesis research project – later published an academic paper from this thesis.",
            "Thesis research in the field of HCI: co-designing technology with neurodivergent children.",
            "Awarded a Bristol Masters Scholarship.",
        ],
    },
    {
        company: "Edinburgh University",
        title: "MA Philosophy",
        period: "2018 — 2022",
        bullets: [
            "Awarded the Church of Scotland Memorial Prize for academic performance",
            "Awarded an Edinburgh Award for Leadership in Student Opportunities for my work as a peer-assisted learning tutor",
            "Specialised in the combination of philosophy of mind and metaphysics."
        ],
    },
    {
        company: "Exploration Society",
        title: "Outdoor Education Leader",
        period: "2016 — 2019",
        bullets: [
            "Teaching children outdoor skills like bushcraft, sailing, climbing, canoeing etc.",
            "Acted under pressure in difficult situations e.g. first aid responding or managing danger.",
            "Managed trip logistics and navigated hundreds of children through major cities on public transport.",
            "Coordinated with teachers and parents and supported children pastorally when away on weeklong trips.",
        ],
    },
];

export default function ExperiencePage() {
    return (
        <SiteFrame>
            <Section>
                <SectionIntro
                    label="Experience"
                    title="Roles and responsibilities."
                    intro="An overview of roles I have had across industry and academia."
                />
            </Section>

            <Section divider>
                <Stack space="lg">
                    {roles.map((role, i) => (
                        <Card key={role.company} className="p-0">
                            <Grid cols="default" gap="0" className="gap-0">
                                <div className="md:col-span-3 border-b border-border p-4 md:border-b-0 md:border-r md:p-6">
                                    <Stack space="sm">
                                        <Badge variant="muted">{String(i + 1).padStart(2, "0")}</Badge>
                                        <div className="text-sm font-medium text-text">{role.period}</div>
                                    </Stack>
                                </div>

                                <div className="md:col-span-9 p-4 md:p-6">
                                    <Stack space="md">
                                        <div>
                                            <Heading as="h2" size="sm">{role.title}</Heading>
                                            <div className="mt-1 text-sm text-text-secondary">{role.company}</div>
                                        </div>

                                        <ul className="space-y-2 text-sm text-text-secondary">
                                            {role.bullets.map((bullet) => {
                                                const isLink = bullet.startsWith("http");

                                                return (
                                                    <li key={bullet} className="border-l border-border pl-3">
                                                        {isLink ? (
                                                            <a
                                                                href={bullet}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="underline decoration-border underline-offset-4 hover:text-accent-blue hover:decoration-accent-green"
                                                            >
                                                                {bullet}
                                                            </a>
                                                        ) : (
                                                            bullet
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
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