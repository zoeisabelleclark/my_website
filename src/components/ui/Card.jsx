import React from "react";
import clsx from "clsx";

export function Card({ as: Tag = "article", className = "", children }) {
    return (
        <Tag
            className={clsx(
                "rounded-sm border border-border bg-bg-elevated p-4 md:p-5 shadow-subtle transition-colors",
                className
            )}
        >
            {children}
        </Tag>
    );
}