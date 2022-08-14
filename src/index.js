const fs = require("fs").promises;
const getTheme = require("./theme");

const lightTheme = getTheme({
  theme: "light",
  name: "Kaolin Light Theme",
  type: "light",
});

const lightThemeAlt = getTheme({
  theme: "light-alt",
  name: "Kaolin Light Theme (alt)",
  type: "light",
});

fs.mkdir("./themes", { recursive: true }).then(() =>
  Promise.all([
    fs.writeFile("./themes/light-color-theme.json", JSON.stringify(lightTheme, null, 2)),
    fs.writeFile("./themes/light-alt-color-theme.json", JSON.stringify(lightThemeAlt, null, 2)),
  ])
);
