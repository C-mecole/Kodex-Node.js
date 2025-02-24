const countries = [
  { code: "US", name: "United States", population: 331000000 },
  { code: "GB", name: "United Kingdom", population: 67000000 },
  { code: "NG", name: "Nigeria", population: 206000000 },
];

exports.getAllCountries = (_req, res) => {
  res.status(200).json(countries);
};

exports.getCountryByCode = (req, res) => {
  const country = countries.find(
    (c) => c.code === req.params.code.toUpperCase()
  );
  if (!country) return res.status(404).json({ message: "Country not found" });
  res.json(country);
};

exports.addCountry = (req, res) => {
  const { code, name, population } = req.body;
  if (countries.some((c) => c.code === code)) {
    return res.status(400).json({ message: "Country code already exists" });
  }
  const newCountry = { code: code, name, population };
  countries.push(newCountry);
  res.status(201).json(newCountry);
};

exports.updateCountry = (req, res) => {
  const country = countries.find(
    (c) => c.code === req.params.code.toUpperCase()
  );
  if (!country) return res.status(404).json({ message: "Country not found" });

  country.name = req.body.name || country.name;
  country.population = req.body.population || country.population;

  res.json(country);
};

exports.deleteCountry = (req, res) => {
  const index = countries.findIndex(
    (c) => c.code === req.params.code.toUpperCase()
  );
  if (index === -1)
    return res.status(404).json({ message: "Country not found" });

  countries.splice(index, 1);
  res.status(204).send();
};
