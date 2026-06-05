import Image from "next/image";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import {
  Reveal,
  FadeIn,
  Stagger,
  StaggerItem,
  ZoomBg,
} from "@/app/components/Motion";

const CONTACT_EMAIL = "xavier@placeholder.com";

const HERO_IMG = "/images/lifestyle/infinity-pool-sunset.jpg"; // cinematic sunset
const CONTACT_IMG = "/images/property-or-experience-2.png"; // Conrad wedding, sunset

// Perfect For index -> background image
const PERFECT_FOR_IMAGES: string[] = [
  "/images/lifestyle/pool-cabana.jpg", // Weddings
  "/images/lifestyle/resort-entrance.jpg", // Incentive Groups
  "/images/lifestyle/beach-running.jpg", // Leisure Groups
  "/images/lifestyle/family-pool.jpg", // Social Celebrations
  "/images/lifestyle/resort-aerial.jpg", // Seasonal Buyouts
];

// Concept index -> image
const CONCEPT_IMAGES: string[] = [
  "/images/property-or-experience.png", // BBQ Under the Stars
  "/images/dia-de-muertos.png", // Día de los Muertos
  "/images/dinner-rainforest.png", // Dinner in the Rainforest
  "/images/lifestyle/latin-dancing.jpg", // Latin Dancing Lessons
  "/images/seafood-festival.png", // Seafood Festival
  "/images/caribbean-carnival.png", // Caribbean Carnival
  "/images/acoustic-vibes.png", // Acoustic Vibes
];

const PROPERTY_IMAGES: string[] = [
  "/images/lifestyle/resort-aerial.jpg", // Waldorf Astoria — resort aerial
  "/images/conrad-tulum.png", // Conrad Tulum
];

function Eyebrow({
  children,
  tone = "navy",
}: {
  children: React.ReactNode;
  tone?: "navy" | "light";
}) {
  return (
    <span
      className={`block text-xs font-semibold uppercase tracking-[0.28em] ${
        tone === "light" ? "text-white/80" : "text-terracotta"
      }`}
    >
      {children}
    </span>
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    t.mail.subject
  )}&body=${encodeURIComponent(t.mail.body)}`;

  return (
    <div className="flex flex-1 flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-hairline bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-10">
          <Image
            src="/images/logos/hilton-mark.png"
            alt="Hilton — For the Stay"
            width={189}
            height={136}
            priority
            className="h-9 w-auto shrink-0 sm:h-11"
          />
          <div className="flex items-center gap-4 sm:gap-5">
            <LanguageSwitcher current={lang} variant="dark" />
            <a
              href="#contact"
              className="hidden rounded-full bg-navy px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy-deep sm:inline-block sm:text-xs"
            >
              {t.nav.requestProposal}
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[82vh] items-center overflow-hidden">
          <ZoomBg>
            <Image
              src={HERO_IMG}
              alt=""
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
          </ZoomBg>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/45 to-navy-deep/80" />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28 sm:px-10">
            <div className="max-w-3xl">
              <FadeIn delay={0} y={20} duration={1}>
                <Eyebrow tone="light">{t.hero.eyebrow}</Eyebrow>
              </FadeIn>
              <FadeIn delay={0.1} duration={1.2}>
                <h1 className="mt-6 font-serif text-[2.75rem] font-medium leading-[1.05] text-white sm:text-6xl md:text-7xl">
                  {t.hero.h1}
                </h1>
              </FadeIn>
              <FadeIn delay={0.3} duration={1.1}>
                <p className="mt-6 font-serif text-xl italic text-white/90 sm:text-2xl">
                  {t.hero.subtitle}
                </p>
              </FadeIn>
              <FadeIn delay={0.45} duration={1.1}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                  {t.hero.intro}
                </p>
              </FadeIn>
              <FadeIn delay={0.6} duration={1}>
                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-navy transition-colors hover:bg-background"
                >
                  {t.hero.cta}
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* For the Stay banner */}
        <Reveal className="bg-navy py-10 sm:py-12">
          <Image
            src="/images/logos/for-the-stay-script.png"
            alt="For the Stay"
            width={219}
            height={81}
            className="mx-auto h-16 w-auto sm:h-20"
          />
        </Reveal>

        {/* The Offer: 5% Credit */}
        <Reveal>
          <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
            <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-16">
              <div className="md:col-span-5">
                <Eyebrow>{t.offer.eyebrow}</Eyebrow>
                <h2 className="mt-5 font-serif text-5xl font-medium leading-none text-navy sm:text-6xl">
                  {t.offer.title}
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                  {t.offer.lead}
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  {t.offer.body}
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Included Group Benefits */}
        <section className="border-y border-hairline bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
            <Reveal className="max-w-2xl">
              <Eyebrow>{t.benefits.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-navy sm:text-5xl">
                {t.benefits.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {t.benefits.subtitle}
              </p>
            </Reveal>
            <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {t.benefits.items.map((b, i) => (
                <StaggerItem
                  key={b.title}
                  className="flex h-full flex-col bg-white p-8 transition-colors hover:bg-background"
                >
                  <span className="font-serif text-2xl text-terracotta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-medium text-navy">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {b.body}
                  </p>
                </StaggerItem>
              ))}
              <StaggerItem className="hidden h-full flex-col justify-end bg-navy p-8 text-white lg:flex">
                <p className="font-serif text-2xl italic leading-snug">
                  {t.benefits.tagline}
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Perfect For */}
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <Reveal className="text-center">
            <Eyebrow>{t.perfectFor.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium text-navy sm:text-5xl">
              {t.perfectFor.title}
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-5">
            {t.perfectFor.items.map((item, i) => (
              <StaggerItem
                key={item}
                className="group relative flex min-h-44 items-end overflow-hidden rounded-2xl"
              >
                <Image
                  src={PERFECT_FOR_IMAGES[i]}
                  alt={item}
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 20vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/30 to-navy-deep/10 transition-all duration-500 group-hover:from-navy-deep/95" />
                <span className="relative z-10 block w-full p-5 font-serif text-lg leading-tight text-white sm:text-xl">
                  {item}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Featured Experience Concepts */}
        <section className="border-y border-hairline bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
            <Reveal className="max-w-2xl">
              <Eyebrow>{t.concepts.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-navy sm:text-5xl">
                {t.concepts.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {t.concepts.subtitle}
              </p>
            </Reveal>
            <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.concepts.items.map((c, i) => (
                <StaggerItem
                  key={c}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={CONCEPT_IMAGES[i] as string}
                    alt={c}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-all duration-500 group-hover:from-black/90" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="text-xs uppercase tracking-[0.22em] text-white/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-medium leading-tight text-white sm:text-3xl">
                      {c}
                    </h3>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Why Planners Love It */}
        <Reveal>
          <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
            <div className="max-w-2xl">
              <Eyebrow>{t.why.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-navy sm:text-5xl">
                {t.why.title}
              </h2>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-hairline bg-white p-9">
                <h3 className="font-serif text-2xl font-medium text-navy">
                  {t.why.plannerTitle}
                </h3>
                <ul className="mt-6 space-y-4">
                  {t.why.planner.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-base text-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-terracotta" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-navy p-9 text-white">
                <h3 className="font-serif text-2xl font-medium">
                  {t.why.clientTitle}
                </h3>
                <ul className="mt-6 space-y-4">
                  {t.why.client.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-base">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Closing band */}
        <section className="relative flex min-h-[60vh] items-center overflow-hidden">
          <Image
            src="/images/lifestyle/zemi-poolside.png"
            alt=""
            fill
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy-deep/55" />
          <Reveal className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 text-center sm:px-10">
            <p className="mx-auto max-w-3xl font-serif text-4xl font-medium leading-tight text-white sm:text-6xl">
              {t.footer.tagline}
            </p>
          </Reveal>
        </section>

        {/* Program Details */}
        <section className="border-y border-hairline bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
            <Reveal className="max-w-2xl">
              <Eyebrow>{t.program.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-medium text-navy sm:text-5xl">
                {t.program.title}
              </h2>
            </Reveal>
            <Reveal>
              <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
                {t.program.items.map((d) => (
                  <div key={d.label} className="bg-white p-8">
                    <dt className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                      {d.label}
                    </dt>
                    <dd className="mt-4 font-serif text-4xl font-medium text-navy">
                      {d.value}
                    </dd>
                    <dd className="mt-1 text-sm text-muted">{d.note}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Properties */}
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <Reveal className="max-w-2xl">
            <Eyebrow>{t.properties.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium text-navy sm:text-5xl">
              {t.properties.title}
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-8 md:grid-cols-2">
            {t.properties.items.map((p, i) => (
              <StaggerItem
                key={p.name}
                className="group overflow-hidden rounded-2xl border border-hairline bg-white"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={PROPERTY_IMAGES[i]}
                    alt={p.name}
                    fill
                    quality={90}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
                    {p.location}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-medium text-navy">
                    {p.name}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden">
          <Image
            src={CONTACT_IMG}
            alt=""
            fill
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy-deep/85" />
          <Reveal className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center text-white sm:px-10 sm:py-32">
            <Eyebrow tone="light">{t.contact.eyebrow}</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-medium leading-tight sm:text-6xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85">
              {t.contact.body}
            </p>
            <a
              href={mailto}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-navy transition-colors hover:bg-background"
            >
              {t.contact.cta}
            </a>
            <p className="mt-4 text-sm text-white/70">{CONTACT_EMAIL}</p>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy-deep text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Image
                src="/images/logos/hilton-mark-white.png"
                alt="Hilton — For the Stay"
                width={189}
                height={136}
                className="h-14 w-auto"
              />
              <p className="mt-4 font-serif text-lg italic text-white/70">
                {t.footer.tagline}
              </p>
            </div>
            <a
              href={mailto}
              className="text-sm uppercase tracking-[0.18em] text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="mt-12 border-t border-white/15 pt-6 text-xs leading-relaxed text-white/50">
            <p>{t.footer.disclaimer}</p>
            <p className="mt-2">{t.footer.photoCredit}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
