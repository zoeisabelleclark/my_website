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
        company: "Studio / Company Name",
        title: "Senior Product Designer",
        period: "2023 — Present",
        bullets: [
            "Led end-to-end design across web product and marketing surfaces.",
            "Built reusable interface patterns and improved design-development handoff.",
            "Introduced stronger content hierarchy and accessibility checks.",
        ],
    },
    {
        company: "Previous Company",
        title: "Designer / Front-end Developer",
        period: "2020 — 2023",
        bullets: [
            "Designed and implemented campaign pages and content systems.",
            "Created component libraries for consistency across projects.",
            "Worked closely with content, engineering, and brand stakeholders.",
        ],
    },
];

export default function ExperiencePage() {
    return (
        <SiteFrame>
            <Section>
                <SectionIntro
                    label="Experience"
                    title="Roles, responsibilities, and impact"
                    intro="A concise chronology of positions, cross-functional scope, and the kind of work delivered."
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
                                            {role.bullets.map((bullet) => (
                                                <li key={bullet} className="border-l border-border pl-3">
                                                    {bullet}
                                                </li>
                                            ))}
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