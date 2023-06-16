const Joi = require("joi");

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

let planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" },
];

const getAll = (req, res) => {
  res.status(200).json({ msg: "success", data: planets });
};

const getOneById = (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));
  res.status(200).json({ msg: "success", data: planet });
};

const create = (req, res) => {
  const newPlanet = req.body;
  const validateNewPlanet = planetSchema.validate(newPlanet);
  if (validateNewPlanet.error) {
    res.status(400).json({ msg: validateNewPlanet.error.details[0].message });
  } else {
    planets = [...planets, newPlanet];
    res.status(200).json({ msg: "success" });
  }
};

const namePlanetSchema = Joi.object({
  name: Joi.string().required(),
});

const updateById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
  const validateUpdatedPlanet = namePlanetSchema.validate(planets);
  if (validateUpdatedPlanet.error) {
    res.status(400).json({ msg: validateUpdatedPlanet.error });
  } else {
    res.status(200).json({ msg: "updated" });
  }
};

const deleteById = (req, res) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(id));
  res.status(200).json({ msg: "deleted" });
};

module.exports = {
  planets,
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
};