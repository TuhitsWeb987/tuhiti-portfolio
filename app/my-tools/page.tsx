"use client";
import { Card } from "@/components/ui/card";
import {
  Laptop,
  Headphones,
  Code2,
  GitBranch,
  Database,
  Globe,
  Brain,
  Palette,
  Mail,
  Rss,
  Monitor,
  Armchair as Chair,
  Terminal,
  FileCode,
  Trello,
  Bot,
  Rocket,
  Figma,
  MessageSquare,
  Youtube,
  Twitter,
  BookOpen,
  Chrome,
} from "lucide-react";
import Link from "next/link";
import { Section } from "../components/Section";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiPostman, SiSupabase, SiVercel } from "react-icons/si";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { MdWorkspaces } from "react-icons/md";

interface Tool {
  name: string;
  description: string;
  icon: React.ElementType;
  url?: string;
}

interface ToolSection {
  title: string;
  icon: React.ElementType;
  tools: Tool[];
}

export default function Tools() {
  const sections: ToolSection[] = [
    {
      title: "Matériel",
      icon: Laptop,
      tools: [
        {
          name: 'AORUS 16X ASG-63FRC65SH',
          description:
            "Mon outil de développement principal",
          icon: Laptop,
          url: "https://www.ldlc.com/fiche/PB00591624.html?offerId=AR202402020004"
        },
        {
          name: 'Écran externe Philips Moniteur"',
          description:
            "Un second écran pour améliorer ma productivité et faciliter le multitâche",
          icon: Monitor,
          url: "https://www.amazon.fr/Philips-Moniteur-Full-273V7QDSB-00/dp/B071XP29J4"
        },
        {
          name: "Casque JBL Tune 670NC",
          description:
            "Pour la concentration et l'immersion totale dans le code",
          icon: Headphones,
          url: "https://fr.jbl.com/TUNE670NC.html?dwvar_TUNE670NC_color=Blue-EMEA-Current&cgid=headphones"
        },
      ],
    },
    {
      title: "Développement",
      icon: Code2,
      tools: [
        {
          name: "Visual Studio Code",
          description:
            "Mon éditeur de code principal",
          icon: BiLogoVisualStudio,
          url: "https://code.visualstudio.com",
        },
        {
          name: "Git & GitHub",
          description: "Pour le versioning de code et la collaboration",
          icon: FaGithub,
          url: "https://github.com",
        },
        {
          name: "Postman",
          description: "Pour tester les requêtes d'API",
          icon: SiPostman,
          url: "https://www.postman.com",
        },
      ],
    },
    {
      title: "Déploiement & Outils Web",
      icon: Globe,
      tools: [
        {
          name: "Vercel",
          description: "Déploiement et hébergement de mes projets Next.js",
          icon: SiVercel,
          url: "https://vercel.com",
        },
        {
          name: "Supabase",
          description:
            "Backend as a Service pour l'authentification, la base de données et le stockage",
          icon: SiSupabase,
          url: "https://supabase.com",
        },
      ],
    },
    {
      title: "Organisation & Productivité",
      icon: Brain,
      tools: [
        {
          name: "Google Workspace",
          description:
            "Organisation de projets, documentation et prise de notes",
          icon: FaGoogle,
          url: "https://workspace.google.com",
        },
        {
          name: "Trello",
          description: "Gestion de projets en mode Kanban",
          icon: Trello,
          url: "https://trello.com",
        },
        {
          name: "ChatGPT",
          description:
            "Assistant IA pour le débogage et l'exploration de concepts",
          icon: Bot,
          url: "https://chat.openai.com",
        },
      ],
    },
    {
      title: "Design & Création",
      icon: Palette,
      tools: [
        {
          name: "Figma",
          description: "Design d'interfaces et prototypage",
          icon: Figma,
          url: "https://www.figma.com",
        },
      ],
    },
    {
      title: "Veille & Inspiration",
      icon: Rss,
      tools: [
        {
          name: "YouTube Tech",
          description: "Chaînes préférées : MikeCodeur, Melvynx, Développeur Libre, etc",
          icon: Youtube,
          url: "https://youtube.com",
        },
      ],
    },
  ];

  return (
      <Section className="mt-10 mx-auto space-y-16">
        {/* En-tête */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Mon Setup
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Les outils que j'utilise au quotidien pour créer des applications
            web modernes
          </p>
        </div>

        {/* Sections d'outils */}
        <div className="grid gap-8">
          {sections.map((section, index) => (
            <section key={index} className="space-y-6">
              <div className="flex items-center gap-3">
                <section.icon className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.tools.map((tool, toolIndex) => (
                  <Card
                    key={toolIndex}
                    className="p-6 backdrop-blur-sm bg-card/80 border-none shadow-2xl hover:shadow-xl transition-all duration-500"
                  >
                    {tool.url ? (
                      <Link
                        href={tool.url}
                        target="_blank"
                        className="flex flex-col h-full group"
                      >
                        <ToolContent tool={tool} />
                      </Link>
                    ) : (
                      <ToolContent tool={tool} />
                    )}
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>
  );
}

function ToolContent({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  return (
    <div className="space-y-4">
      <div className="p-3 bg-primary/10 rounded-full w-fit">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {tool.name}
        </h3>
        <p className="text-muted-foreground">{tool.description}</p>
      </div>
    </div>
  );
}
