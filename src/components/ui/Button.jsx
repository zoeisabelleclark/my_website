import React from "react";
import clsx from "clsx";

export function Button({
    as: Tag = "button",
    href,
    variant = "primary",
    className = "",
    children,
    ...props
}) {
    const base =
        "inline-flex items-center justify-center rounded-xs border px-4 py-2 text-sm font-medium tracking-tightish transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent-green/30";

    const variants = {
        primary:
            "border-accent-green bg-transparent text-accent-green hover:bg-accent-green/5",
        secondary:
            "border-text bg-transparent text-text hover:bg-bg-subtle",
        ghost:
            "border-transparent bg-transparent text-text-secondary hover:text-text",
    };

    if (Tag === "a" || href) {
        return (
            <a href={href} className={clsx(base, variants[variant], className)} {...props}>
                {children}
            </a>
        );
    }

    return (
        <Tag className={clsx(base, variants[variant], className)} {...props}>
            {children}
        </Tag>
    );
}