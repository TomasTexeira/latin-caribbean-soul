import Image from "next/image";

const CONTACT_EMAIL = "xavier@placeholder.com";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Request a proposal — Latin & Caribbean Soul"
)}&body=${encodeURIComponent(
  "Hi,\n\nI'd like to request a proposal for the Latin & Caribbean Soul group offer.\n\nGroup type:\nProperty of interest:\nEstimated room nights:\nPreferred dates:\n\nThank you."
)}`;

const px = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const HERO_IMG = px(2631613, 2000);

const benefits = [
  {
    title: "Experience Credit",
    body: "A fixed credit redeemable on qualifying resort experiences, helping guests enjoy more of the destination.",
  },
  {
    title: "VIP Amenities",
    body: "One VIP welcome amenity for every 15 paid rooms.",
  },
  {
    title: "Complimentary Upgrades",
    body: "One confirmed room upgrade for every 10 paid rooms, subject to availability.",
  },
  {
    title: "Seamless Arrivals",
    body: "Dedicated group check-in or pre-arrival key preparation for a smoother guest experience.",
  },
  {
    title: "Experience Enhancements",
    body: "Choose one exclusive group benefit: a themed cocktail reception with hors d'oeuvres and house wine, or a late check-out day-use option for departure day.",
  },
];

const perfectFor = [
  "Weddings",
  "Incentive Groups",
  "Leisure Groups",
  "Social Celebrations",
  "Seasonal Buyouts",
];

const concepts = [
  "BBQ Under the Stars",
  "Día de los Muertos Celebration",
  "Dinner in the Rainforest",
  "Latin Dancing Lessons",
  "Seafood Festival",
  "Caribbean Carnival",
  "Acoustic Vibes",
];

const programDetails = [
  {
    label: "Minimum Room Commitment",
    value: "20 rooms",
    note: "on peak night",
  },
  {
    label: "Minimum Length of Stay",
    value: "3 nights",
    note: "to qualify for Experience Credit",
  },
  {
    label: "Eligible Rate Type",
    value: "BAR",
    note: "or Package Group Rate",
  },
  {
    label: "Complimentary Leader Benefit",
    value: "1 room",
    note: "per 25 paid rooms",
  },
];

const properties = [
  {
    name: "Waldorf Astoria Riviera Maya",
    location: "Riviera Maya, México",
    img: px(6875499, 1600),
  },
  {
    name: "Conrad Tulum Riviera Maya",
    location: "Tulum, México",
    img: px(6048627, 1600),
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-xs font-medium uppercase tracking-[0.28em] text-accent">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
          <span className="font-serif text-lg tracking-wide text-white drop-shadow">
            Resorts EP
          </span>
          <a
            href="#contact"
            className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-foreground"
          >
            Request a proposal
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[92vh] items-center overflow-hidden">
          <Image
            src={HERO_IMG}
            alt="Turquoise Caribbean shoreline at a Riviera Maya resort"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 sm:px-10">
            <div className="max-w-3xl">
              <Eyebrow>Resorts EP — CALA</Eyebrow>
              <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] text-white sm:text-6xl md:text-7xl">
                Where group travel becomes unforgettable
              </h1>
              <p className="mt-6 font-serif text-xl italic text-white/90 sm:text-2xl">
                Latin &amp; Caribbean Soul — Culture. Flavor. Celebration.
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Today&apos;s group planners are looking for more than room
                blocks and rates — they want memorable experiences, operational
                simplicity, and added value that helps them deliver exceptional
                programs.
              </p>
              <a
                href={MAILTO}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-soft"
              >
                Request a proposal
              </a>
            </div>
          </div>
        </section>

        {/* The Offer: 5% Credit */}
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-16">
            <div className="md:col-span-5">
              <Eyebrow>The Offer</Eyebrow>
              <h2 className="mt-5 font-serif text-5xl font-medium leading-none text-foreground sm:text-6xl">
                5% Credit
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                A flexible, value-added benefit calculated on net room revenue,
                designed to enhance the guest experience through curated resort
                activities and experiences.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Combined with exclusive group benefits, it helps planners create
                richer programs while delivering greater value for every stay.
              </p>
            </div>
          </div>
        </section>

        {/* Included Group Benefits */}
        <section className="border-y border-hairline bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
            <div className="max-w-2xl">
              <Eyebrow>Included Group Benefits</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
                Elevate every program
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Authentic experiences. Memorable moments. One region full of
                possibilities.
              </p>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="flex flex-col bg-white p-8 transition-colors hover:bg-background"
                >
                  <span className="font-serif text-2xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-medium text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {b.body}
                  </p>
                </div>
              ))}
              <div className="hidden flex-col justify-end bg-accent p-8 text-white lg:flex">
                <p className="font-serif text-2xl italic leading-snug">
                  One region full of possibilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For */}
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="text-center">
            <Eyebrow>Perfect For</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium text-foreground sm:text-5xl">
              Built for every kind of group
            </h2>
          </div>
          <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-5">
            {perfectFor.map((item) => (
              <li
                key={item}
                className="flex min-h-32 items-center justify-center bg-white px-4 py-8 text-center font-serif text-xl text-foreground transition-colors hover:bg-background"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Featured Experience Concepts */}
        <section className="border-y border-hairline bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
            <div className="max-w-2xl">
              <Eyebrow>Featured Experience Concepts</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
                Bring the spirit of the region to life
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Immersive group experiences inspired by Latin America and the
                Caribbean&apos;s culture, flavor and celebration.
              </p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {concepts.map((c, i) => (
                <div
                  key={c}
                  className={`group flex items-end overflow-hidden rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                    i % 3 === 0
                      ? "bg-accent text-white"
                      : "border border-hairline bg-background text-foreground"
                  } ${i === 0 ? "sm:col-span-2 sm:min-h-56" : "min-h-44"}`}
                >
                  <div>
                    <span
                      className={`text-xs uppercase tracking-[0.2em] ${
                        i % 3 === 0 ? "text-white/70" : "text-accent"
                      }`}
                    >
                      Concept {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-medium leading-tight sm:text-3xl">
                      {c}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Planners Love It */}
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="max-w-2xl">
            <Eyebrow>Why Planners Love It</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
              Value for you. Magic for your clients.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-hairline bg-white p-9">
              <h3 className="font-serif text-2xl font-medium text-foreground">
                For the planner
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Simple contracting process",
                  "Predictable group terms",
                  "Protected inventory",
                  "Faster response times",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-base text-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-accent p-9 text-white">
              <h3 className="font-serif text-2xl font-medium">
                For the end client
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Added value without added complexity",
                  "Memorable experiences that help sell the destination",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-base">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="border-y border-hairline bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
            <div className="max-w-2xl">
              <Eyebrow>Program Details</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-medium text-foreground sm:text-5xl">
                The essentials
              </h2>
            </div>
            <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              {programDetails.map((d) => (
                <div key={d.label} className="bg-white p-8">
                  <dt className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    {d.label}
                  </dt>
                  <dd className="mt-4 font-serif text-4xl font-medium text-foreground">
                    {d.value}
                  </dd>
                  <dd className="mt-1 text-sm text-muted">{d.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Properties */}
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="max-w-2xl">
            <Eyebrow>Properties</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium text-foreground sm:text-5xl">
              Where it comes to life
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {properties.map((p) => (
              <div
                key={p.name}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    {p.location}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-medium text-white">
                    {p.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-hairline bg-accent text-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:px-10 sm:py-32">
            <Eyebrow>
              <span className="text-white/80">Request a proposal</span>
            </Eyebrow>
            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-medium leading-tight sm:text-6xl">
              Let&apos;s design your next unforgettable group program
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85">
              Designed to help you win more group business while delivering
              unforgettable guest experiences. Tell us about your group and
              we&apos;ll prepare a tailored proposal.
            </p>
            <a
              href={MAILTO}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-accent transition-transform hover:-translate-y-0.5"
            >
              Request a proposal
            </a>
            <p className="mt-4 text-sm text-white/70">{CONTACT_EMAIL}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-serif text-2xl tracking-wide">
                Resorts EP
              </span>
              <p className="mt-3 font-serif text-lg italic text-white/70">
                One region full of possibilities.
              </p>
            </div>
            <a
              href={MAILTO}
              className="text-sm uppercase tracking-[0.18em] text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="mt-12 border-t border-white/15 pt-6 text-xs text-white/50">
            <p>
              Latin &amp; Caribbean Soul — a group offer for Resorts EP
              properties across CALA. Conrad and Waldorf Astoria are brands of
              Hilton; names used here for reference only.
            </p>
            <p className="mt-2">
              Photography via Pexels (free license): rpnickson, Quang Nguyen
              Vinh, mredgarvfx.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
