import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import ReactLogo from "@/public/react_logo.png";
import NextJsLogo from "@/public/nextjs_logo.png";
import TailwindLogo from "@/public/tailwind_logo.png";

export const SkillsSection = () => {
  const skills = [
    {
      title: "React",
      icon: ReactLogo,
      description:
        "Développement d’applications web modernes avec React, utilisation des Hooks (useState, useEffect), gestion d’état local et global, intégration d’APIs et création de composants réutilisables et maintenables.",
      features: ["Hooks", "Gestion d’état", "Composants", "Frontend"],
    },
    {
      title: "Next.js",
      icon: NextJsLogo,
      description:
        "Création d’applications full stack avec Next.js, mise en place de routes API, rendu côté serveur (SSR), gestion de l’authentification avec BetterAuth, et connexion à une base de données via Prisma/Supabase.",
      features: ["Server-Side Rendering", "Full Stack", "API Routes", "Prisma"],
    },
    {
      title: "Tailwind CSS",
      icon: TailwindLogo,
      description:
        "Conception d’interfaces responsives et modernes avec Tailwind CSS, utilisation de classes utilitaires pour un design rapide et cohérent, approche mobile-first, et intégration fluide dans des projets React/Next.js.",
      features: [
        "Responsive",
        "Utility-first",
        "Mobile-first",
        "UI/UX",
      ],
    },
  ];

  return (
    <Section className="mt-20 flex flex-col z-20 gap-8 px-4 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-10 h-10 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold text-accent-foreground">
            Mes Compétences
          </h1>
        </div>
        <p className="text-muted-foreground text-base max-w-2xl">
          J’aime travailler avec ces technologies pour concevoir des projets
          clairs, efficaces et modernes.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-background dark:hover:bg-muted cursor-default"
          >
            <div className="flex flex-col items-center text-center gap-5">
              <Image
                src={skill.icon}
                alt={skill.title}
                className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent">
                {skill.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {skill.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
