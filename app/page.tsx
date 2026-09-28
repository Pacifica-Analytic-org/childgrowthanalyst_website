import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-shell';
import { StaticLink } from '@/components/static-link';
import {
  Baby,
  BarChart3,
  BrainCircuit,
  Cloud,
  FileText,
  Gauge,
  LockKeyhole,
  Ruler,
} from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Ruler,
    title: 'Every measurement in one place',
    text: 'Record weight, height, head circumference, BMI, dates, notes, and milestones without losing the story between visits.',
  },
  {
    icon: BarChart3,
    title: 'Charts with useful context',
    text: 'Follow WHO percentiles, compare measurements over time, and use corrected age when a child was born early.',
  },
  {
    icon: FileText,
    title: 'Reports made for conversations',
    text: 'Choose a period, bring the important measurements together, and save or share a clear parent report.',
  },
  {
    icon: BrainCircuit,
    title: 'Optional AI growth assistant',
    text: 'Ask for an educational summary of selected synchronized measurements, with separate consent and clear usage limits.',
  },
];

const GooglePlayMark = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M3.3 2.5 14 12 3.3 21.5a2 2 0 0 1-.3-1V3.5a2 2 0 0 1 .3-1Zm12.1 10.7 2.7 2.4-11.6 6.6 8.9-9Zm4-5 2.2 1.2a3 3 0 0 1 0 5.2l-2.2 1.2-3-2.7 3-4.9ZM6.5 1.8l11.6 6.6-2.7 2.4-8.9-9Z" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Clear growth tracking for parents
          </p>
          <h1>Understand your child&apos;s growth with confidence.</h1>
          <p className="hero-lead">
            Record every measurement, follow trusted growth charts, and turn
            everyday numbers into a clear story you can share with your care
            team.
          </p>
          <div className="hero-actions">
            <a className="store-button" href="#availability">
              <GooglePlayMark />
              <span>
                <small>COMING SOON ON</small>Google Play
              </span>
            </a>
            <a className="text-link" href="#how-it-works">
              See how it works <span>→</span>
            </a>
          </div>
          <div className="trust-row">
            <span>WHO growth standards</span>
            <span>Corrected age support</span>
            <span>Parent-friendly reports</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-frame">
            <Image
              src="/growth-analysis.jpg"
              alt="A friendly illustration of a child growth chart and measurement tools"
              width={1254}
              height={1254}
              priority
            />
          </div>
          <div className="measurement-card measurement-card-one">
            <span>Growth trend</span>
            <strong>Easy to follow</strong>
          </div>
          <div className="measurement-card measurement-card-two">
            <span>Parent report</span>
            <strong>Ready to share</strong>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Product principles">
        <p>Designed for parents, not spreadsheets.</p>
        <div />
        <p>Useful context without replacing medical advice.</p>
        <div />
        <p>Your child&apos;s data stays under your control.</p>
      </section>

      <section className="features section-wrap" id="features">
        <div className="section-heading">
          <p className="eyebrow">
            <span /> Built around real family routines
          </p>
          <h2>A calmer way to keep the whole growth story together.</h2>
          <p>
            From the first measurement to the next appointment, the app keeps
            each detail organized and understandable.
          </p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }, index) => (
            <article
              className={`feature-card feature-${index + 1}`}
              key={title}
            >
              <Icon aria-hidden="true" />
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="how-copy">
          <p className="eyebrow">
            <span /> Simple from day one
          </p>
          <h2>Three small steps. One clearer picture.</h2>
          <p>
            No complicated setup. Start in Guest Mode or create an account when
            you want secure cloud synchronization.
          </p>
        </div>
        <ol className="steps">
          <li>
            <span>1</span>
            <div>
              <Baby />
              <h3>Create a child profile</h3>
              <p>
                Add birth information and an optional due date for corrected-age
                growth tracking.
              </p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <Gauge />
              <h3>Record measurements</h3>
              <p>
                Keep height, weight, head circumference, dates, and notes
                together.
              </p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <BarChart3 />
              <h3>Review the growth story</h3>
              <p>
                Explore charts and create a report for your own records or care
                conversations.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="privacy-section">
        <div className="privacy-mark">
          <LockKeyhole />
          <span>
            Your data,
            <br />
            your decision.
          </span>
        </div>
        <div className="privacy-copy">
          <p className="eyebrow">
            <span /> Privacy is part of the product
          </p>
          <h2>Start locally. Sync only when you choose.</h2>
          <p>
            Guest Mode keeps profiles on your device. Accounts enable secure
            cloud storage and restore. AI processing is optional, requires
            separate consent, and excludes child names, notes, photos, and
            parent details.
          </p>
          <div className="privacy-links">
            <StaticLink href="/privacy">Read our Privacy Policy →</StaticLink>
            <StaticLink href="/delete-account">
              Account deletion options →
            </StaticLink>
          </div>
        </div>
        <Cloud className="privacy-cloud" aria-hidden="true" />
      </section>

      <section className="availability" id="availability">
        <div>
          <p className="eyebrow">
            <span /> Launching on Android first
          </p>
          <h2>Keep the next measurement in context.</h2>
          <p>
            Child Growth Analyst is currently completing Google Play production
            preparation. Public download links will appear here after approval.
          </p>
        </div>
        <div className="availability-card">
          <Image
            src="/app-icon.png"
            alt="Child Growth Analyst app icon"
            width={82}
            height={82}
          />
          <strong>Child Growth Analyst</strong>
          <span>Google Play · Coming soon</span>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
