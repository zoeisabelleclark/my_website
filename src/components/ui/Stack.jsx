import React from "react";
import clsx from "clsx";

export function Stack({ as: Tag = "div", space = "md", className = "", children }) {
    const spaceMap = {
        xs: "space-y-2",
        sm: "space-y-3",
        md: "space-y-4",
        lg: "space-y-6",
        xl: "space-y-8",
        "2xl": "space-y-12",
    };

    return <Tag className={clsx(spaceMap[space], className)}>{children}</Tag>;
}