module.exports = {
  atributtes: {
    name: {
      type: 'string',
      required: true
    },
    age: {
      type: 'number',
    },
    superPower: {
      type: 'string',
    },
    list: async (req, res) => {
      try {
        const heroes = await Hero.find();
        return res.json(heroes);
      } catch (err) {
        return res.serverError(err);
      }
    },
    
  listwithgun: async (req, res) => {
    try {
      const query = "SELECT * FROM hero INNER JOIN gun ON hero.id = gun.owner";
      const heroes = await Hero.getDatastore().sendNativeQuery(query);

      if (heroes.rows && heroes.rows.length > 0) {
        return res.json(heroes.rows);
      } else {
        return res.json([]);
      }
    } catch (err) {
      return res.serverError(err);
    }
  },

  create: async (req, res) => {
    try {
      const hero = await Hero.create(req.body).fetch();
      return res.json(hero);
    } catch (err) {
      return res.serverError(err);
    }
  },
  };