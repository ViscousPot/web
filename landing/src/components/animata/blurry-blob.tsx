import React, { useMemo } from "react";
import { cn } from "../../lib/utils";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
    firstBlobColor: string;
    secondBlobColor: string;
}

export default function BlurryBlob({
    className,
    firstBlobColor,
    secondBlobColor,
    children
}: BlobProps) {
    const angle = useMemo(() => Math.floor(Math.random() * 180), []);

    return (
        <div className="relative group h-full w-full items-center justify-center rounded-3xl overflow-hidden">
            <div className="relative w-full h-full" style={{ transform: `rotate(${angle}deg)` }}>
                <div
                    className={cn(
                        "absolute h-2/3 w-2/3 -right-[15%] -top-[20%] animate-pop-blob rounded-sm opacity-15 blur-3xl filter",
                        className,
                        firstBlobColor
                    )}
                ></div>
                <div
                    className={cn(
                        "absolute h-2/3 w-2/3 -left-[20%] top-[60%] animate-pop-blob rounded-sm opacity-20 blur-3xl filter",
                        className,
                        secondBlobColor
                    )}
                ></div>
            </div>
            {children}
        </div>
    );
}
