const fs = require("fs").promises;

const lib = require("../colors/kaolin-themes-lib.json");
const light = require("../colors/kaolin-themes-light.json");
const dark = require("../colors/kaolin-themes-dark.json");

function generate(colors) {
  return `<table style="width:20rem;table-layout:auto">
  <thead>
    <tr>
      <th> Name </th>
      <th> HEX </th>
      <th> Colored Background </th>
    </tr>
  </thead>
  <tbody>${Object.entries(colors)
    .map(
      ([key, value]) => `
      <tr>
        <td> ${key} </td>
        <td> ${value} </td>
        <td style="background-color:${value}" />
      </tr>`
    )
    .join("")}</tbody>
</table>`;
}

fs.mkdir("./showcase", { recursive: true }).then(() =>
  Promise.all([
    fs.writeFile("./showcase/colors-light.md", generate({ ...lib, ...light })),
    fs.writeFile("./showcase/colors-dark.md", generate({ ...lib, ...dark })),
  ])
);
