import type { CSSProperties } from "react";

type PhotoProps = {
	src: string;
	alt: string;
	className?: string;
	style?: CSSProperties;
	priority?: boolean;
	sizes?: string;
	fill?: boolean;
	quality?: number;
	loading?: "lazy" | "eager";
	"aria-hidden"?: boolean | "true" | "false";
};

export function Photo({
	src,
	alt,
	className,
	style,
	priority,
	sizes,
	"aria-hidden": ariaHidden,
}: PhotoProps) {
	return (
		<img
			src={src}
			alt={alt}
			className={className}
			sizes={sizes}
			decoding="async"
			loading={priority ? "eager" : "lazy"}
			fetchPriority={priority ? "high" : "auto"}
			aria-hidden={ariaHidden}
			style={{
				position: "absolute",
				inset: 0,
				width: "100%",
				height: "100%",
				objectFit: "cover",
				...style,
			}}
		/>
	);
}
