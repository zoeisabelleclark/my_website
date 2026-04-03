import React from "react";
import { SiteFrame } from "../components/ui/SiteFrame";
import { Section } from "../components/ui/Section";
import { Grid } from "../components/ui/Grid";
import { Stack } from "../components/ui/Stack";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Heading } from "../components/ui/Heading";
import { TextLink } from "../components/ui/TextLink";

export default function ProjectDetailTemplate() {
    return (
        <SiteFrame>
            <Section>
                <Grid cols="default" gap="lg">
                    <div className="md:col-span-8">
                        <Stack space="lg">
                            <Badge variant="accent">Case Study</Badge>
                            <Heading as="h1" size="xl" offset>
                                Portfolio Redesign
                            </Heading>
                            <p className="max-w-3xl text-lg text-text-secondary">
                                A multi-page CV and portfolio website designed for readability,
                                systems thinking, and subtle visual distinction.
                            </p>
                        </Stack>
                    </div>

                    <div className="md:col-span-4">
                        <Card>
                            <Stack space="sm">
                                <div className="flex justify-between border-b border-border pb-2 text-sm">
                                    <span className="text-text-muted">Role</span>
                                    <span className="text-text">Design / Front-end</span>
                                </div>
                                <div className="flex justify-between border-b border-border pb-2 text-sm">
                                    <span className="text-text-muted">Year</span>
                                    <span className="text-text">2026</span>
                                </div>
                                <div className="flex justify-between pb-2 text-sm">
                                    <span className="text-text-muted">Stack</span>
                                    <span className="text-text">Gatsby / React / Tailwind</span>
                                </div>
                            </Stack>
                        </Card>
                    </div>
                </Grid>
            </Section>

            <Section divider>
                <Grid cols="default" gap="lg">
                    <div className="md:col-span-3">
                        <div className="sticky top-24">
                            <Stack space="sm">
                                <Badge variant="muted">Index</Badge>
                                <a href="#overview" className="text-sm text-text-secondary hover:text-text">Overview</a>
                                <a href="#challenge" className="text-sm text-text-secondary hover:text-text">Challenge</a>
                                <a href="#approach" className="text-sm text-text-secondary hover:text-text">Approach</a>
                                <a href="#outcome" className="text-sm text-text-secondary hover:text-text">Outcome</a>
                            </Stack>
                        </div>
                    </div>

                    <div className="md:col-span-9">
                        <Stack space="2xl">
                            <section id="overview">
                                <Stack space="md">
                                    <Heading size="md">Overview</Heading>
                                    <p className="text-text-secondary">
                                        The goal was to create a personal site that feels distinctive without sacrificing professionalism.
                                        The visual language borrows from 90s poster composition through labels, offsets, and structure,
                                        while keeping the interface minimal and highly readable.
                                    </p>
                                </Stack>
                            </section>

                            <section id="challenge">
                                <Stack space="md">
                                    <Heading size="md">Challenge</Heading>
                                    <p className="text-text-secondary">
                                        Typical portfolio sites either become visually generic or over-styled. The challenge was to design
                                        a system that could hold CV-style content, case studies, and personal narrative in one coherent framework.
                                    </p>
                                </Stack>
                            </section>

                            <section id="approach">
                                <Stack space="lg">
                                    <Heading size="md">Approach</Heading>
                                    <Grid cols="two">
                                        <Card>
                                            <Stack space="sm">
                                                <Badge>Typography</Badge>
                                                <p className="text-sm text-text-secondary">
                                                    Clean grotesk sans paired with a slightly more expressive display face for section headers.
                                                </p>
                                            </Stack>
                                        </Card>
                                        <Card>
                                            <Stack space="sm">
                                                <Badge>Layout</Badge>
                                                <p className="text-sm text-text-secondary">
                                                    Grid-led, asymmetrical compositions with strong dividers and metadata.
                                                </p>
                                            </Stack>
                                        </Card>
                                        <Card>
                                            <Stack space="sm">
                                                <Badge>System</Badge>
                                                <p className="text-sm text-text-secondary">
                                                    Reduced the interface to a small set of primitives that compose across pages.
                                                </p>
                                            </Stack>
                                        </Card>
                                        <Card>
                                            <Stack space="sm">
                                                <Badge>Accessibility</Badge>
                                                <p className="text-sm text-text-secondary">
                                                    High-contrast neutrals, controlled accent usage, and clear focus states.
                                                </p>
                                            </Stack>
                                        </Card>
                                    </Grid>
                                </Stack>
                            </section>

                            <section id="outcome">
                                <Stack space="md">
                                    <Heading size="md">Outcome</Heading>
                                    <p className="text-text-secondary">
                                        The result is a site that reads like a strong CV and presents like a considered design artifact:
                                        calm, structured, memorable.
                                    </p>
                                    <TextLink href="/waiut">Back to all projects</TextLink>
                                </Stack>
                            </section>
                        </Stack>
                    </div>
                </Grid>
            </Section>
        </SiteFrame>
    );
}