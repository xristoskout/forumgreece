import Link from "next/link";

export default function TravelToGreecePage() {
  const forums = [
    {
      title: "Forum Greece",
      place: "Όλη η Ελλάδα",
      description:
        "Η βασική κεντρική κοινότητα για ταξίδια, εμπειρίες, ερωτήσεις και προτάσεις.",
      href: "https://facebook.com",
    },
    {
      title: "Forum Santorini",
      place: "Σαντορίνη",
      description:
        "Συζητήσεις για διαμονή, αξιοθέατα, παραλίες, ηλιοβασίλεμα και τοπικές εμπειρίες.",
      href: "https://facebook.com",
    },
    {
      title: "Forum Corfu",
      place: "Κέρκυρα",
      description:
        "Όλα για παραλίες, φαγητό, χωριά, αξιοθέατα και ταξιδιωτικές συμβουλές.",
      href: "https://facebook.com",
    },
    {
      title: "Forum Kefalonia",
      place: "Κεφαλονιά",
      description:
        "Προτάσεις για οικογενειακές διακοπές, ζευγάρια, παραλίες και εκδρομές.",
      href: "https://facebook.com",
    },
    {
      title: "Forum Crete",
      place: "Κρήτη",
      description:
        "Οδηγοί για πόλεις, παραδοσιακά χωριά, φαγητό και μοναδικές παραλίες.",
      href: "https://facebook.com",
    },
    {
      title: "Forum Nafplio",
      place: "Ναύπλιο",
      description:
        "Ιδέες για ρομαντικές αποδράσεις, φαγητό, βόλτες και αξιοθέατα.",
      href: "https://facebook.com",
    },
    {
      title: "Forum Thessaloniki",
      place: "Θεσσαλονίκη",
      description:
        "Η πόλη, οι γεύσεις, η νυχτερινή ζωή και τα πιο ενδιαφέροντα σημεία.",
      href: "https://facebook.com",
    },
    {
      title: "Forum Halkidiki",
      place: "Χαλκιδική",
      description:
        "Παραλίες, beach bars, οικογενειακές διακοπές και τοπικές προτάσεις.",
      href: "https://facebook.com",
    },
    {
      title: "Forum Lefkada",
      place: "Λευκάδα",
      description:
        "Παραλίες, χωριά, μετακινήσεις και ταξιδιωτικές εμπειρίες στο νησί.",
      href: "https://facebook.com",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-amber-50 text-slate-900">
      <section className="bg-gradient-to-br from-sky-600 via-cyan-500 to-amber-300 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/85">
                ForumGreece
              </p>
              <h1 className="mt-3 text-4xl font-bold md:text-6xl">
                Travel to Greece
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90">
                Όλα τα Facebook forums για νησιά, πόλεις, παραλίες και τουριστικούς
                προορισμούς της Ελλάδας, συγκεντρωμένα σε μία σελίδα.
              </p>
            </div>

            <Link
              href="/"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5"
            >
              ← Επιστροφή στην αρχική
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-[2rem] border border-cyan-100 bg-white/90 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Ανακάλυψε όλες τις κοινότητες
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Σε αυτή τη σελίδα θα προσθέτεις σταδιακά όλα τα νέα Facebook forums που
            θα κατασκευάζεις. Προς το παρόν τα links είναι ενδεικτικά και μπορείς
            να τα αλλάξεις ένα-ένα με τα πραγματικά URLs των ομάδων σου.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {forums.map((forum) => (
            <article
              key={forum.title}
              className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-white to-cyan-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-100"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-3xl">🌴</div>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                  {forum.place}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold leading-snug">
                {forum.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {forum.description}
              </p>

              <a
                href={forum.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                Άνοιγμα Facebook forum
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-semibold text-slate-800">Travel to Greece</span>{" "}
            — η σελίδα με όλα τα ταξιδιωτικά forums του ForumGreece.
          </div>

          <div className="flex gap-5">
            <Link href="/" className="hover:text-slate-800">
              Home
            </Link>
            <a href="#" className="hover:text-slate-800">
              Contact
            </a>
            <a href="#" className="hover:text-slate-800">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}