import {deleteTabExtension} from "./pim_api_bridges/deleteTabExtension.js";
import {getProduct} from "./pim_api_bridges/getProduct.js";
import {getProducts} from "./pim_api_bridges/getProducts.js";
import {updateProductCategoryCodes} from "./pim_api_bridges/updateProductCategoryCodes.js";
import {getAttributes} from "./pim_api_bridges/getAttributes.js";
import {listUiExtensions} from "./pim_api_bridges/listUiExtensions.js";
import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import {PORT} from "./env.js";
import {addUiExtension} from "./pim_api_bridges/addUiExtension.js";
const app = express();
const upload = multer({ storage: multer.memoryStorage() })

app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), '../build')));
app.use(express.json());

app.post('/addUiExtension', upload.single('configuration[file]'), async (req, res) => {
  console.log(`Add UI Extension...`);
  await addUiExtension(res, req);
});

app.get('/deleteTabExtension', async (req, res) => {
  console.log(`Delete UI Extension ${req.query.code}...`);
  await deleteTabExtension(res, req.query.code);
});

app.get('/getProduct', async (req, res) => {
  console.log(`Get product ${req.query.uuid}...`);
  res.send(await getProduct(req.query.uuid));
});

app.get('/getProducts', async (req, res) => {
  console.log('Get Products...');
  res.send(await getProducts(req.query.search));
});

app.get('/removeCategoryOfProduct', async (req, res) => {
  const productUuid = req.query.productUuid;
  const categoryCode = req.query.categoryCode;
  const product = await getProduct(productUuid);
  const newCategoryCodes = product.categories.filter(c => c !== categoryCode);

  console.log(`Update product categories...`);
  await updateProductCategoryCodes(res, productUuid, newCategoryCodes);
});

app.get('/getAttributes', async (req, res) => {
  console.log('Get Attributes...');
  const attributeCodes = JSON.stringify(req.query.codes.split(','));
  res.send(JSON.stringify(await getAttributes(attributeCodes)));
});

app.get('/listUiExtensions', async (req, res) => {
  console.log('Get UI Extensions...');
  res.send(JSON.stringify(await listUiExtensions()));
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(path.dirname(fileURLToPath(import.meta.url)) + '/../build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
