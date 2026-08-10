import Image from "next/image";

// Placeholder: replace with the public URL of the request form before launch.
const REQUEST_FORM_URL = "#request-form-coming-soon";
const SITE_BASE_PATH = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "");
const assetPath = (path: string) => `${SITE_BASE_PATH}${path}`;

const services = [
  {
    number: "01",
    title: "Dog walks",
    description: "A neighborhood walk shaped around your dog’s energy, pace, habits, and opinions about the route.",
    details: ["Bathroom breaks or longer walks", "Sniffing is part of the walk", "Pace and route adjusted to the day"],
    link: "Ask about walks",
    tone: "coral",
  },
  {
    number: "02",
    title: "Drop-in visits",
    description: "Food, fresh water, litter boxes, medication, play, and the ordinary work of keeping the day on track.",
    details: ["Dogs, cats, and mixed households", "Care built around the household routine", "I’ll tell you if something seems unusual"],
    link: "Ask about visits",
    tone: "blue",
  },
  {
    number: "03",
    title: "Longer visits",
    description: "For anxious pets, seniors, young animals, or anyone who does better with more than a quick stop.",
    details: ["Quiet company still counts as company", "Walk, play, or rest as needed", "At home, in familiar surroundings"],
    link: "Ask about longer care",
    tone: "yellow",
  },
];

const snapshots = [
  { src: "/photos/paw-handshake.jpg", alt: "Alex kneeling beside a dog who places a paw in his hands", caption: "Contract negotiations", className: "snapshot snapshot-one" },
  { src: "/photos/chair-dogs.jpg", alt: "Two dogs crowding onto an outdoor chair with Alex", caption: "Personal space: aspirational", className: "snapshot snapshot-two" },
  { src: "/photos/dog-kiss.jpg", alt: "A large tan dog licking Alex on the cheek", caption: "Performance review", className: "snapshot snapshot-three" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Can I Pet Your Dog home">
          <span>CAN I PET</span><span>YOUR DOG</span><em>(or cat)</em>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#how-i-work">How I work</a>
          <a href="#about">About Alex</a>
        </nav>
        <a className="button button-small" href="#request">Tell me about your pet</a>
      </header>

      <section className="hero page-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent pet care in Durham, North Carolina</p>
          <h1>CAN I PET<br />YOUR DOG<em>(or cat)</em></h1>
          <div className="hero-intro">
            <p>Flexible walks, drop-ins, and longer visits for pets with their own routines, preferences, and ideas about how the day should go.</p>
            <p>Tell me what your pet needs. We’ll make a plan, agree on a straightforward price, and leave a little room for real life.</p>
          </div>
          <div className="hero-actions">
            <a className="button" href="#request">Tell me about your pet <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#services">See services <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-row" aria-label="Pet care experience">
            <span>Five years in the pet industry</span>
            <span>Comfortable with anxious dogs</span>
            <span>Dogs, cats, and mixed households</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-frame">
            <Image src={assetPath("/photos/hero-apollo.jpg")} alt="Alex smiling down at Apollo, a large fluffy white dog, on a sunny Durham sidewalk" fill priority sizes="(max-width: 700px) 92vw, (max-width: 980px) 690px, 48vw" />
          </div>
          <div className="hero-sticker sticker-top">Big Pupper<br />Approved</div>
          <div className="hero-sticker sticker-bottom">Best Scratches<br />in Town</div>
          <div className="leash-line" aria-hidden="true" />
        </div>
      </section>

      <section className="ticker" aria-label="Types of care offered"><div>
        <span>DOG WALKS</span><b>•</b><span>DROP-INS</span><b>•</b><span>MEALS + MEDS</span><b>•</b><span>CAT CARE</span><b>•</b><span>LONGER VISITS</span><b>•</b><span>EXCELLENT SCRITCHES</span>
      </div></section>

      <section className="services page-shell" id="services">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> What does your pet need?</p><h2>A simple plan that fits the animal.</h2></div>
          <div className="section-intro"><p>Some pets need a “real” walk. Some need food, medication, and twenty minutes to make up their mind about humans. Some need company for a few hours and that one toy with the good crinkles.</p><p>Let’s figure it out!</p></div>
        </div>
        <div className="service-grid">
          {services.map((service) => <article className={`service-card ${service.tone}`} key={service.title}>
            <span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p>
            <ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            <a href="#request">{service.link} <span aria-hidden="true">↗</span></a>
          </article>)}
        </div>
        <aside className="pricing-note" aria-labelledby="pricing-title">
          <div className="pricing-mark" aria-hidden="true">$</div>
          <div><h3 id="pricing-title">Simple rates, flexible arrangements</h3><p>Most care starts with a straightforward flat rate. If you need more time, multiple pets, a shifting schedule, or something unusual, we’ll talk it through and agree on the full plan and price before care starts.</p></div>
        </aside>
      </section>

      <section className="real-life" id="how-i-work">
        <div className="page-shell real-life-grid">
          <div className="rain-photo">
            <Image src={assetPath("/photos/rain-shake.jpg")} alt="A wet white dog shakes water beside Alex, who is laughing and holding a towel" fill sizes="(max-width: 700px) 90vw, (max-width: 980px) 680px, 48vw" />
            <span className="photo-note">Some days the plan needs a towel.</span>
          </div>
          <div className="real-life-copy">
            <p className="eyebrow light"><span /> How I work</p><h2>We make a plan. Then we pay attention.</h2>
            <div className="work-intro"><p>Your instructions matter. So does the animal actually in front of me.</p><p>I learn what normal looks like, notice how this particular day is going, and adjust when the two do not quite match.</p></div>
            <ol>
              <li><strong>01</strong><span><b>Start with normal</b>You show me the routine, the gear, the boundaries, the hiding places, the food politics, and what a good visit usually looks like.</span></li>
              <li><strong>02</strong><span><b>Pay attention to today</b>Energy, body language, appetite, movement, bathroom habits, weather, and the surroundings can all affect what a pet needs that day.</span></li>
              <li><strong>03</strong><span><b>Use judgment and communicate</b>I keep the routine when it works, change course when it doesn’t, and contact you when I need information or a decision that should be yours.</span></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="complicated page-shell" aria-labelledby="complicated-title">
        <div className="complicated-copy">
          <p className="eyebrow"><span /> Strong opinions allowed</p><h2 id="complicated-title">Complicated dogs are still dogs.</h2>
          <div className="complicated-columns">
            <div><p>I genuinely like working with anxious, cautious, excitable, stubborn, and generally neurotic dogs. Slow introductions, suspicious barking, and routines with footnotes are not automatic dealbreakers.</p><p>I don’t expect instant trust or perfect manners. I pay attention to body language, give animals time to warm up, and change tactics when pushing ahead would only make the day worse.</p></div>
            <div><p>Tell me what has worked, what has not, and what your dog tends to do when stressed. The honest version is the useful version.</p><p>A good visit might be a long walk, a game, a lap full of dogs, a nap, or fifteen peaceful minutes of mutually respectful distance.</p></div>
          </div>
        </div>
        <div className="snapshot-grid" aria-label="Pet personality gallery">
          {snapshots.map((snapshot) => <figure className={snapshot.className} key={snapshot.src}><div className="snapshot-image"><Image src={assetPath(snapshot.src)} alt={snapshot.alt} fill sizes="(max-width: 700px) 84vw, 30vw" /></div><figcaption>{snapshot.caption}</figcaption></figure>)}
        </div>
      </section>

      <section className="about page-shell" id="about">
        <div className="about-copy">
          <p className="eyebrow"><span /> Hi, I’m Alex</p><h2>Five years in the pet industry. <i>Hundreds of animals, still haven’t met a bad one.</i></h2>
          <p>I’ve worked in the pet industry for five years, including retail product support for customers, harness and collar fitting, working with food and supplement wholesalers, and of course pet sitting. I’ve worked with vets, trainers, service animals and working dogs, and local rescue organizations. I’ve sat with exasperated people with their first puppy or kitten.</p>
          <blockquote className="about-quote"><strong>But my favorite clients have four legs.</strong></blockquote>
          <p>The part I like best is learning the individual animal: what helps them settle, what gets them moving, what counts as normal, and what will they absolutely not abide.</p>
          <p>I’m practical, observant, and comfortable with a little chaos. I notice changes in behavior, appetite, movement, bathroom habits, gear, etc. If something seems off, I’ll tell you plainly.</p>
          <p>I work with the relationship you already have. <strong>You know your pet.</strong> My job is to listen, learn the routine, and help keep them safe and steady while you’re away.</p>
          <div className="about-tags" aria-label="Alex’s pet care experience"><span>Five years in the pet industry</span><span>Comfortable with anxious dogs</span><span>Medication and routine care</span><span>Dogs, cats, and mixed households</span></div>
        </div>
        <div className="about-image"><Image src={assetPath("/photos/floor-hangout.jpg")} alt="Alex relaxing on the floor beside a black and white dog lying belly-up" fill sizes="(max-width: 700px) 88vw, (max-width: 980px) 620px, 42vw" /><span>All packages include unlimited belly rubs.</span></div>
      </section>

      <section className="request" id="request">
        <div className="request-inner page-shell">
          <div><p className="eyebrow light"><span /> Need pet care?</p><h2>Tell me about your animal.</h2><div className="request-intro"><p>Send your neighborhood, dates, the kind of care you have in mind, and anything important about the animals involved.</p><p>I’ll get back to you so we can talk through the routine and agree on a plan and price.</p></div></div>
          <div className="request-card">
            <div className="request-line"><span>1</span><p><b>Your animals</b>Names, species, personalities, routines, and relevant history.</p></div>
            <div className="request-line"><span>2</span><p><b>Your schedule</b>Dates, timing, and how flexible it is.</p></div>
            <div className="request-line"><span>3</span><p><b>The actual job</b>A walk, a meal, medication, company, or something that doesn’t fit neatly into a standard box.</p></div>
            <a className="button button-wide" href={REQUEST_FORM_URL}>Tell me about your pet <span aria-hidden="true">↗</span></a>
            <small id="request-form-coming-soon">Request form link coming soon.</small>
          </div>
        </div>
      </section>

      <footer className="site-footer page-shell"><a className="wordmark footer-mark" href="#top"><span>CAN I PET</span><span>YOUR DOG</span><em>(or cat)</em></a><p>Flexible dog walking and pet sitting in Durham, North Carolina.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
