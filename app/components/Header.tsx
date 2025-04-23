"use client";
import { Section } from "./Section";
import Image from "next/image";
import LogoTuhiti from "@/public/logo.png";
import LogoTuhitiDark from "@/public/logo dark mode.png";
import { ModeToggle } from "./ToggleDarkMode";
import { useTheme } from "next-themes";
import { useState } from "react";
import clsx from "clsx";

export const Header = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-2 z-10 h-full w-full mx-auto">
      <Section className="bg-background/50 rounded-md backdrop-blur-md">
        <div className="flex items-center justify-between p-2">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 hover:bg-accent px-3 rounded-md"
          >
            <Image
              src={LogoTuhiti}
              alt="Logo Tuhiti Portfolio"
              width={45}
              height={45}
            />
            <span className="text-lg font-bold whitespace-nowrap">
              Tuhiti Falchetto
            </span>
          </a>

          {/* Bouton burger (mobile uniquement) */}
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="md:hidden p-2 w-10 h-10 rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menu classique (desktop) */}
          <nav className="hidden md:flex space-x-4 items-center">
            <a href="/about" className="hover:bg-accent p-2 rounded-md">
              A propos
            </a>
            <a href="/my-projects" className="hover:bg-accent p-2 rounded-md">
              Mes projets
            </a>
            <a href="/my-tools" className="hover:bg-accent p-2 rounded-md">
              Mes outils
            </a>
            <ModeToggle />
          </nav>
        </div>
      </Section>

      {/* --- Sidebar menu mobile --- */}
      <div
        className={clsx(
          "fixed inset-0 z-40 transition-all duration-300 md:hidden",
          isOpen ? "visible" : "invisible pointer-events-none"
        )}
      >
        {/* Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={clsx(
            "absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Sidebar */}
        <div
          className={clsx(
            "absolute left-0 top-0 h-full w-3/4 max-w-sm bg-background shadow-lg p-4 transition-transform duration-300",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-bold">Menu</span>
            <button onClick={() => setIsOpen(false)} className="p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <a
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:bg-accent p-2 rounded-md"
            >
              A propos
            </a>
            <a
              href="/my-projects"
              onClick={() => setIsOpen(false)}
              className="hover:bg-accent p-2 rounded-md"
            >
              Mes projets
            </a>
            <a
              href="/my-tools"
              onClick={() => setIsOpen(false)}
              className="hover:bg-accent p-2 rounded-md"
            >
              Mes outils
            </a>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};
