"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-primary text-primary-foreground flex justify-center px-4 group/nav">
      {/* <nav className="bg-red-200 text-primary-foreground flex justify-center px-4"> */}
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();

  const href =
    typeof props.href === "string"
      ? props.href
      : (props.href as any)?.pathname ?? "";

  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      {...props}
      //   className={cn(
      //     "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
      //     // "p-4 hover:bg-white hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
      //     props.href && "bg-background text-foreground"
      //   )}
      data-active={isActive ? "true" : "false"}
      className={cn(
        // base
        "p-4 transition-colors",

        // default (inactive) sits on the dark nav bar
        "text-primary-foreground",

        // hovered item becomes the "white tab"
        "hover:bg-background hover:text-foreground focus-visible:bg-background focus-visible:text-foreground",

        // active item is white by default…
        "data-[active=true]:bg-background data-[active=true]:text-foreground",

        // …but when ANY item in the nav is hovered, temporarily un-highlight the active one
        "group-hover/nav:data-[active=true]:bg-transparent group-hover/nav:data-[active=true]:text-primary-foreground"
      )}
    />
  );
}
