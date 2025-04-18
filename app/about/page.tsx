import React from "react";
import { Section } from "../components/Section";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import PhotoTuhiti from "@/public/photo portfolio.jpg";
import {
  BookOpen,
  Briefcase,
  Code2,
  Globe2,
  GraduationCap,
  Heart,
  History,
  Laptop,
  Library,
  Star,
  Trophy,
} from "lucide-react";
import { FaGithub, FaReact, FaTools } from "react-icons/fa";
import {
  SiPostgresql,
  SiPrisma,
  SiReacthookform,
  SiReactquery,
  SiResend,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVitest,
  SiZod,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import LogoBetterAuth from "@/public/better-auth.png";
import Tools from "../my-tools/page";
import { BsTools } from "react-icons/bs";

export default function Page() {
  return (
    <Section className="mt-10 flex flex-col z-20 gap-5">
      <Card className="shadow-xl p-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src={PhotoTuhiti}
              alt="Photo Tuhiti portfolio"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Tuhiti Falchetto</h2>
            <p className="text-muted-foreground">
              Salut ! Je suis un développeur web full stack passionné par la
              création d'applications modernes, performantes et centrées sur
              l'utilisateur. Diplômé en informatique et développeur depuis 2020,
              j'ai eu l'opportunité de travailler sur des projets variés mêlant
              frontend, backend, bases de données, authentification sécurisée et
              UX design.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-primary" />
                <span>Développeur Full Stack</span>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-primary" />
                <span>+3 ans d'expérience</span>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>Expert React & Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mt-3 p-8 shadow-xl">
        <h3 className="text-2xl font-bold flex gap-2">
          <FaTools className="text-primary" /> Compétences Techniques
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Laptop className="w-5 h-5 text-primary" />
              <h4 className="font-semibold">Frontend</h4>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <FaReact /> React.js
              </li>
              <li className="flex items-center gap-2">
                <TbBrandNextjs /> Next.js
              </li>
              <li className="flex items-center gap-2">
                <SiTypescript /> TypeScript
              </li>
              <li className="flex items-center gap-2">
                <SiTailwindcss /> Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <SiReactquery /> TanStack Query/React Query
              </li>
              <li className="flex items-center gap-2">
                <SiReacthookform /> React Hook Form
              </li>
              <li className="flex items-center gap-2">
                <SiZod /> Zod
              </li>
            </ul>
          </div>

          <div className="space-y-4 ">
            <div className="flex items-center gap-3">
              <Globe2 className="w-5 h-5 text-primary" />
              <h4 className="font-semibold">Backend</h4>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <TbBrandNextjs /> Next.js
              </li>
              <li className="flex items-center gap-2">
                <SiPrisma /> Prisma ORM
              </li>
              <li className="flex items-center gap-2">
                <SiSupabase /> Supabase
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src={LogoBetterAuth}
                  alt="Better Auth Logo"
                  className="w-5 h-5"
                />{" "}
                Better Auth
              </li>
              <li className="flex items-center gap-2">
                <SiResend /> Resend
              </li>
              <li className="flex items-center gap-2">
                <SiPostgresql /> PostgreSQL
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-primary" />
              <h4 className="font-semibold">Autres...</h4>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <FaGithub />
                GitHub
              </li>
              <li className="flex items-center gap-2">
                <SiVercel />
                Vercel
              </li>
              <li className="flex items-center gap-2">
                <SiVitest />
                Vitest
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8 backdrop-blur-sm bg-card/80 border-none shadow-2xl">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="text-primary" /> Expérience
          </h3>
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="font-semibold">
                Développeur junior - Digital Techno.net
              </h4>
              <p className="text-muted-foreground">Papeete • 2020 - 2025</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Conception, développement et amélioration de modules et
                  fonctionnalités Odoo
                </li>
                <li>Développement front + back</li>
                <li>Support client & gestion de projet</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Développement d'application web</h4>
              <p className="text-muted-foreground">Pappete • 2020</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Développement d'un jeu web (Puissance 4)</li>
                <li>Conception et implémentation d'APIs REST</li>
                <li>Technologies : JavaScript, AJAX, PHP, SQL</li>
                <li>Projet intégré à leur plateforme</li>
              </ul>
            </div>
          </div>
        </Card>
        <Card className="p-8 backdrop-blur-sm bg-card/80 border-none shadow-2xl">
          <h3 className="text-2xl font-bold flex gap-2 items-center">
            <Library className="text-primary" /> Formation
          </h3>
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="font-semibold">Licence informatique</h4>
              <p className="text-muted-foreground">
                Université de la polynésie française • 2017 - 2020
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Formation généraliste en développement logiciel,
                  algorithmique, base de données, réseaux, systèmes et web.
                  Cette formation m’a permis d’acquérir de solides bases en
                  programmation et en conception d'applications.
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Formation continue</h4>
              <p className="text-muted-foreground">
                Autodidacte • 2022-présent
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Approfondissement de la stack Next.js / React / Tailwind CSS /
                  Prisma / Supabase. Réalisation de projets full stack avec API
                  REST, base de données, authentification et interfaces
                  dynamiques. Utilisation d'outils modernes : Zustand, TanStack
                  Query, React Hook Form, Zod, Resend, React Email. Pratique du
                  clean code, architecture MVC, validation, sécurité, tests avec
                  Vitest / React Testing Library. Déploiement via Vercel,
                  gestion de version avec GitHub, veille techno régulière.
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8 backdrop-blur-sm bg-card/80 border-none shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Réalisations personnelles</h3>
          </div>
          <ul className="space-y-6 text-muted-foreground">
            <li className="space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Star className="w-4 h-4 text-primary" />
                <span className="font-bold">
                  Application de location de voitures
                </span>
              </div>
              <p className="pl-6">
                Application full stack type Getaround avec espace utilisateur,
                gestion des réservations et dashboard admin. (Next.js, Prisma,
                PostgreSQL, Supabase, React Hook Form, Zod, Tailwind CSS)
              </p>
            </li>
            <li className="space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Star className="w-4 h-4 text-primary" />
                <span className="font-bold">Polynesian Surfline</span>
              </div>
              <p className="pl-6">
                Plateforme communautaire pour surfeurs en Polynésie avec carte
                interactive, météo, messagerie et marketplace. (Next.js,
                Tailwind CSS, Supabase, Prisma, BetterAuth)
              </p>
            </li>
            <li className="space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Star className="w-4 h-4 text-primary" />
                <span className="font-bold">Gestionnaire de tâches</span>
              </div>
              <p className="pl-6">
                Application MVC complète avec CRUD, authentification JWT,
                filtres, tri, et gestion d’état. (Django, DRF, React,
                PostgreSQL, Supabase, JWT)
              </p>
            </li>
          </ul>
        </Card>

        <Card className="p-8 backdrop-blur-sm bg-card/80 border-none shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Centres d'intérêt</h3>
          </div>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>
                <b>Surf 🏄‍♂️</b> – Pratique régulière en Polynésie, passion pour
                l’océan et la nature
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>
                <b>Basketball 🏀</b> – Entraînements en club, esprit d’équipe et
                compétition
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>
                <b>Création de projets web 💻</b> – Conception d’apps utiles
                autour de mes passions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>
                <b>Montage vidéo & contenus courts 🎬</b> – Création de vidéos
                tech pour les réseaux (Instagram, TikTok, YouTube Shorts)
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
