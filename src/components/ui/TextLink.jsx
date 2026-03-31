import React from "react";
import clsx from "clsx";

export function TextLink({ href, className = "", children, ...props }) {
    return (
        <a
            href={href}
            className={clsx(
                "inline-flex items-center gap-1 text-text-secondary underline decoration-border underline-offset-4 transition-colors",
                "hover:text-text hover:decoration-accent focus:outline-none focus:ring-2 focus:ring-accent/40",
                className
            )}
            {...props}
        >
            {children}
            <span aria-hidden="true" className="text-accent">
                /
            </span>
        </a>
    );
}