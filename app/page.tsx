export default function HomePage() {
  const categories = [
    {
      title: "Νέα Ελλάδας",
      description: "Ειδήσεις, τοπικά νέα και χρήσιμες ενημερώσεις από όλη τη χώρα.",
      emoji: "📰",
    },
    {
      title: "Ταξιδιωτικές Εμπειρίες",
      description: "Αληθινές εμπειρίες, ιδέες για εκδρομές και ξεχωριστοί προορισμοί.",
      emoji: "✈️",
    },
    {
      title: "Ελληνική Κουζίνα",
      description: "Τοπικές γεύσεις, συνταγές, ταβέρνες και γαστρονομικές προτάσεις.",
      emoji: "🍽️",
    },
    {
      title: "Παραλίες",
      description: "Οι πιο όμορφες παραλίες της Ελλάδας με συμβουλές και προτάσεις.",
      emoji: "🏖️",
    },
    {
      title: "Νησιά",
      description: "Οδηγοί για νησιά, κρυφά σημεία, διαμονή και εμπειρίες.",
      emoji: "⛵",
    },
    {
      title: "Πόλεις",
      description: "Τι να δεις, πού να φας και τι να κάνεις σε πόλεις της Ελλάδας.",
      emoji: "🏙️",
    },
  ];

  const featuredArticles = [
    {
      title: "10 μέρη που αξίζει να δεις στη Σαντορίνη πέρα από την Οία",
      category: "Νησιά",
      excerpt:
        "Μια πιο αυθεντική ματιά στη Σαντορίνη, με προτάσεις για χωριά, παραλίες και τοπικές γεύσεις.",
    },
    {
      title: "Σαββατοκύριακο στο Ναύπλιο: βόλτες, φαγητό και ωραία σημεία",
      category: "Ταξιδιωτικές Εμπειρίες",
      excerpt:
        "Ένας σύντομος οδηγός για να οργανώσεις εύκολα μια όμορφη απόδραση στο Ναύπλιο.",
    },
    {
      title: "Οι καλύτερες παραλίες στην Κεφαλονιά για οικογένειες και ζευγάρια",
      category: "Παραλίες",
      excerpt:
        "Από τον Μύρτο μέχρι μικρότερες πιο ήσυχες επιλογές, με χρήσιμες συμβουλές πρόσβασης.",
    },
  ];

  const destinations = ["Σαντορίνη", "Κέρκυρα", "Ναύπλιο", "Κεφαλονιά", "Θεσσαλονίκη", "Κρήτη"];

  const businesses = [
    {
      name: "Aegean Stay Hotel",
      place: "Σαντορίνη",
      info: "Boutique διαμονή με θέα στην καλντέρα.",
    },
    {
      name: "Taverna To Limani",
      place: "Ναύπλιο",
      info: "Παραδοσιακές ελληνικές γεύσεις δίπλα στη θάλασσα.",
    },
    {
      name: "Blue Waves Rentals",
      place: "Κέρκυρα",
      info: "Ενοικιάσεις αυτοκινήτων και scooter για τουριστικές διαδρομές.",
    },
  ];

  const groups = [
    {
      name: "ForumGreece Travel Community",
      description: "Συζητήσεις, προτάσεις και ταξιδιωτικές εμπειρίες από όλη την Ελλάδα.",
    },
    {
      name: "Greek Islands Lovers",
      description: "Ιδέες για νησιά, ξενοδοχεία, παραλίες και καλοκαιρινές αποδράσεις.",
    },
    {
      name: "Γεύσεις της Ελλάδας",
      description: "Τοπικές γεύσεις, συνταγές, φούρνοι, ταβέρνες και παραδοσιακά προϊόντα.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-2xl font-bold tracking-tight text-sky-900">ForumGreece</div>
            <div className="text-sm text-slate-500">Η Ελλάδα σε άρθρα, εμπειρίες και κοινότητες</div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#categories" className="hover:text-sky-700">Κατηγορίες</a>
            <a href="#articles" className="hover:text-sky-700">Άρθρα</a>
            <a href="#businesses" className="hover:text-sky-700">Επιχειρήσεις</a>
            <a href="#groups" className="hover:text-sky-700">Facebook Groups</a>
          </nav>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-900 via-sky-800 to-cyan-700 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
              Travel portal • Articles • Communities • Local ads
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Ανακάλυψε την Ελλάδα μέσα από άρθρα, προορισμούς και τοπικές προτάσεις
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-sky-50/90">
              Το ForumGreece είναι ένας σύγχρονος χώρος με νέα, ταξιδιωτικές εμπειρίες,
              παραλίες, ελληνική κουζίνα, οδηγούς πόλεων και προβολή τοπικών επιχειρήσεων.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#articles"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5"
              >
                Δες τα άρθρα
              </a>
              <a
                href="#groups"
                className="rounded-2xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Μπες στις κοινότητες
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <div className="text-3xl">🏝️</div>
              <h3 className="mt-4 text-xl font-semibold">Προορισμοί</h3>
              <p className="mt-2 text-sm text-white/85">
                Οδηγοί για νησιά, πόλεις, χωριά και ταξιδιωτικές αποδράσεις.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <div className="text-3xl">🍴</div>
              <h3 className="mt-4 text-xl font-semibold">Γεύσεις</h3>
              <p className="mt-2 text-sm text-white/85">
                Κουζίνα, τοπικά προϊόντα, συνταγές και προτάσεις φαγητού.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <div className="text-3xl">📢</div>
              <h3 className="mt-4 text-xl font-semibold">Τοπικές Επιχειρήσεις</h3>
              <p className="mt-2 text-sm text-white/85">
                Προβολή επιχειρήσεων και διαφημιστικών καταχωρήσεων ανά περιοχή.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <div className="text-3xl">👥</div>
              <h3 className="mt-4 text-xl font-semibold">Κοινότητες</h3>
              <p className="mt-2 text-sm text-white/85">
                Σύνδεση με ομάδες και συζητήσεις στο Facebook και πέρα από αυτό.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Κατηγορίες</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Όλο το περιεχόμενο οργανωμένο σωστά</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">
            Έτσι μπορεί ο επισκέπτης να βρίσκει εύκολα νέα, εμπειρίες, παραλίες, κουζίνα και χρήσιμες πληροφορίες.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl">{item.emoji}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="articles" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Featured άρθρα</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Προτεινόμενο περιεχόμενο</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <article
                key={article.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-lg"
              >
                <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                  {article.category}
                </span>
                <h3 className="mt-4 text-2xl font-semibold leading-snug">{article.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                <a href="#" className="mt-6 inline-block text-sm font-semibold text-sky-800 hover:text-sky-950">
                  Διαβάστε περισσότερα →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-sky-900 p-8 text-white shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Δημοφιλείς προορισμοί</p>
            <h2 className="mt-2 text-3xl font-bold">Μέρη που τραβούν το ενδιαφέρον</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {destinations.map((place) => (
                <div key={place} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <div className="text-lg font-semibold">{place}</div>
                  <div className="mt-1 text-sm text-sky-100/85">
                    Ιδέες για άρθρα, οδηγούς, επιχειρήσεις και communities.
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Χώρος διαφήμισης</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Προβολή τοπικής επιχείρησης</h3>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              Εδώ μπορεί να μπει premium καταχώρηση, banner ή χορηγούμενη πρόταση για επιχείρηση από κάποιον προορισμό της Ελλάδας.
            </p>
            <button className="mt-6 rounded-2xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600">
              Διαφήμισε την επιχείρησή σου
            </button>
          </aside>
        </div>
      </section>

      <section id="businesses" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Τοπικές επιχειρήσεις</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Ενδεικτικές διαφημιστικές καταχωρήσεις</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {businesses.map((business) => (
              <article key={business.name} className="rounded-3xl border border-slate-200 p-6 shadow-sm transition hover:shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{business.name}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {business.place}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{business.info}</p>
                <a href="#" className="mt-5 inline-block text-sm font-semibold text-sky-800 hover:text-sky-950">
                  Μάθε περισσότερα →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="groups" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Communities</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Σύνδεση με Facebook groups</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {groups.map((group) => (
            <article key={group.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="text-3xl">👥</div>
              <h3 className="mt-4 text-xl font-semibold">{group.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{group.description}</p>
              <a href="#" className="mt-5 inline-block text-sm font-semibold text-sky-800 hover:text-sky-950">
                Δες την ομάδα →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
            <h2 className="text-3xl font-bold md:text-4xl">Θες να στήσεις ένα δυνατό portal για την Ελλάδα;</h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              Αυτή είναι μια δυνατή αρχική βάση για το ForumGreece. Στο επόμενο βήμα μπορούμε να βάλουμε ξεχωριστές σελίδες για άρθρα, προορισμούς, επιχειρήσεις και αληθινά links από Facebook groups.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#categories" className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950">
                Δες τη δομή
              </a>
              <a href="#businesses" className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white">
                Δες τις καταχωρήσεις
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-semibold text-slate-800">ForumGreece</span> — άρθρα, εμπειρίες, προορισμοί και τοπικές επιχειρήσεις.
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-800">About</a>
            <a href="#" className="hover:text-slate-800">Contact</a>
            <a href="#" className="hover:text-slate-800">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
