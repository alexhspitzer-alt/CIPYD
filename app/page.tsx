import Image from "next/image";

// Replace this with the public URL of your Google Form before launch.
const REQUEST_FORM_URL = "#request";
const SITE_BASE_PATH = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "");
const assetPath = (path: string) => `${SITE_BASE_PATH}${path}`;

const services = [
  {
    number: "01",
    title: "Dog walks",
    note: "For busy days, long workdays, and dogs with opinions about the route.",
    details: ["Neighborhood walks", "Sniff time included", "Photo + visit notes"],
    tone: "coral",
  },
  {
    number: "02",
    title: "Drop-in visits",
    note: "Meals, medicine, litter boxes, playtime, and a little household normalcy.",
    details: ["Dogs, cats & mixed households", "Routine-based care", "Practical health notes"],
    tone: "blue",
  },
  {
    number: "03",
    title: "Longer hangouts",
    note: "Calm company at home for anxious dogs, seniors, and pets who need more than a pit stop.",
    details: ["Unhurried visits", "Great for separation anxiety", "Your home, their routine"],
    tone: "yellow",
  },
];

const snapshots = [
  {
    src: assetPath("/photos/paw-handshake.jpg"),
    alt: "Alex kneeling beside a dog who is placing a paw in his hands",
    caption: "Contract negotiations",
    className: "snapshot snapshot-one",
  },
  {
    src: assetPath("/photos/chair-dogs.jpg"),
    alt: "Two dogs crowding Alex in a blue outdoor chair",
    caption: "Personal space: aspirational",
    className: "snapshot snapshot-two",
  },
  {
    src: assetPath("/photos/dog-kiss.jpg"),
    alt: "A large tan dog licking Alex on the cheek",
    caption: "Performance review",
    className: "snapshot snapshot-three",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Can I Pet Your Dog home">
          <span>CAN I PET</span>
          <span>YOUR DOG?</span>
          <em>(or cat)</em>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">About Alex</a>
          <a href="#process">How it works</a>
        </nav>
        <a className="button button-small" href="#request">
          Request care <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero page-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent pet care in Durham, NC</p>
          <h1>
            CAN I PET
            <br />
            YOUR DOG?
            <em>(or cat)</em>
          </h1>
          <p className="hero-lede">
            Walks, drop-ins, and in-home hangouts from one familiar local human—
            with photos, honest updates, and no mysterious rotating cast of walkers.
          </p>
          <div className="hero-actions">
            <a className="button" href="#request">Request a meet &amp; greet <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#services">See services <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-row" aria-label="Service highlights">
            <span><strong>4.9 ★</strong> Rover rating</span>
            <span><strong>21</strong> straight 5-star reviews</span>
            <span><strong>100%</strong> photo evidence</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-frame">
            <Image
              src={assetPath("/photos/hero-apollo.jpg")}
              alt="Alex smiling down at a large fluffy white dog on a sunny Durham sidewalk"
              fill
              priority
              sizes="(max-width: 800px) 94vw, 48vw"
            />
          </div>
          <div className="hero-sticker sticker-top">BIG DOG<br />APPROVED</div>
          <div className="hero-sticker sticker-bottom">One sitter.<br />No roulette.</div>
          <div className="leash-line" aria-hidden="true" />
        </div>
      </section>

      <section className="ticker" aria-label="Types of care offered">
        <div>
          <span>DOG WALKS</span><b>•</b><span>DROP-INS</span><b>•</b><span>MEALS + MEDS</span><b>•</b>
          <span>CAT CARE</span><b>•</b><span>LONG HANGOUTS</span><b>•</b><span>EXCELLENT SCRITCHES</span>
        </div>
      </section>

      <section className="services page-shell" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Pick what your pet needs</p>
            <h2>Care that fits<br />real life.</h2>
          </div>
          <p>
            Every visit follows your pet’s normal routine—not a one-size-fits-all checklist.
            Tell me what a good day looks like for them, including the weird parts.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className={`service-card ${service.tone}`} key={service.title}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.note}</p>
              <ul>
                {service.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <a href="#request" aria-label={`Ask about ${service.title}`}>
                Ask about this <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="real-life" id="process">
        <div className="page-shell real-life-grid">
          <div className="rain-photo">
            <Image
              src={assetPath("/photos/rain-shake.jpg")}
              alt="A wet white dog shaking water beside a laughing Alex holding a towel"
              fill
              sizes="(max-width: 800px) 94vw, 48vw"
            />
            <span className="photo-note">Yes, walks still happen when the weather is rude.</span>
          </div>
          <div className="real-life-copy">
            <p className="eyebrow light"><span /> What you can expect</p>
            <h2>The opposite of<br />“they were fine.”</h2>
            <p className="intro">
              You’ll know when I arrived, what we did, how your pet seemed, and whether
              anything looked off. Useful detail, not an automated paragraph about tail wags.
            </p>
            <ol>
              <li><strong>01</strong><span><b>We meet first.</b> I learn the routine, the gear, the hiding places, and who is allowed to eat whose food.</span></li>
              <li><strong>02</strong><span><b>I show up.</b> The same person your pet already met walks through the door.</span></li>
              <li><strong>03</strong><span><b>You get the field report.</b> Photos, bathroom intel, food notes, and anything else worth knowing.</span></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="field-notes page-shell" aria-labelledby="field-notes-title">
        <div className="field-notes-title">
          <p className="eyebrow"><span /> Recent field notes</p>
          <h2 id="field-notes-title">Evidence of petting</h2>
          <p>Not stock-photo perfection. Just animals acting like animals.</p>
        </div>
        <div className="snapshot-grid">
          {snapshots.map((snapshot) => (
            <figure className={snapshot.className} key={snapshot.src}>
              <div className="snapshot-image">
                <Image src={snapshot.src} alt={snapshot.alt} fill sizes="(max-width: 700px) 88vw, 30vw" />
              </div>
              <figcaption>{snapshot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="about page-shell" id="about">
        <div className="about-copy">
          <p className="eyebrow"><span /> Hi, I’m Alex</p>
          <h2>Pet person.<br />Detail person.<br /><i>Actual person.</i></h2>
          <p className="about-lede">
            I started doing this because “Can I pet your dog?” was already most of my personality.
            Now I help Durham pets stay comfortable at home while their humans work, travel, or simply need backup.
          </p>
          <p>
            I follow your relationship and your pet’s routine. I don’t use choke chains or slip leads.
            If I notice a tick, an upset stomach, a loose gate, or gear that isn’t working, I’ll tell you
            plainly—without turning the visit into a lecture.
          </p>
          <div className="about-tags" aria-label="Alex's pet care approach">
            <span>Calm with anxious dogs</span>
            <span>Comfortable with meds</span>
            <span>Cat-literate</span>
            <span>Kid-and-pet household aware</span>
          </div>
        </div>
        <div className="about-image">
          <Image
            src={assetPath("/photos/floor-hangout.jpg")}
            alt="Alex relaxing on the floor while a black and white dog lies belly-up beside him"
            fill
            sizes="(max-width: 800px) 94vw, 42vw"
          />
          <span>My preferred office setup.</span>
        </div>
      </section>

      <section className="request" id="request">
        <div className="request-inner page-shell">
          <div>
            <p className="eyebrow light"><span /> Need a hand?</p>
            <h2>Tell me about<br />your animal.</h2>
            <p>
              Send the basics—where you are, what kind of care you need, and your dates.
              I’ll reply personally so we can decide whether it’s a good fit.
            </p>
          </div>
          <div className="request-card">
            <div className="request-line"><span>1</span><p><b>Your pet</b><br />Dog, cat, or complicated committee</p></div>
            <div className="request-line"><span>2</span><p><b>Your neighborhood</b><br />North Durham and nearby areas</p></div>
            <div className="request-line"><span>3</span><p><b>What you need</b><br />Service, timing, dates, and special notes</p></div>
            <a className="button button-wide" href={REQUEST_FORM_URL}>
              Request a meet &amp; greet <span aria-hidden="true">↗</span>
            </a>
            <small>Mockup: this button will connect to your request form.</small>
          </div>
        </div>
      </section>

      <footer className="site-footer page-shell">
        <a className="wordmark footer-mark" href="#top">
          <span>CAN I PET</span><span>YOUR DOG?</span><em>(or cat)</em>
        </a>
        <p>Independent dog walking &amp; pet sitting • Durham, North Carolina</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
