import React from "react";
import { SiteFrame } from "../components/ui/SiteFrame";
import { Section } from "../components/ui/Section";
import { Grid } from "../components/ui/Grid";
import { Stack } from "../components/ui/Stack";
import { Badge } from "../components/ui/Badge";
import { Heading } from "../components/ui/Heading";

export default function WaiutPage() {
    const entries = [
        {
            index: "01",
            place: "Edinburgh",
            stage: "Now",
            note: "Leaving soon. Thinking about how language shapes the way we understand systems, culture, and place. ",
        },
        {
            index: "02",
            place: "Caucasus",
            stage: "Next",
            note: "Reading, exploring, reconnecting with writing code, planning routes, before arriving.",
        },
        {
            index: "03",
            place: "Central Asia",
            stage: "Soon",
            note: "Main focus is language, then culture, politics, history, and everything else about this unbelievable part of the world.",
        },
        {
            index: "04",
            place: "On the move",
            stage: "Later",
            note: "Who knows what comes next but I'm excited to see.",
        },
    ];

    return (
        <SiteFrame>
            <Section>
                <Grid cols="default" gap="lg" className="items-start">
                    <div className="md:col-span-7">
                        <Stack space="lg">
                            <Badge>What am I up to?</Badge>
                            <Heading as="h1" size="xl" offset className="max-w-4xl">
                                On the move.
                            </Heading>
                            <p className="max-w-2xl text-lg text-text-secondary">
                                In four weeks I’ll be leaving work to travel and then head to
                                language school in Central Asia. This page is a log of what I’m doing, preparing for, and
                                paying attention to.
                            </p>
                        </Stack>
                    </div>


                </Grid>
            </Section>

            <Section divider>
                <Grid cols="default" gap="lg" className="items-start">
                    <div className="md:col-span-4">
                        <Stack space="sm">
                            <Badge>Field notes</Badge>
                            <Heading as="h2" size="md">
                                A live log
                            </Heading>
                            <p className="text-sm text-text-secondary max-w-sm">
                                A few fragments from what I’m reading, noticing, and moving
                                towards.
                            </p>
                        </Stack>
                    </div>

                    <div className="md:col-span-8">
                        <Stack space="0" className="border-b border-border">
                            {entries.map((entry) => (
                                <div key={entry.index} className="border-t border-border py-5">
                                    <div className="grid grid-cols-12 gap-4 items-start">
                                        <div className="col-span-2">
                                            <div className="text-[11px] uppercase tracking-label text-text-muted">
                                                {entry.index}
                                            </div>
                                        </div>

                                        <div className="col-span-4">
                                            <Stack space="xs">
                                                <div className="text-sm text-text">{entry.place}</div>
                                                <div className="text-[11px] uppercase tracking-label text-accent-blue">
                                                    {entry.stage}
                                                </div>
                                            </Stack>
                                        </div>

                                        <div className="col-span-6">
                                            <p className="text-sm text-text-secondary">
                                                {entry.note}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Stack>
                    </div>
                </Grid>
            </Section>

            <Section divider>
                <Grid cols="default" gap="lg" className="items-start">

                    <div className="md:col-span-4">
                        <Stack space="sm">
                            <Badge>Reading</Badge>
                            <Heading as="h2" size="md">
                                Just read / Currently reading
                            </Heading>
                            <p className="text-sm text-text-secondary max-w-sm">
                                A few things shaping how I’m thinking at the moment.
                            </p>
                        </Stack>
                    </div>

                    <div className="md:col-span-8">
                        <Stack space="0" className="border-b border-border">

                            {/* JUST READ */}
                            <div className="border-t border-border py-5">
                                <div className="grid grid-cols-12 gap-4 items-start">

                                    <div className="col-span-2">
                                        <div className="text-[11px] uppercase tracking-label text-text-muted">
                                            05
                                        </div>
                                    </div>

                                    <div className="col-span-4">
                                        <Stack space="xs">
                                            <div className="text-sm text-text">
                                                Sovietstan - Erica Fatland
                                            </div>
                                            <div className="text-[11px] uppercase tracking-label text-accent-blue">
                                                Just read
                                            </div>
                                        </Stack>
                                    </div>

                                    <div className="col-span-6">
                                        <p className="text-sm text-text-secondary">
                                            A travelogue and history of the five core Central Asian countries
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* JUST READ */}
                            <div className="border-t border-border py-5">
                                <div className="grid grid-cols-12 gap-4 items-start">

                                    <div className="col-span-2">
                                        <div className="text-[11px] uppercase tracking-label text-text-muted">
                                            06
                                        </div>
                                    </div>

                                    <div className="col-span-4">
                                        <Stack space="xs">
                                            <div className="text-sm text-text">
                                                Siddartha - Hermann Hesse
                                            </div>
                                            <div className="text-[11px] uppercase tracking-label text-accent-green">
                                                Just read
                                            </div>
                                        </Stack>
                                    </div>

                                    <div className="col-span-6">
                                        <p className="text-sm text-text-secondary">
                                            Fictional exploration of Buddhism through the life of one man.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* CURRENTLY READING */}
                            <div className="border-t border-border py-5">
                                <div className="grid grid-cols-12 gap-4 items-start">

                                    <div className="col-span-2">
                                        <div className="text-[11px] uppercase tracking-label text-text-muted">
                                            07
                                        </div>
                                    </div>

                                    <div className="col-span-4">
                                        <Stack space="xs">
                                            <div className="text-sm text-text">
                                                Journey to the East - Hermann Hesse
                                            </div>
                                            <div className="text-[11px] uppercase tracking-label text-accent-green">
                                                Currently reading
                                            </div>
                                        </Stack>
                                    </div>

                                    <div className="col-span-6">
                                        <p className="text-sm text-text-secondary">
                                            ...I'm still finding out.
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </Stack>
                    </div>

                </Grid>
            </Section>

            <Section divider>
                <Grid cols="default" gap="lg" className="items-start">
                    <div className="md:col-span-4">
                        <Stack space="sm">
                            <Badge >Current location</Badge>
                            <Heading as="h2" size="md">
                                Edinburgh
                            </Heading>
                        </Stack>
                    </div>

                    <div className="md:col-span-8">
                        <div className=" pt-4">
                            <p className="max-w-2xl text-base text-text-secondary">
                                Still here for now — finishing work and organising what comes next.
                            </p>
                        </div>
                    </div>
                </Grid>
            </Section>
        </SiteFrame>
    );
}