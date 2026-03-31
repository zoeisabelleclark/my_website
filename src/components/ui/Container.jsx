import React from "react";
import clsx from "clsx";

export function Container({ as: Tag = "div", className = "", narrow = false, children }) {
    return (
        <Tag
            className={clsx(
                "mx-auto w-full px-4 sm:px-6 lg:px-8",
                narrow ? "max-w-4xl" : "max-w-6xl",
                className
            )}
        >
            {children}
        </Tag>
    );
}