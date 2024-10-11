/// <reference path="global.d.ts" />
const productUuid = globalThis.PIM.context.product.uuid;

document.body.innerHTML = '';

const product = await globalThis.PIM.api.products_uuid.get({uuid: productUuid})
let table = `
  <table>
    <thead>
      <tr>
        <td><b>Attribute code</b></td>
        <td><b>Locale</b></td>
        <td><b>Scope</b></td>
        <td><b>Value</b></td>
      </tr>
    </thead>
    <tbody>`;

Object.keys(product.values).forEach((attributeCode) => {
  product.values[attributeCode].forEach((value) => {
    table += `
      <tr>
        <td>${attributeCode}</td>
        <td>${value.locale ?? ''}</td>
        <td>${value.scope ?? ''}</td>
        <td>${JSON.stringify(value.data)}</td>
      </tr>`;
  });
});

table += `
    </tbody>
  </table>`;

document.body.innerHTML += table;
