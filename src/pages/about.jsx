import React from "react";
import { SiteFrame } from "../components/ui/SiteFrame";
import { Section } from "../components/ui/Section";
import { Grid } from "../components/ui/Grid";
import { Stack } from "../components/ui/Stack";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Heading } from "../components/ui/Heading";
import { SectionIntro } from "../components/ui/SectionIntro";

export default function AboutPage() {
    return (
        <SiteFrame>
            <Section>
                <SectionIntro
                    label="About"
                    title="A profile shaped by systems, typography, and clarity"
                    intro="I’m interested in how visual structure influences understanding, especially across digital products and portfolio storytelling."
                />
            </Section>

            <Section divider>
                <Grid cols="default" gap="lg">
                    <div className="md:col-span-7">
                        <Stack space="lg">
                            <p className="text-text-secondary">
                                My work sits between design and implementation. I like building things that feel
                                distinct, calm, and useful, with particular attention to hierarchy, spacing,
                                and language.
                            </p>
                            <p className="text-text-secondary">
                                I’m especially drawn to design systems, editorial page structures, and front-end
                                craft where visual decisions and code quality support each other.
                            </p>
                        </Stack>
                    </div>

                    <div className="md:col-span-5">
                        <Stack space="md">
                            <Card>
                                <Stack space="sm">
                                    <Badge>Interests</Badge>
                                    <p className="text-sm text-text-secondary">
                                        Design systems, type-driven interfaces, creative coding, publishing, music culture.
                                    </p>
                                </Stack>
                            </Card>
                            <Card>
                                <Stack space="sm">
                                    <Badge>Working style</Badge>
                                    <p className="text-sm text-text-secondary">
                                        Structured, collaborative, detail-oriented, and comfortable moving from concept to implementation.
                                    </p>
                                </Stack>
                            </Card>
                        </Stack>
                    </div>
                </Grid>
            </Section>
        </SiteFrame>
    );
}