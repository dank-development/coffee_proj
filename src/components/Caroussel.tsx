import { Children, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  animationTime?: number;
};

export default function Caroussel({
  children,
  className,
  animationTime = 20,
}: Props) {
  const items = Children.toArray(children);
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className={`overflow-hidden ${className ?? ""}`}
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <ul
        style={{
          animation: `caroussel ${animationTime}s linear infinite`,
        }}
        // inline-flex so it shrinks the rail size to the content, whereas flex can stretch wider than it's contents.
        className="inline-flex text-primary-foreground items-center flex-nowrap font-medium text-3xl italic whitespace-nowrap"
      >
        {duplicatedItems.map((item, index) => (
          <li key={index} className="pr-4 shrink-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
