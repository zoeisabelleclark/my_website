import React from "react";
import clsx from "clsx";
import { Container } from "./Container";

export function Section({
    id,
    className = "",
    narrow = false,
    divider = false,
    children,
}) {
    return (
        <section
            id={id}
            className={clsx(
                "py-12 md:py-16 lg:py-20",
                divider && "border-t border-border",
                className
            )}
        >
            <Container narrow={narrow}>{children}</Container>
        </section>
    );
}