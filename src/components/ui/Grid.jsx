import React from "react";
import clsx from "clsx";

export function Grid({
    className = "",
    cols = "default",
    gap = "md",
    children,
}) {
    const colMap = {
        default: "grid-cols-1 md:grid-cols-12",
        two: "grid-cols-1 md:grid-cols-2",
        three: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    };

    const gapMap = {
        sm: "gap-4",
        md: "gap-6",
        lg: "gap-8",
    };

    return (
        <div className={clsx("grid", colMap[cols], gapMap[gap], className)}>
            {children}
        </div>
    );
}