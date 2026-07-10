const features = [
  { number: "01", title: "Open-knee support shape", text: "A sleeve concept with an open patella area that keeps the original display-board silhouette front and center." },
  { number: "02", title: "Adjustable comfort straps", text: "Two wide wrap straps are imagined to help explore fit and everyday adjustability." },
  { number: "03", title: "Electrode-pad concept", text: "Grey contact zones reflect Evelyn’s early idea for a TENS-compatible attachment area, still to be tested and engineered." },
  { number: "04", title: "Rechargeable module", text: "A compact lower-leg module is visualized as a future home for the product’s control and charging concept." },
];

const steps = [
  ["Wrap", "Place the sleeve around the knee and align the open circle."],
  ["Adjust", "Use the upper and lower straps to explore a comfortable fit."],
  ["Connect", "A future prototype could test the pad and module ideas under adult guidance."],
  ["Learn", "Gather comfort and usability feedback to guide the next iteration."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="BraceTEN home"><span className="mark" aria-hidden="true">✦</span> Brace<span>TEN</span></a>
        <div className="nav-links"><a href="#story">The idea</a><a href="#details">Prototype vision</a><a href="#gallery">Process</a></div>
        <a className="nav-cta" href="#future">See what’s next <span aria-hidden="true">↘</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Student inventor concept · by Evelyn Ma</p>
          <h1>Support the <em>journey,</em><br />not just the knee.</h1>
          <p className="hero-lede">BraceTEN is Evelyn’s early concept for a more thoughtful, adjustable knee-support prototype—created to explore comfort, wearability, and future feedback features.</p>
          <div className="hero-actions"><a className="button button-dark" href="#story">Explore the concept <span aria-hidden="true">→</span></a><a className="text-link" href="#gallery">View the original work <span aria-hidden="true">↘</span></a></div>
          <p className="concept-note">Concept only · Not a manufactured or medical product</p>
        </div>
        <div className="hero-visual"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-label label-top"><b>01</b> Open-knee sleeve</div><div className="hero-label label-bottom"><b>04</b> Rechargeable module</div><div className="hero-image-wrap"><img src="/images/braceten-hero-concept.png" alt="BraceTEN knee support concept render on a lower leg" /><span className="image-tag">Prototype Vision</span></div></div>
      </section>

      <section className="intro-strip" aria-label="Concept summary"><p>Built from one simple question</p><h2>How might knee support feel more <em>personal, wearable,</em> and easier to refine?</h2><p className="intro-detail">A school-project concept inspired by watching a loved one move through everyday life with knee discomfort.</p></section>

      <section className="story section" id="story">
        <div className="section-kicker"><span>01</span> The starting point</div>
        <div className="story-grid"><div><h2>A real observation<br />became a <em>design question.</em></h2><p className="body-large">Evelyn noticed how knee discomfort could change the way a family member approached everyday movement. Her project started by asking what a knee-support idea could do differently: feel less one-size-fits-all, adapt more easily, and leave room to learn from use.</p></div><aside className="quote-card"><span className="quote-mark">“</span><p>Make knee-pain support more <strong>affordable, wearable, and trackable.</strong></p><small>— the original BraceTEN mission</small></aside></div>
        <div className="problem-cards"><article><span>What she saw</span><h3>Support can feel separate from daily routines.</h3></article><article><span>What she imagined</span><h3>One wearable concept that brings fit, support, and future feedback ideas together.</h3></article><article><span>What stays true</span><h3>The project is a starting point for questions, testing, and learning—not a finished promise.</h3></article></div>
      </section>

      <section className="use-section"><div className="use-image"><img src="/images/braceten-in-use-concept.png" alt="Concept image of an adult adjusting the BraceTEN knee-support prototype on a park bench" /><span className="image-tag">Prototype Vision</span></div><div className="use-copy"><p className="eyebrow"><span /> Designed around everyday moments</p><h2>A concept meant to be <em>seen in use.</em></h2><p>From a walk outside to sitting down after activity, the site visualizes a clear, human use case without overstating what the prototype can do.</p><div className="small-rule" /><p className="small-copy">The illustrated use case is a concept render. Any real testing would need appropriate adult, product-design, and clinical guidance.</p></div></section>

      <section className="section features" id="details"><div className="section-kicker"><span>02</span> Prototype vision</div><div className="features-heading"><h2>Every detail starts with<br />an <em>intentional question.</em></h2><p>These visualized elements trace directly back to Evelyn’s display-board annotations and are presented as a concept direction for future prototyping.</p></div><div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.number}><span>{feature.number}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>

      <section className="exploded-section"><div className="exploded-copy"><p className="eyebrow"><span /> A closer look</p><h2>One idea.<br /><em>Thoughtfully layered.</em></h2><p>Use the view below to trace the major concept areas: adjustable wraps, structural side rails, skin-contact pad zones, and a removable lower module.</p><small>Illustrative component layout · Concept render</small></div><div className="exploded-image"><img src="/images/braceten-exploded-concept.png" alt="Exploded product concept render showing BraceTEN sleeve, straps, side rails, pads, and lower module" /><span className="callout callout-left">Adjustable<br />wrap straps</span><span className="callout callout-right">Textured contact<br />pad zones</span><span className="callout callout-bottom">Removable lower module</span></div></section>

      <section className="section how"><div className="section-kicker"><span>03</span> A future interaction</div><div className="how-heading"><h2>Simple enough to<br /><em>understand at a glance.</em></h2><p>A website flow based on the original product sketch—not an instruction manual or a claim of current functionality.</p></div><ol className="steps">{steps.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>

      <section className="gallery section" id="gallery"><div className="section-kicker"><span>04</span> From early thought to prototype vision</div><div className="gallery-heading"><h2>The original idea is<br /><em>the whole point.</em></h2><p>These images keep the real school-project materials alongside the generated concept visuals, so the journey remains clear and honest.</p></div><div className="gallery-grid"><figure className="gallery-item board"><img src="/images/original-display-board.png" alt="Original BraceTEN display board created by Evelyn Ma" /><figcaption><span>Original Concept</span><b>Display board & annotations</b></figcaption></figure><figure className="gallery-item sketch"><img src="/images/original-sketch.jpeg" alt="Original notebook sketch for the BraceTEN product idea" /><figcaption><span>Original Concept</span><b>Notebook sketch</b></figcaption></figure><figure className="gallery-item render"><img src="/images/braceten-hero-concept.png" alt="Generated BraceTEN product prototype vision" /><figcaption><span>Prototype Vision</span><b>Generated concept render</b></figcaption></figure></div></section>

      <section className="future section" id="future"><div className="future-top"><div><p className="eyebrow"><span /> Still at the beginning</p><h2>What Evelyn could<br />explore <em>next.</em></h2></div><p>Early concepts become stronger through safe, practical questions. These are future areas for prototyping—not promises about a product’s performance.</p></div><div className="future-list"><article><b>01</b><h3>Comfort & fit study</h3><p>Compare materials, sizing ideas, and ease of adjusting the straps.</p></article><article><b>02</b><h3>Safe concept testing</h3><p>Ask qualified adults how to evaluate comfort and non-medical usability appropriately.</p></article><article><b>03</b><h3>Feedback loop</h3><p>Collect simple observations about when and how a prototype may feel easiest to wear.</p></article><article><b>04</b><h3>Build refinement</h3><p>Explore lower-impact materials and a clearer removable-module design.</p></article></div></section>

      <section className="inventor"><div className="inventor-card"><span className="eyebrow"><i /> Created by Evelyn Ma</span><h2>Big ideas can start<br />with <em>paying attention.</em></h2><p>BraceTEN is a student inventor project: a thoughtful response to an everyday observation, translated into a product concept worth exploring.</p><a className="button button-light" href="#gallery">See the design journey <span aria-hidden="true">→</span></a></div></section>
      <footer><a className="wordmark" href="#top"><span className="mark" aria-hidden="true">✦</span> Brace<span>TEN</span></a><p>Student inventor concept · Original work by Evelyn Ma</p><p>Concept visuals are generated illustrations, not product photographs.</p></footer>
    </main>
  );
}
