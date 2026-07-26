"use client"

import { Button } from "@/components/ui/button"
import { Wrench, Car, LayoutGrid, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FocusAreas() {
  const areas = [
    {
      icon: Wrench,
      title: "Huollot",
      description: "Palvelemme ammattitaidolla kaikkia automerkkejä. Käytämme ainoastaan laadukkaita alkuperäis- tai vastaavia varaosia, jotka säilyttävät valmistajan takuun.",
      image: "/tim-meyer-lre9kVnX9Tg-unsplash.jpg",
      href: "/palvelut",
    },
    {
      icon: Car,
      title: "Korjaukset ja vianhaku",
      description: "Kattavat korjaukset, vianhaku ja sähkövikojen diagnosointi. Käytämme laadukkaita varaosia ja teemme työn tarkasti ja ammattitaidolla.",
      image: "/vtec.automoottori.avif",
      href: "/palvelut",
    },
    {
      icon: Wrench,
      title: "Rengastyöt ja rengashotelli",
      description: "Väännämme haastavimmatkin kumit paikoilleen naarmuja jättämättä. Myös kausivaihdot ja rengashotelli.",
      image: "/rengas.webp",
      href: "/palvelut",
    },
    {
      icon: LayoutGrid,
      title: "Kaikki palvelut",
      description: "Huollamme matkailuautoja, moottoripyöriä ja muitakin kulkuneuvoja. Katso kaikki palvelumme.",
      image: "/maantie.nmw.webp",
      href: "/palvelut",
    },
  ]

  return (
    <section className="pb-24 pt-0 bg-background">
      <div className="container mx-auto px-4">
<div className="grid md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group relative px-8 pt-8 pb-5 border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden min-h-[280px] flex flex-col justify-end"
            >
              <Image src={area.image} alt={area.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors duration-500"></div>
              <div className="relative z-10">
                <area.icon className="w-12 h-12 text-primary mb-8" strokeWidth={1.5} />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3 uppercase tracking-wide">{area.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">{area.description}</p>
                <div className="flex justify-end">
                  <Link href={area.href}>
                    <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-black text-xs tracking-widest uppercase px-6 py-2">
                      Lue lisää
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
