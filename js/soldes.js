let depenses = [
  {
    id: 1,
    groupeId: 1, // Summer vacation
    titre: "Courses",
    montant: 300,
    categorie: "Alimentation",
    date: "2026-10-28",
    payeurId: 1,
    parts: [
      { membreId: 1, montant: 100 },
      { membreId: 2, montant: 100 },
      { membreId: 3, montant: 100 },
    ],
  },

  {
    id: 2,
    groupeId: 1,
    titre: "Essence",
    montant: 180,
    categorie: "Transport",
    date: "2026-10-29",
    payeurId: 2,
    parts: [
      { membreId: 1, montant: 60 },
      { membreId: 2, montant: 60 },
      { membreId: 3, montant: 60 },
    ],
  },

  {
    id: 3,
    groupeId: 1,
    titre: "Restaurant",
    montant: 450,
    categorie: "Restaurant",
    date: "2026-10-30",
    payeurId: 3,
    parts: [
      { membreId: 1, montant: 150 },
      { membreId: 2, montant: 150 },
      { membreId: 3, montant: 150 },
    ],
  },

  {
    id: 4,
    groupeId: 2, // Weekend trip
    titre: "Hébergement",
    montant: 1000,
    categorie: "Logement",
    date: "2026-10-24",
    payeurId: 4,
    parts: [
      { membreId: 4, montant: 500 },
      { membreId: 5, montant: 500 },
    ],
  },

  {
    id: 5,
    groupeId: 2,
    titre: "Transport",
    montant: 240,
    categorie: "Transport",
    date: "2026-10-25",
    payeurId: 5,
    parts: [
      { membreId: 4, montant: 120 },
      { membreId: 5, montant: 120 },
    ],
  },
];

let remboursements = [
  {
    id: 1,
    groupeId: 1,
    deId: 1,  // Member 1 pays
    versId: 3, // Member 3 receives
    montant: 10,
    date: "2026-10-31",
  },

  {
    id: 2,
    groupeId: 1,
    deId: 2,
    versId: 3,
    montant: 130,
    date: "2026-10-31",
  },

  {
    id: 3,
    groupeId: 2,
    deId: 5,
    versId: 4,
    montant: 380,
    date: "2026-10-26",
  },
];