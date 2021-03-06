const { Router } = require('express');
const multer = require('multer');

const router = Router();
const recipesService = require('../services/recipesService');
const { verifyAuthorization } = require('../auth/verifyAuthotization');

const status201 = 201;
const status200 = 200;
const status401 = 401;
const status204 = 204;

router.post('/', verifyAuthorization, async (req, res) => {
  const { name, ingredients, preparation, userId } = req.body;

  const result = await recipesService.create(name, ingredients, preparation, userId);

  if (result.err) return res.status(result.err.status).json({ message: result.err.message });

  return res.status(status201).json(result);
});

router.get('/', async (req, res) => {
  const result = await recipesService.getAll();

  if (result) res.status(status200).json(result);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const result = await recipesService.getById(id);

  if (result.err) return res.status(result.err.code).json({ message: result.err.message });

  return res.status(status200).json(result);
});

router.put('/:id', verifyAuthorization, async (req, res) => {
  const { id } = req.params;
  const { name, ingredients, preparation } = req.body;

  const result = await recipesService.update(id, name, ingredients, preparation);

  if (result.err) return res.status(status401).json({ message: result.err.message });

  return res.status(status200).json(result);
});

router.delete('/:id', verifyAuthorization, async (req, res) => {
  const { id } = req.params;

  const result = await recipesService.exclude(id);

  if (result.err) return res.status(result.err.code).json({ message: result.err.message });

  return res.status(status204).json(result);
});

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    callback(null, `${req.params.id}.jpeg`);
  },
});

const upload = multer({ storage });

router.put('/:id/image', verifyAuthorization, upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { path } = req.file; // path - The full path to the uploaded file
  
  const nameFile = `localhost:3000/${path}`;

  const result = await recipesService.includeRecipe(id, nameFile);

  return res.status(status200).json(result);
});

module.exports = router;
