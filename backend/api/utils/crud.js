export const getOne = (model) => async (req, res) => {
	try {
		const doc = await model.find({});
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

export const createOne = (model) => async (req, res) => {
	//const createdBy = 6;
	try {
		console.log(model);
		const doc = model.create({ ...req.body });
		res.status(201).json({ data: doc });
	} catch (e) {
		console.error(e);
		res.status(400).end();
	}
};

export const crudControllers = (model) => ({
	getOne: getOne(model),
	createOne: createOne(model)
});
