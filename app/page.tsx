import Image from "next/image";

// Placeholder: replace with the confirmed public request form URL before launch.
const REQUEST_FORM_URL = "#request-form-coming-soon";
const SITE_BASE_PATH = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "");
const assetPath = (path: string) => `${SITE_BASE_PATH}${path}`;

const services = [
  { title: "Dog walks", label: "Alex & Morgan", text: "A neighborhood walk shaped around your dog’s energy, pace, and interests, with time to sniff and explore.", link: "Ask about walks", tone: "coral", image: "/photos/morgan-dog-walk.png", alt: "Morgan in a red shirt walking a black-and-white dog through the neighborhood." },
  { title: "Drop-in visits", label: "Alex & Morgan • At your home", text: "Food, fresh water, litter boxes, medication, play, and company. Visits follow your pets’ routines, whether you have one animal or a whole household.", link: "Ask about visits", tone: "blue", image: "/photos/alex-cat-feeder.png", alt: "Alex checking in on a gray cat beside its automatic feeder." },
  { title: "Longer visits", label: "At your home", text: "More time together for pets who benefit from a longer visit. We can include a walk, playtime, meals, or quiet company.", link: "Ask about longer visits", tone: "yellow", image: "/photos/alex-westie.png", alt: "Alex spending time with a white Westie during a visit." },
  { title: "House sitting", label: "Morgan • At your home", text: "Overnight care in your home, where your pets can stay in familiar surroundings and follow their usual routines.", link: "Ask about house sitting", tone: "blue", image: "/photos/morgan-chihuahua-chair.png", alt: "Morgan relaxing in a brown chair with a small brown Chihuahua." },
  { title: "Doggy daycare", label: "At Morgan’s home", text: "Daytime care and company at Morgan’s home, with time for activity and rest.", link: "Ask about daycare", tone: "yellow", image: "/photos/alex-bathtub.png", alt: "Alex sitting beside a black dog in a bathtub." },
  { title: "Overnight boarding", label: "At Morgan’s home", text: "A stay at Morgan’s home while you’re away. Morgan will talk with you about meals, medication, sleep, and what helps your dog settle in.", link: "Ask about boarding", tone: "coral" },
];

const photos = [
  { src: "/photos/chair-dogs.jpg", alt: "Alex sitting outdoors with two dogs gathered around him." },
  { src: "/photos/morgan-raincoat-walk.webp", alt: "Morgan walking a brown dog in the rain while wearing a raincoat." },
  { src: "/photos/paw-handshake.jpg", alt: "Alex kneeling beside a dog with a paw resting in his hands." },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Can I Pet Your Dog home"><span>CAN I PET</span><span>YOUR DOG</span><em className="title-subtitle">(or cat)</em></a>
      <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#care">Sixth visit free</a><a href="#team">Alex & Morgan</a></nav>
      <a className="button button-small" href="#request">Tell us about your pet</a>
    </header>

    <section className="hero page-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Flexible pet care in Durham, North Carolina</p>
        <h1>CAN I PET<br />YOUR DOG<em className="title-subtitle">(or cat)</em></h1>
        <div className="hero-intro"><p>We’re Alex and Morgan. We offer walks, visits, house sitting, doggy daycare, and overnight boarding, with care shaped around your pet’s routine and the help you need.</p><p>Tell us about your pets and your schedule. We’ll work out a plan and price together.</p></div>
        <div className="hero-actions"><a className="button" href="#request">Tell us about your pet <span aria-hidden="true">↗</span></a><a className="text-link" href="#services">See services <span aria-hidden="true">↓</span></a></div>
        <div className="trust-row" aria-label="Pet care experience"><span>Alex: almost a decade in the pet industry</span><span>Morgan: 30+ years caring for pets</span><span>All ages, sizes, and personalities</span></div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo-frame"><Image src={assetPath("/photos/morgan-dogs-couch.webp")} alt="Morgan relaxing on a couch with three dogs." fill priority sizes="(max-width: 980px) 92vw, 48vw" /></div>
        <div className="hero-photo-secondary"><Image src={assetPath("/photos/hero-apollo.jpg")} alt="Alex greeting a large fluffy white dog on a neighborhood sidewalk." fill sizes="(max-width: 700px) 76vw, 29vw" /></div>
        <div className="hero-photo-tertiary"><Image src={assetPath("/photos/dog-kiss.jpg")} alt="A large tan dog licking Alex on the chin." fill sizes="(max-width: 700px) 42vw, 17vw" /></div>
        <div className="hero-sticker sticker-bottom">Best Scratches<br />in Town</div>
      </div>
    </section>

    <section className="ticker" aria-label="Types of care offered"><div><span>DOG WALKS</span><b>•</b><span>DROP-IN VISITS</span><b>•</b><span>HOUSE SITTING</span><b>•</b><span>DOGGY DAYCARE</span><b>•</b><span>OVERNIGHT BOARDING</span><b>•</b><span>CAT CARE</span></div></section>

    <section className="services page-shell" id="services">
      <div className="section-heading"><div><p className="eyebrow"><span /> Services</p><h2>A simple plan that fits the animal.</h2></div><p className="section-intro">A daily walk, a visit while you’re at work, or care while you’re away—we’ll help you find the right arrangement for your pets.</p></div>
      <div className="service-grid">{services.map((service, i) => <article className={`service-card ${service.tone}`} key={service.title}>
        <div className={`service-photo${service.image ? "" : " service-photo-placeholder"}`}>
          {service.image ? <Image src={assetPath(service.image)} alt={service.alt ?? ""} fill sizes="(max-width: 700px) 90vw, (max-width: 980px) 44vw, 31vw" /> : <><span aria-hidden="true">Z</span><p>Boarding photos<br />coming soon</p><span aria-hidden="true">Z</span></>}
          <span className="service-number">{String(i + 1).padStart(2, "0")}</span>
        </div>
        <div className="service-card-copy"><p className="service-label">{service.label}</p><h3>{service.title}</h3><p>{service.text}</p><a href="#request">{service.link} <span aria-hidden="true">↗</span></a></div>
      </article>)}</div>
      <aside className="pricing-note" aria-labelledby="pricing-title"><div className="pricing-mark" aria-hidden="true">$</div><div><h3 id="pricing-title">Simple rates, flexible arrangements</h3><p>Tell us how much time you need, how many pets you have, and what their care involves. We’ll talk through the details and agree on the plan and price before care begins.</p></div></aside>
    </section>

    <section className="welcome page-shell" aria-labelledby="welcome-title">
      <div><p className="eyebrow"><span /> Everyone is welcome</p><h2 id="welcome-title">All ages. All sizes. All personalities.</h2></div>
      <div className="welcome-copy"><p>Dogs, cats, and other pets are welcome. We enjoy getting to know puppies and kittens, senior animals, enthusiastic greeters, and pets who take their time getting acquainted. We learn their routines, what they enjoy, and what helps them feel comfortable.</p><p>Alex has a particular interest in working with anxious and cautious animals. Morgan brings extensive experience with senior pets and medication routines, including injections. Tell us about dietary needs, medication schedules, mobility, and anything else that matters to your pet’s day.</p></div>
    </section>

    <section className="real-life" id="care"><div className="page-shell real-life-grid">
      <div className="rain-photo"><Image src={assetPath("/photos/rain-shake.jpg")} alt="A wet white dog shaking water beside Alex, who is holding a towel." fill sizes="(max-width: 980px) 90vw, 48vw" /></div>
      <div className="real-life-copy"><p className="eyebrow light"><span /> A little thank-you</p><h2>Five visits. The sixth is on us.</h2><p className="work-intro">After five paid visits, your sixth visit is free—up to $30. No points or complicated tiers, just a thank-you for trusting us with your pets.</p>
        <ol><li><strong>01</strong><span><b>Visits one through five</b>Book and complete five paid visits with us.</span></li><li><strong>02</strong><span><b>Your sixth visit</b>Your next visit is free when it costs $30 or less.</span></li><li><strong>03</strong><span><b>Visits over $30</b>If your sixth visit costs more than $30, we’ll take $30 off the total.</span></li></ol>
      </div>
    </div></section>

    <section className="team page-shell" id="team"><div className="team-heading"><p className="eyebrow"><span /> Your pet-care partners</p><h2>Meet Alex and Morgan</h2></div><div className="profile-grid">
      <article className="profile"><div className="profile-image"><Image src={assetPath("/photos/floor-hangout.jpg")} alt="Alex sitting on the floor beside a black-and-white dog lying belly-up." fill sizes="(max-width: 700px) 90vw, 44vw" /><span>All packages include unlimited belly rubs.</span></div><div className="profile-copy"><p className="eyebrow"><span /> Alex</p><h3>Almost a decade in the pet industry.</h3><p className="profile-aside">hundreds of animals, still haven’t met a bad one</p><p>I’ve worked in the pet industry for almost a decade now, including retail product support for customers, fitting harnesses and collars, working with food and supplement wholesalers, and pet sitting. I’ve worked with vets, trainers, service animals and working dogs, and local rescue organizations. I’ve sat with exasperated people with their first puppy or kitten.</p><blockquote className="profile-quote">but my favorite clients have four legs</blockquote><p>I work with the relationship you already have. You know your pet. My job is to listen, learn the routine, and help keep them safe and steady while you’re away.</p><blockquote className="profile-quote">“Sorry, he’s a little weird about…”</blockquote><p>Perfect—I love weirdos. I genuinely enjoy anxious, cautious, excitable, and neurotic pets. Learning the individual animal means noticing what helps them settle, what gets them moving, and what counts as normal.</p></div></article>
      <article className="profile morgan-profile"><div className="profile-copy"><p className="eyebrow"><span /> Morgan</p><h3>More than 30 years caring for pets.</h3><p>I’ve been caring for pets my whole life—all kinds and all sizes. Pet sitting began as a way for my kids and me to spend time with even more animals, and it’s grown into work I love.</p><blockquote className="profile-quote">taking care of animals is much more than a job</blockquote><p>I bring more than 30 years of pet-care experience, with particular experience caring for senior animals, following specific diets, and giving medications, including injections. Along with walks and visits, I offer house sitting, doggy daycare, and overnight boarding in my home.</p><blockquote className="profile-quote">I want you to know your pets will be treated like family</blockquote><p>I love having animals around the house. Our two cats like sunning themselves on the patio and finding comfortable places to settle in.</p></div><div className="profile-image morgan-image"><Image src={assetPath("/photos/morgan-cat-chair.webp")} alt="Morgan sitting in a chair with her tabby cat perched above her." fill sizes="(max-width: 700px) 90vw, 36vw" /><span>Flexible <strong>sitting</strong> arrangements.</span></div></article>
    </div></section>

    <section className="gallery page-shell" aria-labelledby="gallery-title"><div className="gallery-heading"><p className="eyebrow"><span /> A few favorites</p><h2 id="gallery-title">Time together</h2></div><div className="snapshot-grid">{photos.map((photo, i) => <figure className={`snapshot snapshot-${i + 1}`} key={photo.src}><div className="snapshot-image"><Image src={assetPath(photo.src)} alt={photo.alt} fill sizes="(max-width: 700px) 88vw, 30vw" /></div></figure>)}</div></section>

    <section className="request" id="request"><div className="request-inner page-shell"><div><p className="eyebrow light"><span /> Start a conversation</p><h2>Tell us about your pet.</h2><p className="request-intro">Send your neighborhood, dates, the kind of care you need, and a little about your animals. We’ll get back to you to talk through the routine and agree on a plan and price.</p></div><div className="request-card"><div className="request-line"><span>1</span><p><b>Your pets</b>Who needs care, their routines, and anything you’d like us to know.</p></div><div className="request-line"><span>2</span><p><b>Your schedule</b>Dates, timing, and any flexibility.</p></div><div className="request-line"><span>3</span><p><b>The care you need</b>Walks, visits, house sitting, daycare, boarding, or an arrangement we can work out together.</p></div><a className="button button-wide" href={REQUEST_FORM_URL}>Tell us about your pet <span aria-hidden="true">↗</span></a><small id="request-form-coming-soon">Request form link coming soon.</small></div></div></section>
    <footer className="site-footer page-shell"><a className="wordmark footer-mark" href="#top"><span>CAN I PET</span><span>YOUR DOG</span><em className="title-subtitle">(or cat)</em></a><p>Flexible pet care with Alex and Morgan in Durham, North Carolina.</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}
