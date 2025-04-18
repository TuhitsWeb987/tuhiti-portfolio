"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/tuhiti-falchetto-web/30min?background_color=0f111a&text_color=9094a2&primary_color=80cbc4"
      style={{ minWidth: "220px", height: "700px" }}
    />
  );

};