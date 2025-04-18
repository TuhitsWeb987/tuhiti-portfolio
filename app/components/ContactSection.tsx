import PhotoTuhiti from "@/public/photo portfolio.jpg";
import LinkedInLogo from "@/public/LinkedInLogo.png";
import GithubLogo from "@/public/GithubLogo.png";
import InstagramLogo from "@/public/instagramLogo.png";
import { Section } from "./Section";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import CalendlyEmbed from "./CalendlyEmbed";

export const ContactSection = () => {
  const contacts = [
    {
      title: "GitHub",
      name: "@TuhitsWeb987",
      image: PhotoTuhiti,
      mediumImage: GithubLogo,
      color: "hover:bg-[#2b3137]",
      link: "https://github.com/TuhitsWeb987",
    },
    {
      title: "LinkedIn",
      name: "Tuhiti Falchetto",
      image: PhotoTuhiti,
      mediumImage: LinkedInLogo,
      color: "hover:bg-[#0077b5]",
      link: "https://www.linkedin.com/in/tuhiti-falchetto-692716360",
    },
    {
      title: "Instagram",
      name: "@tuhiti_falchetto",
      image: PhotoTuhiti,
      mediumImage: InstagramLogo,
      color: "hover:bg-[#e4405f]",
      link: "https://www.instagram.com/tuhiti_falchetto",
    },
  ];

  return (
    <Section className="mt-20 flex flex-col gap-10 px-4 md:px-8">
      {/* Titre section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <MailIcon className="w-10 h-10 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold text-accent-foreground">
            Me contacter
          </h1>
        </div>
        <p className="text-muted-foreground text-base max-w-xl">
          Je serais ravi d’échanger avec vous sur vos besoins en développement
          web.
        </p>
      </div>

      {/* Réseaux sociaux */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <Link
            href={contact.link}
            target="_blank"
            key={index}
            className="transition-transform hover:scale-[1.02]"
          >
            <Card
              className={`p-5 rounded-2xl shadow-lg backdrop-blur-sm bg-card/80 border border-border group transition-colors duration-500 ${contact.color} hover:text-white`}
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 flex-shrink-0 ">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={contact.image}
                      alt={contact.name}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-white/90 shadow-lg">
                    <Image
                      src={contact.mediumImage}
                      alt={contact.title}
                      className="w-3.5 h-3.5 text-gray-800"
                    />
                  </div>
                </div>

                {/* Texte contact */}
                <div>
                  <h3 className="font-semibold text-lg">{contact.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/80">
                    {contact.name}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Calendly */}
      <Card className="p-8 mt-8 shadow-xl rounded-2xl bg-background/90">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/30 bg-clip-text text-transparent">
            Prenez rendez-vous
          </h2>
          <p className="text-muted-foreground text-sm">
            Choisissez un créneau qui vous convient pour discuter de votre
            projet
          </p>
        </div>
        <CalendlyEmbed />
      </Card>
    </Section>
  );
};
