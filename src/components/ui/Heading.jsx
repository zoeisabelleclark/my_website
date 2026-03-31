import React from "react";
import clsx from "clsx";

export function Heading({
    as: Tag = "h2",
    size = "lg",
    offset = false,
    className = "",
    children,
}) {
    const sizes = {
        sm: "text-xl md:text-2xl",
        md: "text-2xl md:text-3xl",
        lg: "text-3xl md:text-4xl",
        xl: "text-4xl md:text-5xl",
    };

    return (
        <Tag
            className={clsx(
                "font-display font-semibold tracking-tightish text-text",
                sizes[size],
                offset && "relative",
                className
            )}
        >
            {offset && (
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-px top-px opacity-20 text-accent-green"
                >
                    {children}
                </span>
            )}
            <span className="relative">{children}</span>
        </Tag>
    );
}