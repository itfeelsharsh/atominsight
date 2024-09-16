const elements = [
  {
    symbol: "H",
    name: "Hydrogen",
    number: 1,
    atomic_mass: 1.008,
    category: "nonmetal",
    summary: "Hydrogen is the lightest element. It is the most abundant chemical substance in the Universe, constituting roughly 75% of all normal matter by mass.",
    xpos: 1, ypos: 1,
    wikipedia: "https://en.wikipedia.org/wiki/Hydrogen"
  },
  {
    symbol: "He",
    name: "Helium",
    number: 2,
    atomic_mass: 4.0026,
    category: "noble gas",
    summary: "Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas. It is the second most abundant element in the universe.",
    xpos: 18, ypos: 1,
    wikipedia: "https://en.wikipedia.org/wiki/Helium"
  },
  {
    symbol: "Li",
    name: "Lithium",
    number: 3,
    atomic_mass: 6.94,
    category: "alkali metal",
    summary: "Lithium is a soft, silvery-white alkali metal. It is the lightest metal and the least dense solid element.",
    xpos: 1, ypos: 2,
    wikipedia: "https://en.wikipedia.org/wiki/Lithium"
  },
  {
    symbol: "Be",
    name: "Beryllium",
    number: 4,
    atomic_mass: 9.0122,
    category: "alkaline earth metal",
    summary: "Beryllium is a steel-gray metal that is relatively rare. It is primarily used as a hardening agent in alloys.",
    xpos: 2, ypos: 2,
    wikipedia: "https://en.wikipedia.org/wiki/Beryllium"
  },
  {
    symbol: "B",
    name: "Boron",
    number: 5,
    atomic_mass: 10.81,
    category: "metalloid",
    summary: "Boron is a metalloid essential for the growth of plants. It is used in glass and ceramics, and as a neutron absorber in nuclear reactors.",
    xpos: 13, ypos: 2,
    wikipedia: "https://en.wikipedia.org/wiki/Boron"
  },
  {
    symbol: "C",
    name: "Carbon",
    number: 6,
    atomic_mass: 12.011,
    category: "nonmetal",
    summary: "Carbon is a nonmetal that is the basis of all known life. It can form a vast number of compounds, and is found in all known life forms.",
    xpos: 14, ypos: 2,
    wikipedia: "https://en.wikipedia.org/wiki/Carbon"
  },
  {
    symbol: "N",
    name: "Nitrogen",
    number: 7,
    atomic_mass: 14.007,
    category: "nonmetal",
    summary: "Nitrogen is a colorless, odorless gas that makes up about 78% of Earth's atmosphere. It is essential for life and is a key component of amino acids and nucleic acids.",
    xpos: 15, ypos: 2,
    wikipedia: "https://en.wikipedia.org/wiki/Nitrogen"
  },
  {
    symbol: "O",
    name: "Oxygen",
    number: 8,
    atomic_mass: 15.999,
    category: "nonmetal",
    summary: "Oxygen is essential for respiration in most living organisms. It is the most abundant element in Earth's crust and makes up about 21% of Earth's atmosphere.",
    xpos: 16, ypos: 2,
    wikipedia: "https://en.wikipedia.org/wiki/Oxygen"
  },
  {
    symbol: "F",
    name: "Fluorine",
    number: 9,
    atomic_mass: 18.998,
    category: "halogen",
    summary: "Fluorine is a highly reactive and corrosive gas. It is the most electronegative and reactive of all elements.",
    xpos: 17, ypos: 2,
    wikipedia: "https://en.wikipedia.org/wiki/Fluorine"
  },
  {
    symbol: "Ne",
    name: "Neon",
    number: 10,
    atomic_mass: 20.180,
    category: "noble gas",
    summary: "Neon is a colorless, odorless gas that is used in neon signs. It is one of the noble gases and is inert and non-reactive.",
    xpos: 18, ypos: 2,
    wikipedia: "https://en.wikipedia.org/wiki/Neon"
  },
  {
    symbol: "Na",
    name: "Sodium",
    number: 11,
    atomic_mass: 22.990,
    category: "alkali metal",
    summary: "Sodium is a soft, silvery-white metal that is highly reactive, particularly with water. It is essential for nerve function in living organisms.",
    xpos: 1, ypos: 3,
    wikipedia: "https://en.wikipedia.org/wiki/Sodium"
  },
  {
    symbol: "Mg",
    name: "Magnesium",
    number: 12,
    atomic_mass: 24.305,
    category: "alkaline earth metal",
    summary: "Magnesium is a shiny gray solid. It is essential for many biological functions and is commonly used in alloys to improve strength and durability.",
    xpos: 2, ypos: 3,
    wikipedia: "https://en.wikipedia.org/wiki/Magnesium"
  },
  {
    symbol: "Al",
    name: "Aluminum",
    number: 13,
    atomic_mass: 26.982,
    category: "post-transition metal",
    summary: "Aluminum is a lightweight, silvery metal. It is the third most abundant element in the Earth's crust and is used in a wide variety of applications.",
    xpos: 13, ypos: 3,
    wikipedia: "https://en.wikipedia.org/wiki/Aluminium"
  },
  {
    symbol: "Si",
    name: "Silicon",
    number: 14,
    atomic_mass: 28.085,
    category: "metalloid",
    summary: "Silicon is a metalloid with properties between metals and nonmetals. It is used extensively in electronics and as a structural material.",
    xpos: 14, ypos: 3,
    wikipedia: "https://en.wikipedia.org/wiki/Silicon"
  },
  {
    symbol: "P",
    name: "Phosphorus",
    number: 15,
    atomic_mass: 30.974,
    category: "nonmetal",
    summary: "Phosphorus is essential for life, playing a key role in biological molecules like DNA and ATP. It is also used in fertilizers and detergents.",
    xpos: 15, ypos: 3,
    wikipedia: "https://en.wikipedia.org/wiki/Phosphorus"
  },
  {
    symbol: "S",
    name: "Sulfur",
    number: 16,
    atomic_mass: 32.06,
    category: "nonmetal",
    summary: "Sulfur is a nonmetal known for its role in various biological and industrial processes. It is commonly found in minerals and is used in fertilizers and pharmaceuticals.",
    xpos: 16, ypos: 3,
    wikipedia: "https://en.wikipedia.org/wiki/Sulfur"
  },
  {
    symbol: "Cl",
    name: "Chlorine",
    number: 17,
    atomic_mass: 35.45,
    category: "halogen",
    summary: "Chlorine is a greenish-yellow gas with strong disinfectant properties. It is used in water treatment and in the production of many everyday chemicals.",
    xpos: 17, ypos: 3,
    wikipedia: "https://en.wikipedia.org/wiki/Chlorine"
  },
  {
    symbol: "Ar",
    name: "Argon",
    number: 18,
    atomic_mass: 39.948,
    category: "noble gas",
    summary: "Argon is a colorless, odorless gas used in inert gas welding and lighting. It is the third most abundant gas in the Earth's atmosphere.",
    xpos: 18, ypos: 3,
    wikipedia: "https://en.wikipedia.org/wiki/Argon"
  },
  {
    symbol: "K",
    name: "Potassium",
    number: 19,
    atomic_mass: 39.098,
    category: "alkali metal",
    summary: "Potassium is a highly reactive metal that is essential for various physiological processes. It is commonly found in fertilizers and is used in various industrial processes.",
    xpos: 1, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Potassium"
  },
  {
    symbol: "Ca",
    name: "Calcium",
    number: 20,
    atomic_mass: 40.078,
    category: "alkaline earth metal",
    summary: "Calcium is a vital element for biological organisms, particularly for bones and teeth. It is also used in various industrial applications.",
    xpos: 2, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Calcium"
  },
  {
    symbol: "Sc",
    name: "Scandium",
    number: 21,
    atomic_mass: 44.956,
    category: "transition metal",
    summary: "Scandium is a rare, lightweight metal used in alloys to improve strength and stability. It has applications in aerospace and electronics.",
    xpos: 3, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Scandium"
  },
  {
    symbol: "Ti",
    name: "Titanium",
    number: 22,
    atomic_mass: 47.867,
    category: "transition metal",
    summary: "Titanium is a strong, corrosion-resistant metal used in aerospace, medical implants, and as a pigment in paints.",
    xpos: 4, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Titanium"
  },
  {
    symbol: "V",
    name: "Vanadium",
    number: 23,
    atomic_mass: 50.942,
    category: "transition metal",
    summary: "Vanadium is used to produce strong steel alloys and is important in various chemical reactions.",
    xpos: 5, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Vanadium"
  },
  {
    symbol: "Cr",
    name: "Chromium",
    number: 24,
    atomic_mass: 51.996,
    category: "transition metal",
    summary: "Chromium is used for its hardness and corrosion resistance. It is a key component in stainless steel and various other alloys.",
    xpos: 6, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Chromium"
  },
  {
    symbol: "Mn",
    name: "Manganese",
    number: 25,
    atomic_mass: 54.938,
    category: "transition metal",
    summary: "Manganese is essential for steel production and is involved in various biological processes.",
    xpos: 7, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Manganese"
  },
  {
    symbol: "Fe",
    name: "Iron",
    number: 26,
    atomic_mass: 55.845,
    category: "transition metal",
    summary: "Iron is a widely used metal found in steel and various alloys. It is essential for biological functions, particularly in hemoglobin.",
    xpos: 8, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Iron"
  },
  {
    symbol: "Co",
    name: "Cobalt",
    number: 27,
    atomic_mass: 58.933,
    category: "transition metal",
    summary: "Cobalt is used in batteries, magnets, and as a catalyst in various chemical reactions. It is also a vital component in vitamin B12.",
    xpos: 9, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Cobalt"
  },
  {
    symbol: "Ni",
    name: "Nickel",
    number: 28,
    atomic_mass: 58.933,
    category: "transition metal",
    summary: "Nickel is used to make stainless steel and other alloys. It is also used in coins and rechargeable batteries.",
    xpos: 10, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Nickel"
  },
  {
    symbol: "Cu",
    name: "Copper",
    number: 29,
    atomic_mass: 63.546,
    category: "transition metal",
    summary: "Copper is a highly conductive metal used in electrical wiring, plumbing, and various alloys. It has been used by humans for thousands of years.",
    xpos: 11, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Copper"
  },
  {
    symbol: "Zn",
    name: "Zinc",
    number: 30,
    atomic_mass: 65.38,
    category: "transition metal",
    summary: "Zinc is used in galvanization to protect iron and steel from corrosion. It is also an essential trace element for living organisms.",
    xpos: 12, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Zinc"
  },
  {
    symbol: "Ga",
    name: "Gallium",
    number: 31,
    atomic_mass: 69.723,
    category: "post-transition metal",
    summary: "Gallium is used in electronics and LED technology. It is a soft metal that melts just above room temperature.",
    xpos: 13, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Gallium"
  },
  {
    symbol: "Ge",
    name: "Germanium",
    number: 32,
    atomic_mass: 72.63,
    category: "metalloid",
    summary: "Germanium is used in semiconductors and fiber optics. It is similar to silicon in its properties.",
    xpos: 14, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Germanium"
  },
  {
    symbol: "As",
    name: "Arsenic",
    number: 33,
    atomic_mass: 74.922,
    category: "metalloid",
    summary: "Arsenic is known for its toxicity but has applications in semiconductors and various alloys.",
    xpos: 15, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Arsenic"
  },
  {
    symbol: "Se",
    name: "Selenium",
    number: 34,
    atomic_mass: 78.971,
    category: "nonmetal",
    summary: "Selenium is used in electronics, glassmaking, and as a dietary supplement. It is essential in small amounts for proper cellular function.",
    xpos: 16, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Selenium"
  },
  {
    symbol: "Br",
    name: "Bromine",
    number: 35,
    atomic_mass: 79.904,
    category: "halogen",
    summary: "Bromine is a reddish-brown liquid at room temperature and is used in flame retardants and certain industrial processes.",
    xpos: 17, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Bromine"
  },
  {
    symbol: "Kr",
    name: "Krypton",
    number: 36,
    atomic_mass: 83.798,
    category: "noble gas",
    summary: "Krypton is a colorless, odorless gas used in high-performance lighting and in some types of lasers.",
    xpos: 18, ypos: 4,
    wikipedia: "https://en.wikipedia.org/wiki/Krypton"
  },
  {
    symbol: "Rb",
    name: "Rubidium",
    number: 37,
    atomic_mass: 85.468,
    category: "alkali metal",
    summary: "Rubidium is a soft, silvery-white metal used in research and in certain types of atomic clocks.",
    xpos: 1, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Rubidium"
  },
  {
    symbol: "Sr",
    name: "Strontium",
    number: 38,
    atomic_mass: 87.62,
    category: "alkaline earth metal",
    summary: "Strontium is used in fireworks and in certain types of magnets. It is also a component of some types of glass and ceramics.",
    xpos: 2, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Strontium"
  },
  {
    symbol: "Y",
    name: "Yttrium",
    number: 39,
    atomic_mass: 88.906,
    category: "transition metal",
    summary: "Yttrium is used in various materials, including superconductors and certain types of LEDs.",
    xpos: 3, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Yttrium"
  },
  {
    symbol: "Zr",
    name: "Zirconium",
    number: 40,
    atomic_mass: 91.224,
    category: "transition metal",
    summary: "Zirconium is used in nuclear reactors and in various high-temperature materials. It is highly resistant to corrosion.",
    xpos: 4, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Zirconium"
  },
  {
    symbol: "Nb",
    name: "Niobium",
    number: 41,
    atomic_mass: 92.906,
    category: "transition metal",
    summary: "Niobium is used in superconducting materials and various steel alloys. It is often used in high-temperature applications.",
    xpos: 5, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Niobium"
  },
  {
    symbol: "Mo",
    name: "Molybdenum",
    number: 42,
    atomic_mass: 95.95,
    category: "transition metal",
    summary: "Molybdenum is used to strengthen steel and in various chemical applications. It has a high melting point and is very durable.",
    xpos: 6, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Molybdenum"
  },
  {
    symbol: "Tc",
    name: "Technetium",
    number: 43,
    atomic_mass: 98,
    category: "transition metal",
    summary: "Technetium is a radioactive element used in various medical imaging techniques. It is one of the rarest elements in the Earth's crust.",
    xpos: 7, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Technetium"
  },
  {
    symbol: "Ru",
    name: "Ruthenium",
    number: 44,
    atomic_mass: 101.07,
    category: "transition metal",
    summary: "Ruthenium is used in various electronic components and as a catalyst in chemical reactions. It is also used to harden platinum and palladium.",
    xpos: 8, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Ruthenium"
  },
  {
    symbol: "Rh",
    name: "Rhodium",
    number: 45,
    atomic_mass: 102.91,
    category: "transition metal",
    summary: "Rhodium is used in catalytic converters and various types of electroplating. It is highly resistant to corrosion and oxidation.",
    xpos: 9, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Rhodium"
  },
  {
    symbol: "Pd",
    name: "Palladium",
    number: 46,
    atomic_mass: 106.42,
    category: "transition metal",
    summary: "Palladium is used in catalytic converters, jewelry, and various industrial applications. It has excellent corrosion resistance.",
    xpos: 10, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Palladium"
  },
  {
    symbol: "Ag",
    name: "Silver",
    number: 47,
    atomic_mass: 107.87,
    category: "transition metal",
    summary: "Silver is known for its high conductivity and is used in jewelry, electronics, and as an antibacterial agent.",
    xpos: 11, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Silver"
  },
  {
    symbol: "Cd",
    name: "Cadmium",
    number: 48,
    atomic_mass: 112.41,
    category: "transition metal",
    summary: "Cadmium is used in batteries, pigments, and as a protective coating for other metals. It is toxic and requires careful handling.",
    xpos: 12, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Cadmium"
  },
  {
    symbol: "In",
    name: "Indium",
    number: 49,
    atomic_mass: 114.82,
    category: "post-transition metal",
    summary: "Indium is used in electronics and as a coating for bearings. It is a soft, silvery metal that is highly ductile.",
    xpos: 13, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Indium"
  },
  {
    symbol: "Sn",
    name: "Tin",
    number: 50,
    atomic_mass: 118.71,
    category: "post-transition metal",
    summary: "Tin is used in various alloys, including bronze and solder. It is a corrosion-resistant metal with a low melting point.",
    xpos: 14, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Tin"
  },
  {
    symbol: "Sb",
    name: "Antimony",
    number: 51,
    atomic_mass: 121.76,
    category: "metalloid",
    summary: "Antimony is used in flame retardants and various alloys. It is known for its brittle nature and is used in electronics and semiconductors.",
    xpos: 15, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Antimony"
  },
  {
    symbol: "Te",
    name: "Tellurium",
    number: 52,
    atomic_mass: 127.60,
    category: "metalloid",
    summary: "Tellurium is used in semiconductors and as an additive in various alloys. It has a metallic appearance and is brittle.",
    xpos: 16, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Tellurium"
  },
  {
    symbol: "I",
    name: "Iodine",
    number: 53,
    atomic_mass: 126.90,
    category: "halogen",
    summary: "Iodine is essential for thyroid function and is used as a disinfectant and in various chemical reactions.",
    xpos: 17, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Iodine"
  },
  {
    symbol: "Xe",
    name: "Xenon",
    number: 54,
    atomic_mass: 131.29,
    category: "noble gas",
    summary: "Xenon is a colorless, odorless gas used in lighting and various types of research. It is one of the noble gases and is chemically inert.",
    xpos: 18, ypos: 5,
    wikipedia: "https://en.wikipedia.org/wiki/Xenon"
  },
  {
    symbol: "Cs",
    name: "Cesium",
    number: 55,
    atomic_mass: 132.91,
    category: "alkali metal",
    summary: "Cesium is a highly reactive metal used in atomic clocks and various industrial processes.",
    xpos: 1, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Cesium"
  },
  {
    symbol: "Ba",
    name: "Barium",
    number: 56,
    atomic_mass: 137.33,
    category: "alkaline earth metal",
    summary: "Barium is used in medical imaging and various industrial applications. It is a soft, silvery metal that reacts readily with air and water.",
    xpos: 2, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Barium"
  },
  {
    symbol: "La",
    name: "Lanthanum",
    number: 57,
    atomic_mass: 138.91,
    category: "lanthanide",
    summary: "Lanthanum is used in various catalysts and in the production of high-quality glass. It is the first element in the lanthanide series.",
    xpos: 3, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Lanthanum"
  },
  {
    symbol: "Ce",
    name: "Cerium",
    number: 58,
    atomic_mass: 140.12,
    category: "lanthanide",
    summary: "Cerium is used in catalytic converters and in various types of glass and ceramics. It is one of the most abundant lanthanides.",
    xpos: 4, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Cerium"
  },
  {
    symbol: "Pr",
    name: "Praseodymium",
    number: 59,
    atomic_mass: 140.91,
    category: "lanthanide",
    summary: "Praseodymium is used in various alloys and as a colorant in glass and ceramics. It is also used in some types of lasers.",
    xpos: 5, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Praseodymium"
  },
  {
    symbol: "Nd",
    name: "Neodymium",
    number: 60,
    atomic_mass: 144.24,
    category: "lanthanide",
    summary: "Neodymium is used in powerful magnets, as well as in various lasers and glass. It is the most abundant rare earth element.",
    xpos: 6, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Neodymium"
  },
  {
    symbol: "Pm",
    name: "Promethium",
    number: 61,
    atomic_mass: 145,
    category: "lanthanide",
    summary: "Promethium is a radioactive element used in some types of luminous paint and as a power source in some types of batteries.",
    xpos: 7, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Promethium"
  },
  {
    symbol: "Sm",
    name: "Samarium",
    number: 62,
    atomic_mass: 150.36,
    category: "lanthanide",
    summary: "Samarium is used in various types of magnets and catalysts. It is also used in cancer treatments and in certain types of lasers.",
    xpos: 8, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Samarium"
  },
  {
    symbol: "Eu",
    name: "Europium",
    number: 63,
    atomic_mass: 151.96,
    category: "lanthanide",
    summary: "Europium is used in phosphors for color television and LED displays. It is also used in some types of lasers.",
    xpos: 9, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Europium"
  },
  {
    symbol: "Gd",
    name: "Gadolinium",
    number: 64,
    atomic_mass: 157.25,
    category: "lanthanide",
    summary: "Gadolinium is used in magnetic resonance imaging (MRI) and various types of alloys. It is known for its magnetic properties.",
    xpos: 10, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Gadolinium"
  },
  {
    symbol: "Tb",
    name: "Terbium",
    number: 65,
    atomic_mass: 158.93,
    category: "lanthanide",
    summary: "Terbium is used in various phosphors and as an alloying agent. It is also used in some types of lasers.",
    xpos: 11, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Terbium"
  },
  {
    symbol: "Dy",
    name: "Dysprosium",
    number: 66,
    atomic_mass: 162.50,
    category: "lanthanide",
    summary: "Dysprosium is used in magnets and in various types of alloys. It is known for its high magnetic susceptibility.",
    xpos: 12, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Dysprosium"
  },
  {
    symbol: "Ho",
    name: "Holmium",
    number: 67,
    atomic_mass: 164.93,
    category: "lanthanide",
    summary: "Holmium is used in various types of lasers and in certain types of magnets. It has a high magnetic strength.",
    xpos: 13, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Holmium"
  },
  {
    symbol: "Er",
    name: "Erbium",
    number: 68,
    atomic_mass: 167.26,
    category: "lanthanide",
    summary: "Erbium is used in various types of lasers and as a dopant in some types of optical fibers. It is also used in metallurgy.",
    xpos: 14, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Erbium"
  },
  {
    symbol: "Tm",
    name: "Thulium",
    number: 69,
    atomic_mass: 168.93,
    category: "lanthanide",
    summary: "Thulium is used in various types of lasers and in certain types of medical imaging equipment. It has a high density.",
    xpos: 15, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Thulium"
  },
  {
    symbol: "Yb",
    name: "Ytterbium",
    number: 70,
    atomic_mass: 173.04,
    category: "lanthanide",
    summary: "Ytterbium is used in various types of lasers and as a dopant in certain types of fiber optics. It is also used in metallurgy.",
    xpos: 16, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Ytterbium"
  },
  {
    symbol: "Lu",
    name: "Lutetium",
    number: 71,
    atomic_mass: 174.97,
    category: "lanthanide",
    summary: "Lutetium is used in various types of catalysts and in medical imaging. It is the last element in the lanthanide series.",
    xpos: 17, ypos: 6,
    wikipedia: "https://en.wikipedia.org/wiki/Lutetium"
  },
  {
    "symbol": "Hf",
    "name": "Hafnium",
    "number": 72,
    "atomic_mass": 178.49,
    "category": "transition metal",
    "summary": "Hafnium is a transition metal used in nuclear reactors and high-temperature alloys. It has excellent corrosion resistance.",
    "xpos": 4, "ypos": 6,
    "wikipedia": "https://en.wikipedia.org/wiki/Hafnium"
  },
  {
    "symbol": "Ta",
    "name": "Tantalum",
    "number": 73,
    "atomic_mass": 180.94788,
    "category": "transition metal",
    "summary": "Tantalum is a hard, corrosion-resistant metal used in electronics, particularly in capacitors and surgical instruments.",
    "xpos": 5, "ypos": 6,
    "wikipedia": "https://en.wikipedia.org/wiki/Tantalum"
  },
  {
    "symbol": "W",
    "name": "Tungsten",
    "number": 74,
    "atomic_mass": 183.84,
    "category": "transition metal",
    "summary": "Tungsten is known for its high melting point and is used in lightbulb filaments, cutting tools, and high-temperature applications.",
    "xpos": 6, "ypos": 6,
    "wikipedia": "https://en.wikipedia.org/wiki/Tungsten"
  },
  {
    "symbol": "Re",
    "name": "Rhenium",
    "number": 75,
    "atomic_mass": 186.207,
    "category": "transition metal",
    "summary": "Rhenium is a rare metal used in high-temperature superalloys for jet engines and in catalytic converters.",
    "xpos": 7, "ypos": 6,
    "wikipedia": "https://en.wikipedia.org/wiki/Rhenium"
  },
  {
    "symbol": "Os",
    "name": "Osmium",
    "number": 76,
    "atomic_mass": 190.23,
    "category": "transition metal",
    "summary": "Osmium is a dense, bluish-white metal used in fountain pen nibs, electrical contacts, and as a catalyst in chemical reactions.",
    "xpos": 8, "ypos": 6,
    "wikipedia": "https://en.wikipedia.org/wiki/Osmium"
  },
  {
    "symbol": "Ir",
    "name": "Iridium",
    "number": 77,
    "atomic_mass": 192.217,
    "category": "transition metal",
    "summary": "Iridium is a dense, corrosion-resistant metal used in spark plugs, crucibles, and as an alloying agent with platinum.",
    "xpos": 9, "ypos": 6,
    "wikipedia": "https://en.wikipedia.org/wiki/Iridium"
  },
  {
    "symbol": "Pt",
    "name": "Platinum",
    "number": 78,
    "atomic_mass": 195.084,
    "category": "transition metal",
    "summary": "Platinum is a precious metal used in jewelry, catalytic converters, and various industrial applications due to its stability.",
    "xpos": 10, "ypos": 6,
    "wikipedia": "https://en.wikipedia.org/wiki/Platinum"
  },
  {
    "symbol": "Au",
    "name": "Gold",
    "number": 79,
    "atomic_mass": 196.96657,
    "category": "transition metal",
    "summary": "Gold is a precious metal valued for its rarity and aesthetic appeal, used in jewelry, electronics, and as a financial standard.",
    "xpos": 11, "ypos": 6,
    "wikipedia": "https://en.wikipedia.org/wiki/Gold"
  },
  {
    "symbol": "Hg",
    "name": "Mercury",
    "number": 80,
    "atomic_mass": 200.59,
    "category": "transition metal",
    "summary": "Mercury is the only metal that is liquid at room temperature. It is used in thermometers, barometers, and fluorescent lamps.",
    "xpos": 12, "ypos": 6,
    "wikipedia": "https://en.wikipedia.org/wiki/Mercury_(element)"
  },
  {
    "symbol": "Tl",
    "name": "Thallium",
    "number": 81,
    "atomic_mass": 204.38,
    "category": "post-transition metal",
    "summary": "Thallium is a soft metal that has been used in electronics and as a rodenticide. It is toxic and poses significant health risks.",
    "xpos": 13, "ypos": 6,
    "wikipedia": "https://en.wikipedia.org/wiki/Thallium"
  },
  {
    "symbol": "Pb",
    "name": "Lead",
    "number": 82,
    "atomic_mass": 207.2,
    "category": "post-transition metal",
    "summary": "Lead is a heavy metal used historically in pipes, paints, and batteries. It is toxic, and its use is now restricted due to health concerns.",
    "xpos": 14, "ypos": 6,
    "wikipedia": "https://en.wikipedia.org/wiki/Lead"
  },
  {
    "symbol": "Bi",
    "name": "Bismuth",
    "number": 83,
    "atomic_mass": 208.9804,
    "category": "post-transition metal",
    "summary": "Bismuth is a brittle metal with a low toxicity, used in cosmetics, medical applications, and in some alloys.",
    "xpos": 15, "ypos": 6,
    "wikipedia": "https://en.wikipedia.org/wiki/Bismuth"
  },
  {
    "symbol": "Po",
    "name": "Polonium",
    "number": 84,
    "atomic_mass": 209,
    "category": "metalloid",
    "summary": "Polonium is a highly radioactive element used in anti-static devices and as a heat source in space satellites. It is extremely toxic.",
    "xpos": 16, "ypos": 6,
    "wikipedia": "https://en.wikipedia.org/wiki/Polonium"
  },
  {
    "symbol": "At",
    "name": "Astatine",
    "number": 85,
    "atomic_mass": 210,
    "category": "halogen",
    "summary": "Astatine is a rare and highly radioactive element with no significant commercial applications due to its scarcity and radioactivity.",
    "xpos": 17, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Astatine"
  },
  {
    "symbol": "Rn",
    "name": "Radon",
    "number": 86,
    "atomic_mass": 222,
    "category": "noble gas",
    "summary": "Radon is a radioactive noble gas that can be found naturally in some environments. It poses health risks due to its radioactivity.",
    "xpos": 18, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Radon"
  },
  {
    "symbol": "Fr",
    "name": "Francium",
    "number": 87,
    "atomic_mass": 223,
    "category": "alkali metal",
    "summary": "Francium is an extremely rare and highly radioactive alkali metal. It has no practical applications due to its instability.",
    "xpos": 1, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Francium"
  },
  {
    "symbol": "Ra",
    "name": "Radium",
    "number": 88,
    "atomic_mass": 226,
    "category": "alkaline earth metal",
    "summary": "Radium is a radioactive metal once used in luminescent paints. It is hazardous and has been replaced by safer alternatives.",
    "xpos": 2, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Radium"
  },
  {
    "symbol": "Ac",
    "name": "Actinium",
    "number": 89,
    "atomic_mass": 227,
    "category": "actinide",
    "summary": "Actinium is a rare radioactive element, primarily used in research and medical applications due to its high radioactivity.",
    "xpos": 3, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Actinium"
  },
  {
    "symbol": "Th",
    "name": "Thorium",
    "number": 90,
    "atomic_mass": 232.0377,
    "category": "actinide",
    "summary": "Thorium is a slightly radioactive metal with potential uses in nuclear energy. It is more abundant than uranium.",
    "xpos": 4, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Thorium"
  },
  {
    "symbol": "Pa",
    "name": "Protactinium",
    "number": 91,
    "atomic_mass": 231.03588,
    "category": "actinide",
    "summary": "Protactinium is a rare and highly radioactive element. It is used primarily in scientific research.",
    "xpos": 5, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Protactinium"
  },
  {
    "symbol": "U",
    "name": "Uranium",
    "number": 92,
    "atomic_mass": 238.02891,
    "category": "actinide",
    "summary": "Uranium is a radioactive metal used as fuel in nuclear reactors and weapons. It is the most common fuel for nuclear energy.",
    "xpos": 6, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Uranium"
  },
  {
    "symbol": "Np",
    "name": "Neptunium",
    "number": 93,
    "atomic_mass": 237,
    "category": "actinide",
    "summary": "Neptunium is a radioactive metal primarily produced in nuclear reactors. It has few practical applications.",
    "xpos": 7, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Neptunium"
  },
  {
    "symbol": "Pu",
    "name": "Plutonium",
    "number": 94,
    "atomic_mass": 244,
    "category": "actinide",
    "summary": "Plutonium is a radioactive metal used in nuclear reactors and weapons. It is one of the most well-known radioactive elements.",
    "xpos": 8, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Plutonium"
  },
  {
    "symbol": "Am",
    "name": "Americium",
    "number": 95,
    "atomic_mass": 243,
    "category": "actinide",
    "summary": "Americium is a synthetic radioactive element used in smoke detectors and some industrial applications.",
    "xpos": 9, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Americium"
  },
  {
    "symbol": "Cm",
    "name": "Curium",
    "number": 96,
    "atomic_mass": 247,
    "category": "actinide",
    "summary": "Curium is a synthetic radioactive element primarily used in research and as a source of alpha particles.",
    "xpos": 10, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Curium"
  },
  {
    "symbol": "Bk",
    "name": "Berkelium",
    "number": 97,
    "atomic_mass": 247,
    "category": "actinide",
    "summary": "Berkelium is a synthetic element produced in minute quantities for research purposes. It has no commercial applications.",
    "xpos": 11, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Berkelium"
  },
  {
    "symbol": "Cf",
    "name": "Californium",
    "number": 98,
    "atomic_mass": 251,
    "category": "actinide",
    "summary": "Californium is a highly radioactive synthetic element used in neutron sources and in specialized medical and industrial applications.",
    "xpos": 12, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Californium"
  },
  {
    "symbol": "Es",
    "name": "Einsteinium",
    "number": 99,
    "atomic_mass": 252,
    "category": "actinide",
    "summary": "Einsteinium is a synthetic element discovered in the debris of hydrogen bomb tests. It is used exclusively in scientific research.",
    "xpos": 13, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Einsteinium"
  },
  {
    "symbol": "Fm",
    "name": "Fermium",
    "number": 100,
    "atomic_mass": 257,
    "category": "actinide",
    "summary": "Fermium is a highly radioactive synthetic element used for research purposes. It was discovered in the aftermath of nuclear explosions.",
    "xpos": 14, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Fermium"
  },
  {
    "symbol": "Md",
    "name": "Mendelevium",
    "number": 101,
    "atomic_mass": 258,
    "category": "actinide",
    "summary": "Mendelevium is a synthetic element with no practical applications, produced only in small quantities for research purposes.",
    "xpos": 15, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Mendelevium"
  },
  {
    "symbol": "No",
    "name": "Nobelium",
    "number": 102,
    "atomic_mass": 259,
    "category": "actinide",
    "summary": "Nobelium is a synthetic element named after Alfred Nobel. It has no commercial uses and is primarily studied in laboratories.",
    "xpos": 16, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Nobelium"
  },
  {
    "symbol": "Lr",
    "name": "Lawrencium",
    "number": 103,
    "atomic_mass": 262,
    "category": "actinide",
    "summary": "Lawrencium is a synthetic radioactive element that exists only in minute quantities. It is used only for research purposes.",
    "xpos": 17, "ypos": 8,
    "wikipedia": "https://en.wikipedia.org/wiki/Lawrencium"
  },
  {
    "symbol": "Rf",
    "name": "Rutherfordium",
    "number": 104,
    "atomic_mass": 267,
    "category": "transition metal",
    "summary": "Rutherfordium is a synthetic element named after physicist Ernest Rutherford. It has no practical applications and is used in research.",
    "xpos": 4, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Rutherfordium"
  },
  {
    "symbol": "Db",
    "name": "Dubnium",
    "number": 105,
    "atomic_mass": 270,
    "category": "transition metal",
    "summary": "Dubnium is a synthetic element with no practical applications. It is primarily used in scientific research.",
    "xpos": 5, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Dubnium"
  },
  {
    "symbol": "Sg",
    "name": "Seaborgium",
    "number": 106,
    "atomic_mass": 271,
    "category": "transition metal",
    "summary": "Seaborgium is a synthetic element with no known applications, primarily used in scientific research. It was named after Glenn T. Seaborg.",
    "xpos": 6, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Seaborgium"
  },
  {
    "symbol": "Bh",
    "name": "Bohrium",
    "number": 107,
    "atomic_mass": 270,
    "category": "transition metal",
    "summary": "Bohrium is a synthetic element with no practical applications, produced only for research purposes. It was named after physicist Niels Bohr.",
    "xpos": 7, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Bohrium"
  },
  {
    "symbol": "Hs",
    "name": "Hassium",
    "number": 108,
    "atomic_mass": 277,
    "category": "transition metal",
    "summary": "Hassium is a synthetic element that exists in very small amounts. It has no commercial applications and is used in research.",
    "xpos": 8, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Hassium"
  },
  {
    "symbol": "Mt",
    "name": "Meitnerium",
    "number": 109,
    "atomic_mass": 278,
    "category": "transition metal",
    "summary": "Meitnerium is a synthetic element with no known uses, named after physicist Lise Meitner. It is primarily used in research.",
    "xpos": 9, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Meitnerium"
  },
  {
    "symbol": "Ds",
    "name": "Darmstadtium",
    "number": 110,
    "atomic_mass": 281,
    "category": "transition metal",
    "summary": "Darmstadtium is a synthetic element produced in particle accelerators. It has no known practical applications.",
    "xpos": 10, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Darmstadtium"
  },
  {
    "symbol": "Rg",
    "name": "Roentgenium",
    "number": 111,
    "atomic_mass": 282,
    "category": "transition metal",
    "summary": "Roentgenium is a synthetic element named after Wilhelm Röntgen, the discoverer of X-rays. It has no known applications.",
    "xpos": 11, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Roentgenium"
  },
  {
    "symbol": "Cn",
    "name": "Copernicium",
    "number": 112,
    "atomic_mass": 285,
    "category": "transition metal",
    "summary": "Copernicium is a synthetic element named after Nicolaus Copernicus. It has no known practical applications.",
    "xpos": 12, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Copernicium"
  },
  {
    "symbol": "Nh",
    "name": "Nihonium",
    "number": 113,
    "atomic_mass": 286,
    "category": "post-transition metal",
    "summary": "Nihonium is a synthetic element with no known practical applications. It was named after Japan (Nihon in Japanese).",
    "xpos": 13, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Nihonium"
  },
  {
    "symbol": "Fl",
    "name": "Flerovium",
    "number": 114,
    "atomic_mass": 289,
    "category": "post-transition metal",
    "summary": "Flerovium is a synthetic element with no known applications. It was named after the Flerov Laboratory of Nuclear Reactions in Russia.",
    "xpos": 14, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Flerovium"
  },
  {
    "symbol": "Mc",
    "name": "Moscovium",
    "number": 115,
    "atomic_mass": 290,
    "category": "post-transition metal",
    "summary": "Moscovium is a synthetic element named after Moscow. It is produced in particle accelerators and has no practical uses.",
    "xpos": 15, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Moscovium"
  },
  {
    "symbol": "Lv",
    "name": "Livermorium",
    "number": 116,
    "atomic_mass": 293,
    "category": "post-transition metal",
    "summary": "Livermorium is a synthetic element named after the Lawrence Livermore National Laboratory. It has no known practical applications.",
    "xpos": 16, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Livermorium"
  },
  {
    "symbol": "Ts",
    "name": "Tennessine",
    "number": 117,
    "atomic_mass": 294,
    "category": "halogen",
    "summary": "Tennessine is a synthetic element named after the U.S. state of Tennessee. It has no practical applications and exists in minute quantities.",
    "xpos": 17, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Tennessine"
  },
  {
    "symbol": "Og",
    "name": "Oganesson",
    "number": 118,
    "atomic_mass": 294,
    "category": "noble gas",
    "summary": "Oganesson is a synthetic element named after physicist Yuri Oganessian. It is the heaviest element known and has no practical uses.",
    "xpos": 18, "ypos": 7,
    "wikipedia": "https://en.wikipedia.org/wiki/Oganesson"
  }
  
  

    // Add more elements similarly, each with a category and a Wikipedia link
  ];
  
  export default elements;
  