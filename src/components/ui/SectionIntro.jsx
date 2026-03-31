import React from "react";
import { Stack } from "./Stack";
import { Badge } from "./Badge";
import { Heading } from "./Heading";

export function SectionIntro({ label, title, intro }) {
    return (
        <Stack space="md" className="max-w-2xl">
            {label ? <Badge variant="accent">{label}</Badge> : null}
            <Heading size="md" offset>
                {title}
            </Heading>
            {intro ? <p className="text-base text-text-secondary">{intro}</p> : null}
        </Stack>
    );
}