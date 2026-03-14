import { useEffect, useRef } from 'react'
import alonzoHero from '../assets/images/alonzo-hero.png'
import heroBg from '../assets/images/hero-bg.png'

// ─── Scroll animation hook ────────────────────────────────────────────────────
function useScrollReveal(className = 'animate-on-scroll') {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add(className)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [className])

  return ref
}

// ─── Divider ──────────────────────────────────────────────────────────────────
function TerracottaDivider() {
  return (
        <div className="w-12 h-px bg-[#b88a44] my-6" />
  )
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({
  id,
  className,
  children,
  style,
}: {
  id: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) {
  return (
    <section id={id} className={className} style={style}>
      {children}
    </section>
  )
}

// ─── Animated block ──────────────────────────────────────────────────────────
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ─── Service card icons (inline SVG) ─────────────────────────────────────────
function MicIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  )
}

function BrainIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.98-3 2.5 2.5 0 0 1-1.32-4.24 3 3 0 0 1 .34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.1-1.99z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.98-3 2.5 2.5 0 0 0 1.32-4.24 3 3 0 0 0-.34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.1-1.99z" />
    </svg>
  )
}

function MonitorIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

function HandshakeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

// ─── Service pillar data ──────────────────────────────────────────────────────
const services = [
  {
    Icon: MicIcon,
    title: 'Speaking Engagements & Keynotes',
    description:
      'Reaching schools, churches, underserved communities, educational boards, and civic spaces — with credentials that include city-wide school programs, MLK Day keynotes, and legislative presentations. The highest-potential revenue service at launch.',
  },
  {
    Icon: BrainIcon,
    title: 'Workshops & Training',
    description:
      'CBT-certified curricula in resilience, burnout prevention, and mental/spiritual health — including dedicated programming for Black men addressing direction, depression, and standard-setting. Proven delivery across 30+ Chicago turnaround schools.',
  },
  {
    Icon: MonitorIcon,
    title: 'Digital Educational Products',
    description:
      'Online courses and e-books that are built, tested, and ready to be monetized — connected to the website through an integrated product store so audiences can buy without friction.',
  },
  {
    Icon: HandshakeIcon,
    title: 'Direct Coaching',
    description:
      'One-on-one and group coaching for those who want personal access to the practitioner. The premium, high-touch tier for sustained individual guidance.',
  },
  {
    Icon: BookIcon,
    title: 'Media & Literature',
    description:
      'Book distribution and long-form content publishing now. A short film about Alonzo\'s life story — from community work through restoration to living balanced — developed once the brand has produced the revenue and documented the story to support production.',
  },
]

// ─── Tier data ───────────────────────────────────────────────────────────────
const tiers = [
  {
    number: '01',
    label: 'Foundation',
    sublabel: 'Target: Mid-April',
    items: [
      'Website booking and scheduling system live — speaking revenue begins immediately',
      'Social media handles synchronized; consistent visual brand across all platforms',
      '"From Restored to Balanced" storytelling campaign launches',
      'Existing online courses connected to the website and monetized',
    ],
  },
  {
    number: '02',
    label: 'Growth & Maintenance',
    sublabel: '',
    items: [
      'Weekly recap content strategy in place (Friday or Saturday posts) — consistent cadence, low production friction',
      'Launch LinkedIn Articles and/or Substack for long-form written thought leadership and audience diversification',
      'Archival authority content published and establishing Alonzo\'s personal credibility record',
    ],
  },
  {
    number: '03',
    label: 'Full Production',
    sublabel: 'Begins when revenue is stable',
    items: [
      'Professional media coverage for major speaking events',
      'Short film development begins — the documented arc becomes the source material for the film that tells the full story',
    ],
  },
]

// ─── Main Proposal Component ──────────────────────────────────────────────────
export default function Proposal() {
  const scrollToNext = () => {
    const el = document.getElementById('summary')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-[#3a3a3a] text-[#f8f6f2]">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <Section
        id="hero"
        className="relative min-h-screen bg-[#3a3a3a] flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side — content */}
          <div className="max-w-2xl">
            <p className="section-kicker text-[#b88a44] mb-8">
              A Strategic Launch Proposal
            </p>

            <h1 className="display-title text-[#f8f6f2] mb-6">
              Living Life<br />Balanced
            </h1>

            <div className="w-16 h-px bg-[#b88a44] mb-8" />

            <p className="display-subtitle text-[#f8f6f2] max-w-[34rem] mb-10">
              "From Restored to Balanced — Building the Brand That Reflects the Work"
            </p>

            <p className="meta-copy text-[#f8f6f2]/70">
              Presented to&nbsp;&nbsp;
              <span className="text-[#f8f6f2]">Alonzo Waheed</span>
            </p>
          </div>

          {/* Right side — hero image */}
          <div className="relative hidden lg:flex items-center justify-center">
            <img
              src={alonzoHero}
              alt="Alonzo Waheed"
              className="w-full h-auto max-w-md rounded-sm shadow-2xl"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          aria-label="Scroll to next section"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f8f6f2]/30 hover:text-[#b88a44] transition-colors duration-300 group"
        >
          <span className="meta-copy">Scroll</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-y-1 transition-transform duration-300"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </button>
      </Section>

      {/* ── 2. EXECUTIVE SUMMARY ────────────────────────────────────────────── */}
      <Section
        id="summary"
        className="bg-[#f8f6f2] text-[#3a3a3a] py-24 md:py-32 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="section-kicker text-[#b88a44] mb-6">
              Executive Summary
            </p>
            <h2 className="heading-main text-[#3a3a3a] mb-8">
              The Work Is Done.<br />Now It Needs a Stage.
            </h2>
            <TerracottaDivider />
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <p className="body-copy muted-on-light measure-body">
              Alonzo Waheed has spent years doing the work — delivering CBT-certified resilience curricula across
              30+ Chicago Public Schools, facilitating executive orders, keynoting at major churches and civic
              institutions, and building programming that reaches men and youth at the intersection of mental
              health, spiritual wellness, and personal development. The credibility is earned. The services are
              built. The audiences are asking where to book him.
            </p>
            <p className="body-copy muted-on-light measure-body">
              This proposal outlines a phased strategy to launch Living Life Balanced as a standalone,
              revenue-generating business — moving from a static digital presence to a fully functioning
              platform for speaking engagements, coaching, and digital education. The approach is
              revenue-first: build the booking infrastructure and course monetization that let the business
              sustain itself, before committing to longer-term production investments.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ── 3. CORE SERVICES & PILLARS ──────────────────────────────────────── */}
      <Section
        id="services"
        className="bg-[#c5b8a5] py-24 md:py-32 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="section-kicker text-[#b88a44] mb-6">
              Core Services & Pillars
            </p>
            <h2 className="heading-main text-[#3a3a3a] mb-4">
              What Alonzo Brings to the Table
            </h2>
            <TerracottaDivider />
            <p className="body-copy-sm subtle-on-light measure-body mb-14">
              Five service lines — each one proven, each one ready. The platform doesn't create the offering.
              It gives it the home it's always needed.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(({ Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 80} className="h-full">
                <div className="bg-[#f8f6f2] border border-[#3a3a3a]/10 rounded-sm p-8 h-full flex flex-col gap-5 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-[#b88a44]">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="heading-sub text-[#3a3a3a] mb-3">{title}</h3>
                    <p className="body-copy-sm subtle-on-light">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* 5th card — centered if odd */}
            {services.length % 2 !== 0 && (
              <div className="md:col-span-2 md:w-1/2 md:mx-auto" />
            )}
          </div>
        </div>
      </Section>

      {/* ── 4. DIGITAL INFRASTRUCTURE ───────────────────────────────────────── */}
      <Section
        id="infrastructure"
        className="bg-[#3a3a3a] py-24 md:py-32 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="section-kicker text-[#b88a44] mb-6">
              Digital Infrastructure Plan
            </p>
            <h2 className="heading-main text-[#f8f6f2] mb-4">
              Building the Platform the Work Deserves
            </h2>
            <TerracottaDivider />
            <p className="body-copy-sm subtle-on-dark measure-body mb-16">
              Three interconnected pillars — website, social, and archive — each one working together to
              make the brand findable, bookable, and credible from day one.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Column 1 */}
            <Reveal delay={0}>
              <div>
                <h3 className="heading-sub text-[#f8f6f2] mb-2">Website Rebuild</h3>
                <div className="w-10 h-px bg-[#b88a44] mb-6" />
                <p className="body-copy-sm subtle-on-dark measure-compact">
                  The Living Life Balanced site moves from a static page to a working business tool. A modern
                  design with a backend booking and scheduling system for speaking engagements, integrated
                  product storefront for courses and books, and a consistent visual brand throughout.
                </p>
              </div>
            </Reveal>

            {/* Column 2 */}
            <Reveal delay={100}>
              <div>
                <h3 className="heading-sub text-[#f8f6f2] mb-2">Social Ecosystem</h3>
                <div className="w-10 h-px bg-[#b88a44] mb-6" />
                <p className="body-copy-sm subtle-on-dark measure-compact mb-5">
                  Synchronized presence across LinkedIn, Instagram, YouTube, and Facebook — same brand
                  aesthetic, platform-specific strategy.
                </p>
                <ul className="space-y-3">
                  {[
                    { platform: 'LinkedIn', note: 'Expert positioning via articles and op-eds — audiences are lawmakers, school boards, and corporate decision-makers' },
                    { platform: 'Instagram', note: 'Organic daily-life storytelling — the therapy, the training, the Black-owned spaces. The how behind living balanced.' },
                    { platform: 'YouTube', note: 'Long-form content repository for speaking engagements and courses; used as pitch material when booking new engagements' },
                  ].map(({ platform, note }) => (
                    <li key={platform} className="flex gap-3">
                      <span className="caption-copy text-[#b88a44] mt-0.5 shrink-0">{platform}</span>
                      <span className="body-copy-sm subtle-on-dark">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Column 3 */}
            <Reveal delay={200}>
              <div>
                <h3 className="heading-sub text-[#f8f6f2] mb-2">Archival Authority</h3>
                <div className="w-10 h-px bg-[#b88a44] mb-6" />
                <p className="body-copy-sm subtle-on-dark measure-compact">
                  The credibility predates this launch. Past work — executive orders, school-wide attendance
                  improvements, media appearances, legislative presentations — gets documented and published on
                  the new platform. The launch introduces Alonzo to the world with proof that the work is real
                  and the track record is long.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── 5. CONTENT & NARRATIVE STRATEGY ─────────────────────────────────── */}
      <Section
        id="narrative"
        className="bg-[#f8f6f2] py-24 md:py-32 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="section-kicker text-[#b88a44] mb-6">
              Content & Narrative Strategy
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — pull quote */}
            <Reveal delay={0}>
              <div className="lg:sticky lg:top-24">
                <blockquote className="quote-copy text-[1.75rem] md:text-[2.4rem] lg:text-[3rem] font-medium text-[#3a3a3a] leading-[1.28]">
                  "The story starts at the return from Africa. Everything since then is the bridge."
                </blockquote>
                <div className="w-12 h-px bg-[#b88a44] mt-8" />
              </div>
            </Reveal>

            {/* Right — content blocks */}
            <div className="space-y-10">
              {[
                {
                  title: 'The Narrative Bridge',
                  body: 'The launch story begins with Alonzo\'s return from Africa and the Restore Fellowship — a chapter that establishes restoration as the foundation of the philosophy. From there, the arc is clear: from restored, to balanced, to building the business that reflects the work. The content campaign for launch is "From Restored to Balanced."',
                },
                {
                  title: 'Reintroducing the Work',
                  body: "Past wins don't expire. Executive orders, school programs, civic keynotes — this history gets chronicled and published as credibility anchors, making clear that Alonzo isn't starting from zero. He's building the stage the work has always deserved.",
                },
                {
                  title: 'Organic Documentation',
                  body: "The ongoing content strategy shifts toward daily life documentation: Black-owned restaurants, physical therapy and training, conversations with mentors and community members. Not performance. Not content for content's sake. Showing what it actually looks like to live what you teach — and doing it publicly, so others can find themselves in it.",
                },
              ].map(({ title, body }, i) => (
                <Reveal key={title} delay={i * 100}>
                  <div>
                    <h3 className="heading-sub text-[#3a3a3a] mb-3">{title}</h3>
                    <p className="body-copy-sm subtle-on-light measure-compact">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── 6. TIERED LAUNCH PLAN ───────────────────────────────────────────── */}
      <Section
        id="launch"
        className="bg-[#c5b8a5] py-24 md:py-32 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="section-kicker text-[#b88a44] mb-6">
              Tiered Launch Plan
            </p>
            <h2 className="heading-main text-[#3a3a3a] mb-4">
              Revenue First. Then Everything Else.
            </h2>
            <TerracottaDivider />
            <p className="body-copy-sm subtle-on-light measure-body mb-16">
              Three phases — each one building on what came before. The first phase doesn't wait. It's
              designed to generate income before the next conversation happens.
            </p>
          </Reveal>

          <div className="space-y-6">
            {tiers.map(({ number, label, sublabel, items }, i) => (
              <Reveal key={number} delay={i * 120}>
                <div className="bg-[#f8f6f2] border border-[#3a3a3a]/10 rounded-sm overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Tier badge */}
                    <div className="bg-[#3a3a3a] md:w-48 shrink-0 flex flex-col justify-center items-start md:items-center p-6 md:p-8 gap-1">
                      <span className="heading-main text-[2.75rem] md:text-[3.5rem] text-[#b88a44] leading-none">{number}</span>
                      <span className="meta-copy text-[#f8f6f2] mt-1">{label}</span>
                      {sublabel && (
                        <span className="caption-copy text-[#f8f6f2]/70 mt-1 text-left md:text-center">{sublabel}</span>
                      )}
                    </div>

                    {/* Tier content */}
                    <div className="p-6 md:p-8 flex-1">
                      <ul className="space-y-3">
                        {items.map((item) => (
                          <li key={item} className="flex gap-3 items-start">
                            <span className="text-[#b88a44] mt-1 shrink-0">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            <span className="body-copy-sm muted-on-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 7. LAUNCH PHASE PRICING ─────────────────────────────────────────── */}
      <Section
        id="pricing"
        className="bg-[#f8f6f2] py-24 md:py-32 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="section-kicker text-[#b88a44] mb-6">
              Launch Phase Investment
            </p>
            <h2 className="heading-main text-[#3a3a3a] mb-4">
              The Launch Phase — $4,000
            </h2>
            <TerracottaDivider />
            <p className="body-copy-sm subtle-on-light measure-body mb-16">
              A focused, project-based investment to get the revenue-generating assets live. Three core services, delivered on a clear timeline.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Brand Strategy & Identity',
                price: '$1,200',
                description: 'Visual identity system applied across website, social platforms, and digital courses. Leverages your existing brand colors, fonts, and logo to create a cohesive, recognizable presence. Includes platform-specific layouts, content templates, and visual guidelines.',
                details: [
                  'Social media visual guidelines',
                  'Website design system & layouts',
                  'Digital course template design',
                  'Cross-platform brand standards',
                  '"From Restored to Balanced" campaign assets',
                ]
              },
              {
                title: 'Website Design & Build',
                price: '$1,900',
                description: 'Custom-designed, fully functional website with integrated booking system for speaking engagements and e-commerce integration for course/product sales. Optimized for speaking conversions.',
                details: [
                  'Responsive custom design',
                  'Booking/scheduling system',
                  'Product store integration',
                  'Analytics & SEO setup',
                  'Launch optimization',
                ]
              },
              {
                title: 'Launch Content & Social Setup',
                price: '$900',
                description: 'Synchronized social media profiles across 4 platforms, launch content assets created, and editable templates for ongoing posts. Sets up the system for consistent brand presence.',
                details: [
                  'Platform account setup',
                  'Launch announcement content',
                  'Bio & profile optimization',
                  'Social media templates',
                  'Weekly posting framework',
                ]
              },
            ].map(({ title, price, description, details }, i) => (
              <Reveal key={title} delay={i * 100} className="h-full">
                <div className="bg-white border border-[#3a3a3a]/15 rounded-sm p-8 h-full flex flex-col gap-6 hover:shadow-md transition-shadow duration-300">
                  <div>
                    <p className="meta-copy text-[#b88a44] mb-2">Service</p>
                    <h3 className="heading-sub text-[#3a3a3a] mb-2">{title}</h3>
                    <p className="heading-sub text-[1.9rem] text-[#3a3a3a]">{price}</p>
                  </div>

                  <p className="body-copy-sm subtle-on-light">{description}</p>

                  <ul className="space-y-2 flex-1">
                    {details.map((detail) => (
                      <li key={detail} className="flex gap-3 items-start">
                        <span className="text-[#b88a44] mt-0.5 shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                        </span>
                        <span className="body-copy-sm subtle-on-light">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="mt-16 bg-[#c5b8a5] border-l-4 border-[#b88a44] p-8 rounded-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="meta-copy text-[#3a3a3a]/80 mb-2">Total Launch Investment</p>
                <p className="heading-main text-[2.5rem] text-[#3a3a3a]">$4,000</p>
              </div>
              <div className="text-right">
                <p className="body-copy-sm subtle-on-light">
                  <span className="font-semibold text-[#3a3a3a]">Timeline:</span> 6-8 weeks from kickoff<br />
                  <span className="font-semibold text-[#3a3a3a]">Deliverable:</span> Fully live, revenue-ready launch<br />
                  <span className="font-semibold text-[#3a3a3a]">Payment:</span> 50% at start, 50% at launch
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── 8. INVESTMENT & NEXT STEPS ──────────────────────────────────────── */}
      <Section
        id="investment"
        className="bg-[#3a3a3a] py-24 md:py-32 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="section-kicker text-[#b88a44] mb-6">
              Investment & Next Steps
            </p>
            <h2 className="heading-main text-[#f8f6f2] mb-6">
              Let's Make It Work — On Your Terms
            </h2>
            <div className="w-12 h-px bg-[#b88a44] mx-auto mb-10" />
          </Reveal>

          <Reveal delay={80} className="space-y-5 mb-12">
            <p className="body-copy subtle-on-dark measure-body mx-auto">
              This engagement is structured as a project-based agreement — not a long-term retainer. The work
              is scoped in focused launch phases, built around getting the revenue-generating assets live first.
              Booking infrastructure. Monetized courses. A synchronized brand presence that gives the business
              real credibility and reach.
            </p>
            <p className="body-copy subtle-on-dark measure-body mx-auto">
              After the launch phase, we evaluate together. If the business is moving and the cashflow supports
              it, we discuss what the next chapter of support looks like. Nothing is assumed. Nothing is locked
              in. The goal is for this work to pay for itself — and then some.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex flex-col items-center gap-8">
              <div className="space-y-2">
                <p className="meta-copy text-[#f8f6f2]/80">
                  info@kenctures.com
                </p>
                <p className="meta-copy text-[#f8f6f2]/80">
                  (708) 359-1464
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="bg-[#3a3a3a] border-t border-white/10 py-8 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="caption-copy text-[#f8f6f2]/50">Kenctures</p>
          <nav className="flex gap-6">
            {['summary', 'services', 'infrastructure', 'narrative', 'launch', 'pricing', 'investment'].map((id) => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                className="meta-copy text-[#f8f6f2]/60 hover:text-[#b88a44] transition-colors duration-200"
              >
                {id}
              </button>
            ))}
          </nav>
          <p className="caption-copy text-[#f8f6f2]/50">© 2026 Kenctures Inc</p>
        </div>
      </footer>

    </div>
  )
}
