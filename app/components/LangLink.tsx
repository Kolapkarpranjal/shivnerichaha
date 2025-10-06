"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type LangLinkProps = PropsWithChildren<LinkProps> & {
  className?: string;
};

export default function LangLink({ href, children, className, ...props }: LangLinkProps) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const currentLang = segments[1] || "en";

  // Ensure href is always prefixed with the current language
  const langHref =
    typeof href === "string"
      ? `/${currentLang}${href.startsWith("/") ? href : `/${href}`}`
      : href;

  return (
    <Link href={langHref} {...props} className={className}>
      {children}
    </Link>
  );
}
