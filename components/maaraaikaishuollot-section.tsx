import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MaaraaikaishuollotSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <Image
        src="/frankie-cordoba-Ivni1dHTsFs-unsplash.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-left md:object-center"
      />
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="container mx-auto px-4 relative z-10">
        <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Palvelua nopeasti ja vaivattomasti</span>
        <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-12 uppercase tracking-tight max-w-3xl">
          Monipuolista erikoisosaamista ja modernia autohuoltoa saman katon alta.
        </h3>
        <div className="grid md:grid-cols-3 gap-8 border-t border-white/15 pt-10">
          <p className="text-white/80 leading-relaxed">
            Vaasan Varikko Oy haluaa tehdä korjaamokäynnistäsi sujuvaa ja vaivatonta. Viikkokausien jonottaminen on kohtuutonta – auto pitää saada nopeasti takaisin liikenteeseen. Saat meiltä ajan useimmiten muutaman päivän varoitusajalla, joskus jopa samalle päivälle.
          </p>
          <p className="text-white/80 leading-relaxed">
            Auton huolto- ja korjaustöiden lisäksi teemme kattavat sähkövianhaut ja sähköasennukset ammattitaidolla. Nykyaikaisen diagnoosilaitteiston avulla löydämme viat nopeasti, automerkistä riippumatta.
          </p>
          <p className="text-white/80 leading-relaxed">
            Olemme vahvasti verkostoituneet alan varaosatoimittajiin ja alihankkijoihin. Kauttamme saat varaosan kuin varaosan mahdollisimman edulliseen hintaan. Kaikki asiakkaat ja automerkit ovat meillä tervetulleita!
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 z-10">
        <Link href="/">
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-black text-xs tracking-widest uppercase px-6 py-2">
            Lue lisää meistä
            <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
