import React from "react";
import { SiteFrame } from "../components/ui/SiteFrame";
import { Section } from "../components/ui/Section";
import { Grid } from "../components/ui/Grid";
import { Stack } from "../components/ui/Stack";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Heading } from "../components/ui/Heading";
import { Button } from "../components/ui/Button";
import { TextLink } from "../components/ui/TextLink";

export default function HomePage() {
    return (
        <SiteFrame>
            <Section>
                <Grid cols="default" gap="lg" className="items-end">
                    <div className="md:col-span-7">
                        <Stack space="lg">
                            <Badge variant="accent">Researcher / Writer / Developer</Badge>
                            <Heading as="h1" size="xl" offset className="max-w-4xl">
                                Building thoughtful digital work with a sharp visual point of view.
                            </Heading>
                            <p className="max-w-2xl text-lg text-text-secondary">
                                Multi-disciplinary profile spanning product thinking, front-end craft,
                                systems design, and clear communication.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Button as="a" href="/projects">View Projects</Button>
                                <Button as="a" href="/experience" variant="secondary">Experience</Button>
                            </div>
                        </Stack>
                    </div>

                    <div className="md:col-span-5">
                        <Card>
                            <Stack space="md">
                                <div className="flex items-center justify-between border-b border-border pb-3">
                                    <span className="text-xs uppercase tracking-label text-text-muted">Current focus</span>
                                    <span className="text-xs text-accent-green">01</span>
                                </div>
                                <p className="text-text-secondary">
                                    Design systems, editorial layouts, accessible front-end, and portfolio storytelling.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge>React</Badge>
                                    <Badge>Gatsby</Badge>
                                    <Badge>Tailwind</Badge>
                                    <Badge>Design Systems</Badge>
                                </div>
                            </Stack>
                        </Card>
                    </div>
                </Grid>
            </Section>

            <Section divider>
                <Grid cols="three">
                    {[
                        ["Selected Projects", "Case studies with outcomes, process, and systems thinking.", "/projects"],
                        ["Experience", "Role history, scope, teams, and measurable impact.", "/experience"],
                        ["About", "Approach, interests, and what shapes the work.", "/about"],
                    ].map(([title, copy, href], i) => (
                        <Card key={title}>
                            <Stack space="md">
                                <div className="flex items-center justify-between">
                                    <Badge variant="muted">0{i + 1}</Badge>
                                    <span className="text-xs uppercase tracking-label text-text-muted">Navigate</span>
                                </div>
                                <Heading as="h2" size="sm">{title}</Heading>
                                <p className="text-sm text-text-secondary">{copy}</p>
                                <TextLink href={href}>Open</TextLink>
                            </Stack>
                        </Card>
                    ))}
                </Grid>
            </Section>

            <Section divider>
                <Grid cols="default" gap="lg">
                    <div className="md:col-span-4">
                        <Stack space="sm">
                            <Badge variant="accent">Snapshot</Badge>
                            <Heading as="h2" size="md">Recent highlights</Heading>
                        </Stack>
                    </div>

                    <div className="md:col-span-8">
                        <Stack space="md">
                            {[
                                ["Led a visual refresh", "Refined typography, page structure, and reusable UI primitives for a portfolio/CV web presence."],
                                ["Built a component system", "Established a lean set of primitives that scale across home, case study, and profile pages."],
                                ["Improved readability", "Balanced expressive layout with accessible contrast, clear hierarchy, and scan-friendly content blocks."],
                            ].map(([title, copy]) => (
                                <div key={title} className="border-b border-border pb-4 last:border-b-0">
                                    <div className="mb-1 text-sm font-medium text-text">{title}</div>
                                    <p className="text-sm text-text-secondary">{copy}</p>
                                </div>
                            ))}
                        </Stack>
                    </div>
                </Grid>
            </Section>
        </SiteFrame>
    );
}