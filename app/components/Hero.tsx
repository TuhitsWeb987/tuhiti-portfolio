"use client";

import Image from "next/image";
import { Section } from "./Section";
import PhotoTuhiti from "@/public/photo portfolio.jpg";
import Link from "next/link";
import { Github, Instagram, Linkedin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span className={cn("font-semibold text-primary", className)}>
      {props.children}
    </span>
  );
};

export const Hero = () => {
  const router = useRouter();

  return (
    <Section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 w-full px-6 md:px-10 py-12">
      {/* Texte à gauche */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-xl">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <h1 className="text-4xl md:text-5xl font-bold text-accent-foreground">
            Tuhiti Falchetto
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground tracking-wide">
            Développeur Full Stack
          </h2>
        </div>

        <div className="text-base leading-relaxed text-justify">
          <p>
            <Code>Développeur Full Stack</Code> freelance, je crée des solutions
            web modernes, performantes et adaptées à vos besoins. Spécialisé en{" "}
            <Code>React, Tailwind et Next.js</Code>, je vous accompagne de
            l’idée à la mise en ligne, en concevant des{" "}
            <Code>interfaces intuitives et évolutives</Code>. Passionné par les
            nouvelles technologies, je mets mon expertise au service de vos
            projets pour vous aider à <Code>atteindre vos objectifs</Code>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={() => router.push("/about")}>
            En savoir plus sur moi !
          </Button>
        </div>

        <div className="flex gap-4 mt-2">
          <Link
            href="https://github.com/TuhitsWeb987"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <Github />
          </Link>
          <Link
            href="https://www.instagram.com/tuhiti_falchetto/"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <Instagram />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tuhiti-falchetto-692716360/"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://calendly.com/tuhiti-falchetto-web/30min"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <Calendar />
          </Link>
        </div>
      </div>

      {/* Photo à droite */}
      <div className="flex-shrink-0">
        <Image
          src={PhotoTuhiti}
          alt="Photo de Tuhiti"
          className="rounded-full w-40 md:w-60 lg:w-72 aspect-square object-cover border-4 border-accent"
          priority
        />
      </div>
    </Section>
  );
};
