import { Wrench } from "lucide-react"

const muutPalvelut = [
  {
    name: "Määräaikaishuollot",
    description: "Teemme määräaikaishuoltoja autonvalmistajan ohjeiden mukaisesti, takuu säilyy.",
  },
  {
    name: "Diagnostiikkatyöt",
    description: "Vaativat vianetsinnät auton sähköjärjestelmästä diagnoosilaitteen avulla.",
  },
  {
    name: "Autosähkötyöt",
    description: "Auton yleiset sähkötyöt, joissa ei välttämättä tarvita diagnoosilaitetta.",
  },
  {
    name: "Öljynvaihto",
    description: "Auton moottorin öljynvaihto.",
  },
  {
    name: "Alustatyöt",
    description: "Alustan nivelten, kumihelojen ja muiden pyöräntuentaan liittyvien osien vaihto.",
  },
  {
    name: "Iskunvaimentimien vaihto",
    description: "Iskunvaimentimien vaihtaminen. Suositellaan vaihdettavaksi pareittain.",
  },
  {
    name: "Jakopään vaihtotyöt",
    description: "Jakopään vaihtotyöt autonvalmistajan ohjeilla ja erikoistyökaluilla.",
  },
  {
    name: "Jarrujen huolto ja korjaus",
    description: "Jarrujen puhdistukset sekä osien vaihto.",
  },
  {
    name: "Kytkimen huolto ja korjaus",
    description: "Kytkimien vaihto.",
  },
  {
    name: "Autolämpöasennukset sähkökäyttöiset",
    description: "Sähkökäyttöisten Defa tai Calix-moottorinlämmittimien asennus.",
  },
  {
    name: "Ilmastoinnin täyttöhuollot",
    description: "Auton ilmastointijärjestelmän täyttöhuolto. Meillä on tarvittavat viranomaisluvat ilmastointijärjestelmän huoltamiseen.",
  },
  {
    name: "Ilmastoinnin korjaukset",
    description: "Auton ilmastointijärjestelmän kaikki korjaukset.",
  },
  {
    name: "Hybridiautojen huollot",
    description: "Teemme myös hybridiautojen määräaikaishuollot ja korjaukset.",
  },
  {
    name: "Valojen suuntaus (halogeeni ja xenon)",
    description: "Halogeeni- ja xenonpolttimoilla varustettujen ajovalojen suuntaus.",
  },
  {
    name: "Valojen suuntaus (LED, Xenon ja halogeeni)",
    description: "LED, Xenon ja halogeenipolttimoilla varustettujen ajovalojen suuntaus.",
  },
  {
    name: "Pakoputkistojen vaihdot",
    description: "Pakoputkiston vaihto joko kokonaan tai osissa, vaihtelee automalleittain.",
  },
  {
    name: "ABS- ja ajonhallintajärjestelmien vianhaku ja korjaus",
    description: "Vianhaku ja korjaus ABS-jarrujärjestelmistä ja ajonvakautusjärjestelmästä.",
  },
  {
    name: "Automaattivaihteistojen öljynvaihtohuollot",
    description: "Automaattivaihteistojen öljynvaihdot valuttamalla.",
  },
  {
    name: "Moottorikorjaukset",
    description: "Meillä onnistuu myös moottoreiden vaativat koneistus- ja korjaustyöt.",
  },
  {
    name: "Opetuspolkimien asennukset",
    description:
      "Lain mukaan kuljettajaopetusta annettaessa ajoneuvossa on oltava opetuspoljin. Asianmukaisesti asennettu ja toimiva opetuspoljin on vaatimuksena ajokokeeseen pääsemiseksi. Ajokokeen vastaanottaja testaa polkimen toimivuuden aina ennen ajokoetta. Polkimen toimivuutta voidaan testata myös ajoneuvon määräaikaiskatsastuksen yhteydessä, lisäksi poliisi voi testata polkimen toimivuutta liikenteenvalvonnan yhteydessä.",
  },
  {
    name: "Renkaiden vaihto ja tasapainotus",
    description: "Meillä onnistuu myös renkaiden asennukset vanteille ja renkaiden tasapainotukset.",
  },
  {
    name: "Rengasmyynti",
    description:
      "Uudet renkaat kannattaa hankkia, kun vanhojen ikä on noin 5-10 vuotta tai urasyvyys on noin 4 millimetriä, meiltä saat myös renkaat ja rengastyöt.",
  },
  {
    name: "Pikahuolto",
    description: "Auton pikahuolto, kuten polttimon vaihto tai öljynvaihto, aikaa varaamatta.",
  },
  {
    name: "Pakettiautojen huollot",
    description: "Meillä on sopivat tilat ja laitteet myös isojen pakettiautojen ja matkailuautojen huoltamiseen.",
  },
  {
    name: "Matkailuautojen huollot",
    description: "Matkailuautojen huollot. Niiden iso koko ei aiheuta ongelmia huoltoon.",
  },
  {
    name: "Moottoripyörien huollot",
    description: "Meillä onnistuu myös moottoripyörien huollot valmistajien ohjeiden mukaisesti.",
  },
  {
    name: "Mopoautojen huollot",
    description: "Mopoautojen huollot.",
  },
  {
    name: "Mopoautojen ja mönkijöiden huollot",
    description: "Meillä onnistuu myös mopoautojen ja mönkijöiden huollot.",
  },
  {
    name: "Mopojen huollot",
    description: "Mopojen huollot.",
  },
  {
    name: "Katsastuttamispalvelut",
    description: "Katsastuspalvelut joko korjaamon tiloissa tai käytämme katsastuksessa puolestasi.",
  },
  {
    name: "Laskumahdollisuus",
    description:
      "Laskulla vähintään 30 vuorokautta korotonta maksuaikaa, mahdollisuus maksaa myös huolto- ja korjauslasku erissä.",
  },
  {
    name: "Moottorin sisähuuhtelut",
    description: "Moottorin kemialliset huuhtelut.",
  },
]

export default function PalvelutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-28 border-b border-border/50">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/0 via-primary to-primary/0" />
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 border border-primary/30 px-4 py-2 mb-6">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Palvelut</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground tracking-tight uppercase">
            Meiltä saat saman katon alta
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed font-light">
            Vaasan Varikko Oy:n valikoimasta löytyy laaja kirjo autokorjaamon palveluita henkilöautoista
            pakettiautoihin, matkailuautoihin ja kaksipyöräisiin — kaikki saman katon alta.
          </p>
        </div>
      </section>

      {/* Muut palvelut */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wide mb-10">
            Muut palvelut
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {muutPalvelut.map((service) => (
              <div key={service.name} className="bg-card border border-border p-6 hover:border-primary/50 transition-colors duration-300">
                <h3 className="font-display text-sm font-semibold text-foreground mb-2 tracking-wide uppercase">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
