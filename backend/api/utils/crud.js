export const getOne = model => async (req, res) => {
  try {
    const doc = await model;

    if (!doc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: 'Temporary' });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const crudControllers = model => ({
  getOne: getOne(model)
});
