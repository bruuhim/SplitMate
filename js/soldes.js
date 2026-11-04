let depenses = [
  // Weekend Trip
  {
    id: 1,
    groupeId: 1793713729675,
    titre: "Hotel",
    montant: 900,
    categorie: "Hébergement",
    date: "2026-10-28",
    payeurId: 1793713810743, // Brahim
    methodeRepartition: "equal",
    parts: [
      { membreId: 1793713810743, montant: 300 },
      { membreId: 1793714076436, montant: 300 },
      { membreId: 1793716180219, montant: 300 },
    ],
  },
  {
    id: 2,
    groupeId: 1793713729675,
    titre: "Fuel",
    montant: 300,
    categorie: "Transport",
    date: "2026-10-29",
    payeurId: 1793714076436, // Amine
    methodeRepartition: "equal",
    parts: [
      { membreId: 1793713810743, montant: 100 },
      { membreId: 1793714076436, montant: 100 },
      { membreId: 1793716180219, montant: 100 },
    ],
  },
  {
    id: 3,
    groupeId: 1793713729675,
    titre: "Restaurant",
    montant: 240,
    categorie: "Restaurant",
    date: "2026-10-30",
    payeurId: 1793716180219, // Mohammed
    methodeRepartition: "equal",
    parts: [
      { membreId: 1793713810743, montant: 80 },
      { membreId: 1793714076436, montant: 80 },
      { membreId: 1793716180219, montant: 80 },
    ],
  },

  // Summer vacation
  {
    id: 4,
    groupeId: 1793713804900,
    titre: "Hotel Booking",
    montant: 1200,
    categorie: "Hébergement",
    date: "2026-10-29",
    payeurId: 1793714056331, // Alex
    methodeRepartition: "equal",
    parts: [
      { membreId: 1793713810743, montant: 300 },
      { membreId: 1793714056331, montant: 300 },
      { membreId: 1793714076436, montant: 300 },
      { membreId: 1793716217683, montant: 300 },
    ],
  },
  {
    id: 5,
    groupeId: 1793713804900,
    titre: "Dinner",
    montant: 400,
    categorie: "Restaurant",
    date: "2026-10-30",
    payeurId: 1793713810743, // Brahim
    methodeRepartition: "equal",
    parts: [
      { membreId: 1793713810743, montant: 100 },
      { membreId: 1793714056331, montant: 100 },
      { membreId: 1793714076436, montant: 100 },
      { membreId: 1793716217683, montant: 100 },
    ],
  },

  // New Year Party
  {
    id: 6,
    groupeId: 1793716581811,
    titre: "Party Decorations",
    montant: 150,
    categorie: "Autre",
    date: "2026-11-03",
    payeurId: 1793782303184, // Manal
    methodeRepartition: "equal",
    parts: [
      { membreId: 1793782303184, montant: 150 },
    ],
  },
];

let remboursements = [
  // Weekend Trip
  {
    id: 1,
    groupeId: 1793713729675,
    deId: 1793714076436, // Amine
    versId: 1793713810743, // Brahim
    montant: 180,
    date: "2026-10-31",
  },
  {
    id: 2,
    groupeId: 1793713729675,
    deId: 1793716180219, // Mohammed
    versId: 1793713810743, // Brahim
    montant: 240,
    date: "2026-10-31",
  },

  // Summer vacation
  {
    id: 3,
    groupeId: 1793713804900,
    deId: 1793714076436, // Amine
    versId: 1793714056331, // Alex
    montant: 400,
    date: "2026-11-01",
  },
  {
    id: 4,
    groupeId: 1793713804900,
    deId: 1793716217683, // Yassine
    versId: 1793714056331, // Alex
    montant: 200,
    date: "2026-11-01",
  },
  {
    id: 5,
    groupeId: 1793713804900,
    deId: 1793716217683, // Yassine
    versId: 1793713810743, // Brahim
    montant: 200,
    date: "2026-11-01",
  },
];