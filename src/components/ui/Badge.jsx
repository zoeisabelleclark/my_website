import React from "react";
import clsx from "clsx";

export function Badge({ variant = "default", className = "", children }) {
    const variants = {
        default: "border-border bg-bg-elevated text-text-secondary",
        accent: "border-accent-green bg-transparent text-accent-blue",
        muted: "border-border bg-transparent text-text-muted",
    };

    return (
        <span
            className={clsx(
                "inline-flex items-center rounded-xs border px-2 py-1 text-[11px] uppercase tracking-label",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}