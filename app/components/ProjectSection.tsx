"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "./Section";
import {
  Briefcase,
  CalendarIcon,
  Contact2,
  ExternalLink,
  FolderGit2,
  Github,
  Instagram,
  Linkedin,
  MailIcon,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import NetflixImage from "@/public/netflix.png";
import { useRouter } from "next/navigation";

export const ProjectSection = () => {
  const router = useRouter();
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Une plateforme de commerce électronique moderne construite avec Next.js",
      image: NetflixImage,
      tech: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "Portfolio Dashboard",
      description: "Dashboard analytics avec visualisation de données",
      image: NetflixImage,
      tech: ["React", "D3.js", "Firebase"],
    },
    {
      title: "Social Media App",
      description: "Application sociale avec fonctionnalités en temps réel",
      image: NetflixImage,
      tech: ["Vue.js", "Node.js", "MongoDB"],
    },
  ];

  const jobs = [
    {
      role: "Développeur web",
      company: "Digital Techno.Net",
      period: "2020 - 2025",
      description:
        "Conception,développement et amélioration de modules et fonctionnalités sur les bases Odoo des clients afin d'adapter la solution à leurs besoins spécifiques.",
    },
    {
      role: "Développeur d'application web",
      company: "Vodafone Polynésie",
      period: "Avril 2020 - Mai 2020",
      description:
        "Jeu web intégré à la plateforme Vodafone, avec personnalisation complète selon les besoins du client. Deux modes multijoueurs développés pour enrichir l’expérience utilisateur, accompagnés d’une base de données optimisée pour des performances accrues.",
    },
  ];
  return (
    <Section className="mt-20 flex flex-col justify-center z-20 gap-6">
      {/* Colonne Projets */}
      <Card className="w-full shadow-xl">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-8 h-8 text-primary" />
              <h1 className="text-2xl text-accent-foreground">Mes Projets</h1>
            </div>
          </CardTitle>
          <CardDescription>Un aperçu de ce que je code...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <div
                className="group p-4 gap-2 border dark:border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer dark:hover:bg-background"
                key={index}
                onClick={() => router.push("")}
              >
                <div className="flex gap-4 items-center">
                  <Image
                    src={NetflixImage}
                    alt={project.title}
                    className="w-24 h-24 max-sm:w-12 max-sm:h-12 object-cover rounded-md"
                  />
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className="group-hover:underline text-2xl font-semibold text-accent-foreground">
                        {project.title}
                      </h1>
                      <ExternalLink />
                    </div>
                    <p>{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 bg-secondary rounded-full text-sm text-accent dark:text-accent-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Colonne Jobs + Contact */}
      <div className="flex lg:flex-row flex-col gap-6">
        {/* Derniers Jobs */}
        <Card className="shadow-xl w-full">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-2">
                <Briefcase className="w-8 h-8 text-primary" />
                <h1 className="text-2xl text-accent-foreground">
                  Mes derniers jobs
                </h1>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-primary/20"
                >
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <p className="text-sm text-primary/80 font-medium">
                    {job.company} • {job.period}
                  </p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-2">
                <MailIcon className="w-8 h-8 text-primary" />
                <h1 className="text-2xl text-accent-foreground">
                  Contactez-moi
                </h1>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {/* Infos */}
              <div className="flex flex-col p-2 gap-2 border rounded-md">
                <h3 className="text-xl font-semibold text-accent-foreground">
                  Informations
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="p-2 rounded-md flex gap-2 items-center hover:bg-primary/10 transition">
                    <Contact2 />
                    <p className="font-medium wrap-anywhere">
                      tuhiti.falchetto.web@gmail.com
                    </p>
                  </div>
                  <div className="p-2 rounded-md flex gap-2 items-center hover:bg-primary/10 transition">
                    <Phone />
                    <p className="font-medium">+689 89 52 51 14</p>
                  </div>
                  <div className="p-2 rounded-md flex gap-2 items-center hover:bg-primary/10 transition">
                    <MapPin />
                    <p className="font-medium">
                      Faa'a, Tahiti, Polynésie française
                    </p>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="flex flex-col p-2 border rounded-md gap-2">
                <h3 className="text-xl font-semibold text-accent-foreground">
                  Réseaux sociaux
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/TuhitsWeb987"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">Github</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tuhiti-falchetto-692716360"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/tuhiti_falchetto"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://calendly.com/tuhiti-falchetto-web/30min"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition"
                  >
                    <CalendarIcon className="w-5 h-5" />
                    <span className="font-medium">Calendly</span>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
