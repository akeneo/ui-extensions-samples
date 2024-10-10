/// <reference path="global.d.ts" />
document.body.innerHTML = `COUCOU JM ${globalThis.PIM.context.product.uuid}`;
globalThis.PIM.api.products_uuid.getv2({uuid: globalThis.PIM.context.product.uuid}).then((product) => {
  console.log({product, family: product.family, values: product.values});
  console.log(product.values.name);
  product.values.attributeCode.forEach((jesepa) => console.log(jesepa));
  document.body.innerHTML += product.family;
  let table = '';
  table += '<table><tbody>';
  Object.keys(product.values).forEach((attributeCode) => {
    product.values[attributeCode].forEach((value) => {
      table += `<tr><td>${attributeCode}</td><td>${JSON.stringify(value.data)}</td></tr>`;
    })
  })
  table += '</tbody></table>';

  document.body.innerHTML += table;
});
