const lib = require("../colors/kaolin-themes-lib.json");
const light = require("../colors/kaolin-themes-light.json");

const lightColor = (altBg) => {
  let c = { ...lib, ...light };

  const fg0 = c.white0;
  const fg1 = c.gray1;
  const fg2 = c.gray2;
  const fg3 = c.gray3;
  const fg4 = c.gray4;

  const bg0 = "#f5f6f5";
  const bg1 = altBg ? "#fbfbfb" : "#edeeeb";
  const bg2 = altBg ? c.white0 : "#dfe1dc";
  const bg3 = altBg ? c.white1 : "#d1d4cd";
  const bg4 = altBg ? c.white2 : "#c8ccc3";

  const info = c.azure4;
  const error = c.red3;
  const warning = c.orange1;
  const selection = c.azure9;

  return {
    fg0,
    fg1,
    fg2,
    fg3,
    fg4,
    bg0,
    bg1,
    bg2,
    bg3,
    bg4,
    selection,
    info,
    error,
    warning,
    highlight: c.green2,
    indent: c.gray9,
    done: c.teal2,
    link: c.ultramarine1,
    progressBar: c.cyan3,
    cursor: c.gray3,
    search: c.teal3,
    button: {
      fg: bg1,
      bg: c.teal2,
    },
    badge: {
      fg: fg0,
      bg: c.red3,
    },
    indent: c.gray9,
    debug: {
      fg: fg0,
      bg: c.red3,
    },
    diff: {
      added: c.aquamarine2,
      modified: c.purple2,
      deleted: c.red1,
      untracked: c["spring-green2"],
      ignored: c.gray8,
      conflicting: error,
      submodule: c.azure1,
      range: c.amber2,
      fg: fg1,
    },
    syntax: {
      comment: c.gray7,
      constant: c.magenta4,
      keyword: c.teal2,
      string: c.erin2,
      variable: c.magenta4,
      class: c.vermilion3,
      type: c.azure4,
      num: c.red1,
      bool: c.red1,
      error,
    },
    ansi: {
      black: fg1,
      brightBlack: fg3,
      red: c.red3,
      brightRed: c.red3,
      green: c.teal2,
      brightGreen: c["spring-green2"],
      yellow: c.vermilion3,
      brightYellow: c.orange1,
      blue: c.azure1,
      brightBlue: c.azure4,
      magenta: c.cerise4,
      brightMagenta: c.ultramarine1,
      cyan: c.cyan3,
      brightCyan: c.cyan2,
      white: bg4,
      brightWhite: bg0,
    },
    tab: {
      border: bg4,
      default: {
        bg: bg0,
        fg: fg3,
      },
      active: {
        bg: bg1,
        fg: fg3,
        border: bg2,
        borderTop: bg4,
      },
      hover: {
        bg: bg2,
        fg: fg2,
      },
    },
    checkbox: {
      bg: bg0,
      fg: c.azure4,
      border: bg4,
    },
    dropdown: {
      bg: bg0,
      fg: fg4,
      border: bg4,
      listBackground: bg0,
    },
    input: {
      bg: bg0,
      border: bg4,
      fg: fg1,
      placeholderFg: `${fg1}90`,
    },
    statusBar: {
      default: {
        bg: c["spring-green4"],
        fg: bg2,
        border: bg3,
      },
      debug: {
        bg: c.crimson4,
        fg: bg1,
      },
      remote: {
        bg: c.azure4,
        fg: bg1,
      },
      nofolder: {
        bg: c.ultramarine4,
        fg: bg1,
      },
    },
    activeBar: {
      bg: bg2,
      fg: fg2,
      border: bg4,
      activeBg: bg4,
      activeBorder: bg4,
    },
    sideBar: {
      fg: fg2,
      bg: bg2,
      border: bg3,
    },
    pickerGroup: {
      fg: c.violet2,
      border: bg2,
    },
    bracketHighlight: [c.teal1, c.cerise4, c.azure4, c.ultramarine4, c.crimson4, c.vermilion4],
    debug: {
      breakpoint: c.red3,
      info: info,
      warning: warning,
      error: error,
      source: fg2,
      inputIcon: c.cerise4,
      toolBar: bg0,
    },
    peekView: {
      editorBackground: bg1,
      editorMatchHighlight: `${selection}80`,
      resultBackground: bg2,
      resultMatchHighlight: `${c.amber0}80`,
    },
    merge: {
      currentHeader: `${c.aquamarine4}60`,
      currentContent: `${c.aquamarine4}25`,
      incomingHeader: `${c.azure1}60`,
      incomingContent: `${c.azure1}25`,
      commonHeader: bg3,
      commonContent: bg2,
    },
  };
};

function getColors(theme) {
  switch (theme) {
    case "light":
      return lightColor(false);
    case "light-alt":
      return lightColor(true);
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

module.exports = { getColors };
