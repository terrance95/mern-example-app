export const getOne = model => async (req, res) => {
  try {
    const doc = await model.find({ _id: req.params.id });
    console.log(doc);
    if (!doc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const createOne = model => async (req, res) => {
  try {
    console.log(model);
    const doc = model.create({ ...req.body });
    res.status(201).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getMany = model => async (req, res) => {
  try {
    const docs = await model.find({});

    console.log(docs);
    res.status(200).json({ data: docs });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const updateOne = model => async (req, res) => {
  try {
    const updatedDoc = await model
      .findOneAndUpdate(
        {
          _id: req.params.id
        },
        req.body,
        { new: true }
      )
      .lean()
      .exec();

    if (!updatedDoc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: updatedDoc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const removeOne = model => async (req, res) => {
  try {
    const removed = await model.findOneAndRemove({
      _id: req.params.id
    });

    if (!removed) {
      return res.status(400).end();
    }

    return res.status(200).json({ data: removed });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const crudControllers = model => ({
  getOne: getOne(model),
  createOne: createOne(model),
  getMany: getMany(model),
  updateOne: updateOne(model),
  removeOne: removeOne(model)
});
