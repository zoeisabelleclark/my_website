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
import heroImage from "../images/me2.jpg";
import escherImage from "../images/Hand_with_Reflecting_Sphere.jpg";

export default function HomePage() {
    return (
        <SiteFrame>
            <Section>
                <Grid cols="default" gap="lg" className="items-end">

                    <div className="md:col-span-7">
                        <Stack space="lg">
                            <Badge >Writer / Researcher / Strategist</Badge>
                            <Heading as="h1" size="xl" offset className="max-w-4xl">
                                Seeing the connections in everything.
                            </Heading>
                            <p className="max-w-2xl text-lg text-text-secondary">
                                400 years ago Leibniz wrote that reality cannot be understood except through the interconnection of all things.
                            </p>
                            <p className="max-w-2xl text-lg text-text-secondary">
                                I've found this to be true in practice. My work and experiences have led me to see the connections across disciplines – language, technology, politics, and culture. I believe that the best way to approach each, is not in isolation, but as part of a wider system.
                            </p>

                        </Stack>
                    </div>

                    <div className="md:col-span-5">
                        <div className="relative">
                            <img
                                src={escherImage}
                                alt="Portrait"
                                className="w-full h-[420px] object-cover object-[center_20%] rounded-sm"
                            />

                            {/* caption */}
                            <div className="absolute top-3 right-3 text-[11px] uppercase tracking-label text-text-light">
                                Escher - Hand with Reflecting Sphere
                            </div>
                        </div>
                    </div>
                </Grid>
            </Section>



            <Section divider>
                <Grid cols="three">
                    {[
                        [
                            "What am I up to?",
                            "I'm currently on the move – travelling and learning. Check out what I'm up to here.",
                            "/waiut",
                        ],
                        [
                            "Experience",
                            "What things have I done in the past.",
                            "/experience",
                        ],
                        [
                            "Contact",
                            "See the other places I'm sharing work an get in touch!",
                            "/contact",
                        ],
                    ].map(([title, copy, href], i) => (
                        <Card key={title}>
                            <Stack space="md">
                                <div className="flex items-center justify-between">
                                    <Badge variant="muted">0{i + 1}</Badge>
                                    <span className="text-xs uppercase tracking-label text-text-muted">
                                        Navigate
                                    </span>
                                </div>
                                <Heading as="h2" size="sm">
                                    {title}
                                </Heading>
                                <p className="text-sm text-text-secondary">{copy}</p>
                                <TextLink href={href}>Open</TextLink>
                            </Stack>
                        </Card>
                    ))}
                </Grid>
            </Section>

            <Section divider>
                <Grid cols="default" gap="lg" className="items-start">
                    <div className="md:col-span-6">
                        <Stack space="sm">
                            <Badge variant="accent">Bio</Badge>
                            <Heading as="h2" size="md">
                                Who am I?
                            </Heading>
                            <p className="max-w-2xl text-lg text-text-secondary">
                                I'm a researcher with a background in philosophy and computer science, interested in how different systems – technical, cultural, and political – interact.
                            </p>
                            <p className="max-w-2xl text-lg text-text-secondary">
                                My work so far has focused heavily on technology, but I'm increasingly drawn to questions of language, geopolitics, and lived experience, particularly in Central Asia.
                            </p>
                            <p className="max-w-2xl text-lg text-text-secondary">
                                I'm interested in the space between disciplines and in building an understanding of the world that is both analytical and grounded whilst still accounting for the wonder we see.
                            </p>
                        </Stack>
                    </div>

                    <div className="md:col-span-6">
                        <div className="relative">
                            <img
                                src={heroImage}
                                alt="Portrait"
                                className="w-full h-[420px] object-cover object-[center_20%] rounded-sm"
                            />

                            {/* subtle index label */}
                            <div className="absolute bottom-3 left-3 text-[11px] uppercase tracking-label text-accent-green">
                                01
                            </div>
                        </div>
                    </div>
                </Grid>
            </Section>

        </SiteFrame>
    );
}