"use client";
export default function Header({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={`py-2 font-semibold text-5xl dark:text-white ${className}`}>
      {children}
    </div>
  );
}
