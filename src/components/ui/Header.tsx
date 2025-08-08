"use client";
export default function Header({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={`py-2 font-semibold dark:text-white ${className}`}>
      {children}
    </div>
  );
}
