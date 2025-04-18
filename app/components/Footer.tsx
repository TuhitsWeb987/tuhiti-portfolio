"use client";

import { Github, Linkedin, Mail, MailsIcon, MapPin } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <Section className="mt-10 border-t bg-card/50 backdrop-blur-sm mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg f ont-semibold">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MailsIcon className="w-4 h-4" />
                tuhiti.falchetto.web@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Faa'a, Tahiti, Polynésie française</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/my-tools"
                  className="hover:text-primary transition-colors"
                >
                  Outils
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Réseaux sociaux</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/TuhitsWeb987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tuhiti-falchetto-692716360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/tuhiti_falchetto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <FaInstagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
