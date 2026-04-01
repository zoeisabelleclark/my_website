import React from "react";
import { SiteFrame } from "../components/ui/SiteFrame";
import { Section } from "../components/ui/Section";
import { Stack } from "../components/ui/Stack";
import { Heading } from "../components/ui/Heading";
import { Badge } from "../components/ui/Badge";
import { TextLink } from "../components/ui/TextLink";

export default function ContactPage() {
    const links = [
        {
            label: "Substack",
            href: "https://substack.com/@zoeisabelleclark?utm_campaign=profile&utm_medium=profile-page",
            description: "Generally long form writing about language, politics, philosophy, tech, and more.",
        },
        {
            label: "GitHub",
            href: "https://github.com/zoeisabelleclark",
            description: "Code, experiments, and front-end work.",
        },
        {
            label: "YouTube",
            href: "https://www.youtube.com/@zoeisabelleclark",
            description: "Talks, walkthroughs, and visual explorations, generally focusing on philosophical concepts.",
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/zoeisabelleclark/",
            description: "Travels and day-to-day life",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/zoeclark014/",
            description: "More strictly professional content - generally reposts from things shared elsewhere!",
        },
    ];

    return (
        <SiteFrame>
            <Section narrow>
                <Stack space="lg">
                    <Badge variant="accent">Contact</Badge>
                    <Heading as="h1" size="lg" offset>
                        Links & presence
                    </Heading>
                    <p className="max-w-xl text-text-secondary">
                        A small collection of places where I publish, build, and share work. I'm fairly active on all of these platforms and will respond to comments and messages so do feel free to get in touch!
                    </p>
                </Stack>
            </Section>

            <Section narrow divider>
                <Stack space="0" className="border-b border-border">
                    {links.map((link, i) => (
                        <div key={link.label} className="border-t border-border py-5">
                            <div className="grid grid-cols-12 gap-4 items-start">

                                {/* index */}
                                <div className="col-span-1">
                                    <div className="text-[11px] uppercase tracking-label text-text-muted">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                </div>

                                {/* platform */}
                                <div className="col-span-4">
                                    <Heading as="h2" size="sm">
                                        {link.label}
                                    </Heading>
                                </div>

                                {/* description */}
                                <div className="col-span-5">
                                    <p className="text-sm text-text-secondary">
                                        {link.description}
                                    </p>
                                </div>

                                {/* link */}
                                <div className="col-span-2">
                                    <TextLink href={link.href} target="_blank"
                                        rel="noopener noreferrer">Open</TextLink>
                                </div>

                            </div>
                        </div>
                    ))}
                </Stack>
            </Section>
        </SiteFrame>
    );
}