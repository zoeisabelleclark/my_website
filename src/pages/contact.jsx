import React from "react";
import { SiteFrame } from "../components/ui/SiteFrame";
import { Section } from "../components/ui/Section";
import { Stack } from "../components/ui/Stack";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Heading } from "../components/ui/Heading";
import { Button } from "../components/ui/Button";
import { TextLink } from "../components/ui/TextLink";

export default function ContactPage() {
    return (
        <SiteFrame>
            <Section narrow>
                <Stack space="lg">
                    <Badge variant="accent">Contact</Badge>
                    <Heading as="h1" size="lg" offset>
                        Let’s talk about roles, projects, or collaborations.
                    </Heading>
                    <p className="max-w-2xl text-text-secondary">
                        Available for full-time roles, freelance projects, and conversations around design systems,
                        front-end implementation, and portfolio presentation.
                    </p>
                </Stack>
            </Section>

            <Section narrow divider>
                <Card>
                    <Stack space="lg">
                        <div className="flex items-center justify-between border-b border-border pb-3">
                            <span className="text-xs uppercase tracking-label text-text-muted">Details</span>
                            <span className="text-xs text-accent-green">Contact / 01</span>
                        </div>

                        <Stack space="sm">
                            <div className="text-sm text-text-muted">Email</div>
                            <TextLink href="mailto:hello@example.com">hello@example.com</TextLink>
                        </Stack>

                        <Stack space="sm">
                            <div className="text-sm text-text-muted">Elsewhere</div>
                            <div className="flex flex-wrap gap-4">
                                <TextLink href="https://www.linkedin.com/">LinkedIn</TextLink>
                                <TextLink href="https://github.com/">GitHub</TextLink>
                            </div>
                        </Stack>

                        <div className="pt-2">
                            <Button as="a" href="mailto:hello@example.com">Start a conversation</Button>
                        </div>
                    </Stack>
                </Card>
            </Section>
        </SiteFrame>
    );
}