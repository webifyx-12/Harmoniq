const features = [
  {
    title: "Crystal UI",
    description:
      "Glassy layers and soft borders bring a translucent depth to every panel.",
  },
  {
    title: "Ambient Colors",
    description:
      "Gradient lighting and subtle shadows create a modern visual rhythm.",
  },
  {
    title: "Focused Flow",
    description:
      "Clean spacing and typography keep the interface elegant and easy to scan.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="background-orb orb-cyan" />
      <div className="background-orb orb-purple" />

      <section className="hero glass-card">
        <p className="eyebrow">Harmoniq</p>
        <h1>Feel the future of your music dashboard.</h1>
        <p className="hero-copy">
          Redesigned with modern gradients, translucent cards, and smooth depth so
          every interaction feels premium.
        </p>

        <div className="button-row">
          <button className="btn btn-primary">Start listening</button>
          <button className="btn btn-secondary">Explore themes</button>
        </div>
      </section>

      <section className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card glass-card">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
