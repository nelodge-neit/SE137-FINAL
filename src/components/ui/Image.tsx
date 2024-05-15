import clsx from "clsx";
import NextImage from "next/image";

interface ImageProps {
    src: string;
    alt: string;
    isPriority?: boolean;
    className?: string;
}

export function Image({ src, alt, isPriority, className }: ImageProps) {
    return (
        <div
            className={clsx(
                "relative flex items-center justify-center p-4 rounded-2xl bg-primary-800",
                className
            )}
        >
            <NextImage
                src={src}
                alt={alt}
                priority={isPriority}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-lg w-auto h-full"
            />
        </div>
    );
}
