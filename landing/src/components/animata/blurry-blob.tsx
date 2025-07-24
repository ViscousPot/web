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

    const firstBlobPos = useMemo(
        () => ({
            right: `${24 + Math.floor(Math.random() * 20)}px`,
            top: `${28 + Math.floor(Math.random() * 20)}px`,
        }),
        []
    );

    const secondBlobPos = useMemo(
        () => ({
            left: `${40 + Math.floor(Math.random() * 20)}px`,
            top: `${64 + Math.floor(Math.random() * 20)}px`,
        }),
        []
    );

    return (
        <div className="relative group min-h-52 min-w-52 w-full h-full items-center justify-center rounded-3xl overflow-hidden">
            <div className="relative w-full h-full max-w-lg" style={{ transform: `rotate(${angle}deg)` }}>
                <div
                    className={cn(
                        "absolute h-72 w-72 animate-pop-blob rounded-sm p-8 opacity-15 blur-3xl filter",
                        className,
                        firstBlobColor
                    )}
                    style={{ right: `-${firstBlobPos.right}`, top: `-${firstBlobPos.top}` }}
                ></div>
                <div
                    className={cn(
                        "absolute h-72 w-72 animate-pop-blob rounded-sm p-8 opacity-20 blur-3xl filter",
                        className,
                        secondBlobColor
                    )}
                    style={{ left: `-${secondBlobPos.left}`, top: `-${secondBlobPos.top}` }}
                ></div>
            </div>
            {children}
        </div>
    );
}
