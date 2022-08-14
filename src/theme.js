const { getColors } = require("./colors");

function getTheme({ theme, name, type }) {
  const {
    bg0,
    bg1,
    bg2,
    bg3,
    bg4,
    fg1,
    fg2,
    fg3,
    fg4,
    link,
    error,
    button,
    checkbox,
    dropdown,
    input,
    debug,
    syntax,
    activeBar,
    sideBar,
    selection,
    search,
    badge,
    progressBar,
    ansi,
    indent,
    warning,
    done,
    pickerGroup,
    statusBar,
    tab,
    highlight,
    cursor,
    diff,
    bracketHighlight,
    peekView,
    merge,
  } = getColors(theme);

  const colors = {
    focusBorder: bg4,
    foreground: fg1,
    descriptionForeground: fg1,
    errorForeground: error,

    "textLink.foreground": link,
    "textLink.activeForeground": link,
    "textBlockQuote.background": bg0,
    "textBlockQuote.border": bg1,
    "textCodeBlock.background": bg2,
    "textSeparator.foreground": bg3,

    "icon.foreground": fg2,

    "keybindingLabel.foreground": fg2,

    "button.background": button.bg,
    "button.foreground": button.fg,
    "button.hoverBackground": "",

    "button.secondaryBackground": button.bg,
    "button.secondaryForeground": button.fg,
    "button.secondaryHoverBackground": "",

    "checkbox.background": checkbox.bg,
    "checkbox.foreground": checkbox.fg,
    "checkbox.border": checkbox.border,

    "dropdown.background": dropdown.bg,
    "dropdown.border": dropdown.border,
    "dropdown.foreground": dropdown.fg,
    "dropdown.listBackground": dropdown.listBackground,

    "input.background": input.bg,
    "input.border": input.border,
    "input.foreground": input.fg,
    "input.placeholderForeground": input.placeholderFg,

    "badge.foreground": badge.fg,
    "badge.background": badge.bg,

    "progressBar.background": progressBar,

    "titleBar.activeForeground": "",
    "titleBar.activeBackground": "",
    "titleBar.inactiveForeground": "",
    "titleBar.inactiveBackground": "",
    "titleBar.border": "",

    "activityBar.activeBackground": activeBar.activeBg,
    "activityBar.activeBorder": activeBar.activeBorder,
    "activityBar.background": activeBar.bg,
    "activityBar.border": activeBar.border,
    "activityBar.foreground": activeBar.fg,
    "activityBar.inactiveForeground": fg4,

    "activityBarBadge.foreground": badge.fg,
    "activityBarBadge.background": badge.bg,

    "sideBar.foreground": sideBar.fg,
    "sideBar.background": sideBar.bg,
    "sideBar.border": sideBar.border,
    "sideBarTitle.foreground": fg2,
    "sideBarSectionHeader.foreground": fg1,
    "sideBarSectionHeader.background": bg3,
    "sideBarSectionHeader.border": bg4,

    "list.activeSelectionBackground": selection,
    "list.activeSelectionForeground": fg2,
    "list.focusBackground": bg3,
    "list.focusForeground": fg4,
    "list.highlightForeground": error,
    "list.hoverBackground": bg3,
    "list.hoverForeground": fg2,
    "list.inactiveFocusBackground": bg3,
    "list.inactiveSelectionBackground": bg3,
    "list.inactiveSelectionForeground": fg2,

    "tree.indentGuidesStroke": indent,

    "notificationCenterHeader.foreground": fg2,
    "notificationCenterHeader.background": bg2,
    "notifications.foreground": fg3,
    "notifications.background": bg1,
    "notifications.border": bg3,
    "notificationsErrorIcon.foreground": error,
    "notificationsWarningIcon.foreground": warning,
    "notificationsInfoIcon.foreground": done,

    "pickerGroup.border": pickerGroup.border,
    "pickerGroup.foreground": pickerGroup.fg,
    "quickInput.background": bg1,
    "quickInput.foreground": fg2,

    "statusBar.foreground": statusBar.default.fg,
    "statusBar.background": statusBar.default.bg,
    "statusBar.border": statusBar.default.border,
    "statusBar.noFolderBackground": statusBar.nofolder.bg,
    "statusBar.noFolderForeground": statusBar.nofolder.fg,
    "statusBar.debuggingForeground": statusBar.debug.fg,
    "statusBar.debuggingBackground": statusBar.debug.bg,
    "statusBarItem.remoteForeground": statusBar.remote.fg,
    "statusBarItem.remoteBackground": statusBar.remote.bg,

    "editorGroupHeader.tabsBackground": bg0,
    "editorGroupHeader.tabsBorder": bg3,
    "editorGroup.border": bg3,

    "tab.activeForeground": tab.active.fg,
    "tab.activeBackground": tab.active.bg,
    "tab.activeBorder": tab.active.border,
    "tab.activeBorderTop": tab.active.borderTop,
    "tab.border": tab.border,
    "tab.inactiveForeground": tab.default.fg,
    "tab.inactiveBackground": tab.default.bg,
    "tab.hoverBackground": tab.hover.bg,
    "tab.hoverForeground": tab.hover.fg,
    "tab.unfocusedActiveBorder": "",
    "tab.unfocusedHoverBackground": "",
    "tab.unfocusedActiveBorderTop": "",

    "breadcrumb.foreground": fg4,
    "breadcrumb.focusForeground": fg1,
    "breadcrumb.activeSelectionForeground": fg1,
    "breadcrumbPicker.background": bg1,

    "editorWidget.background": bg1,

    "editor.foreground": fg1,
    "editor.background": bg1,
    "editor.foldBackground": `${bg2}80`,
    "editor.lineHighlightBackground": bg2,
    // "editor.lineHighlightBorder": "",
    "editorLineNumber.foreground": syntax.comment,
    "editorLineNumber.activeForeground": highlight,
    "editorIndentGuide.background": `${indent}65`,
    "editorIndentGuide.activeBackground": indent,
    "editorWhitespace.foreground": indent,
    "editorCursor.foreground": cursor,
    "editorLink.activeForeground": link,

    "editor.findMatchBackground": `${search}40`,
    "editor.findMatchHighlightBackground": `${search}30`,
    "editor.rangeHighlightBackground": `${search}30`,
    "editor.linkedEditingBackground": "",
    "editor.inactiveSelectionBackground": `${selection}90`,
    "editor.selectionBackground": selection,
    "editor.selectionHighlightBackground": selection,

    "editorBracketMatch.background": selection,
    "editorBracketMatch.border": fg4,

    "editorGutter.modifiedBackground": diff.modified,
    "editorGutter.addedBackground": diff.added,
    "editorGutter.deletedBackground": diff.deleted,

    "diffEditor.insertedLineBackground": `${diff.added}25`,
    "diffEditor.removedTextBackground": `${diff.deleted}25`,

    "scrollbarSlider.background": `${fg4}70`,
    "scrollbarSlider.hoverBackground": `${fg4}90`,
    "scrollbarSlider.activeBackground": fg4,

    "editorOverviewRuler.border": ansi.red,

    // "panel.background": "",
    // "panel.border": "",
    // "panelTitle.activeBorder": "",
    // "panelTitle.activeForeground": "",
    // "panelTitle.inactiveForeground": "",
    // "panelInput.border": "",

    "debugIcon.breakpointForeground": debug.breakpoint,
    "debugConsole.infoForeground": debug.info,
    "debugConsole.warningForeground": debug.warning,
    "debugConsole.errorForeground": debug.error,
    "debugConsole.sourceForeground": debug.source,
    "debugConsoleInputIcon.foreground": debug.inputIcon,
    "debugToolBar.background": debug.toolBar,

    "debugTokenExpression.name": syntax.class,
    "debugTokenExpression.value": syntax.variable,
    "debugTokenExpression.string": syntax.string,
    "debugTokenExpression.boolean": syntax.bool,
    "debugTokenExpression.number": syntax.num,
    "debugTokenExpression.error": syntax.error,

    "terminal.foreground": fg4,
    "terminal.ansiBlack": ansi.black,
    "terminal.ansiRed": ansi.red,
    "terminal.ansiGreen": ansi.green,
    "terminal.ansiYellow": ansi.yellow,
    "terminal.ansiBlue": ansi.blue,
    "terminal.ansiMagenta": ansi.magenta,
    "terminal.ansiCyan": ansi.cyan,
    "terminal.ansiWhite": ansi.white,
    "terminal.ansiBrightBlack": ansi.brightBlack,
    "terminal.ansiBrightRed": ansi.brightRed,
    "terminal.ansiBrightGreen": ansi.brightGreen,
    "terminal.ansiBrightYellow": ansi.brightYellow,
    "terminal.ansiBrightBlue": ansi.brightBlue,
    "terminal.ansiBrightMagenta": ansi.brightMagenta,
    "terminal.ansiBrightCyan": ansi.brightCyan,
    "terminal.ansiBrightWhite": ansi.brightWhite,

    "editorBracketHighlight.foreground1": bracketHighlight[0],
    "editorBracketHighlight.foreground2": bracketHighlight[1],
    "editorBracketHighlight.foreground3": bracketHighlight[2],
    "editorBracketHighlight.foreground4": bracketHighlight[3],
    "editorBracketHighlight.foreground5": bracketHighlight[4],
    "editorBracketHighlight.foreground6": bracketHighlight[5],
    "editorBracketHighlight.unexpectedBracket.foreground": error,

    "gitDecoration.addedResourceForeground": diff.added,
    "gitDecoration.modifiedResourceForeground": diff.modified,
    "gitDecoration.deletedResourceForeground": diff.deleted,
    "gitDecoration.untrackedResourceForeground": diff.untracked,
    "gitDecoration.ignoredResourceForeground": diff.ignored,
    "gitDecoration.conflictingResourceForeground": diff.conflicting,
    "gitDecoration.submoduleResourceForeground": diff.submodule,

    "peekViewEditor.background": peekView.editorBackground,
    "peekViewEditor.matchHighlightBackground": peekView.editorMatchHighlight,
    "peekViewResult.background": peekView.resultBackground,
    "peekViewResult.matchHighlightBackground": peekView.resultMatchHighlight,

    "merge.currentHeaderBackground": merge.currentHeader,
    "merge.currentContentBackground": merge.currentContent,
    "merge.incomingHeaderBackground": merge.incomingHeader,
    "merge.incomingContentBackground": merge.incomingContent,
    "merge.commonContentBackground": merge.commonContent,
    "merge.commonHeaderBackground": merge.commonHeader,
  };

  const tokenColors = [
    {
      scope: ["keyword"],
      settings: {
        foreground: syntax.keyword,
      },
    },
    {
      scope: ["entity.name.class", "variable.other.enummember"],
      settings: {
        foreground: syntax.class,
      },
    },
    {
      scope: ["storage.type"],
      settings: {
        foreground: syntax.keyword,
      },
    },
    {
      scope: ["variable"],
      settings: {
        foreground: syntax.variable,
      },
    },
    {
      scope: ["string"],
      settings: {
        foreground: syntax.string,
      },
    },
    {
      scope: ["punctuation.section.braces.begin"],
      settings: {
        foreground: syntax.class,
      },
    },
    {
      scope: ["support.type"],
      settings: {
        foreground: syntax.type,
      },
    },
    {
      scope: ["comment.line", "comment.block"],
      settings: {
        foreground: syntax.comment,
      },
    },
    {
      scope: ["punctuation.decorator", "entity.name.function"],
      settings: {
        foreground: syntax.num,
      },
    },
    {
      scope: ["constant.language.boolean"],
      settings: {
        foreground: syntax.bool,
      },
    },
    {
      scope: ["variable.other.readwrite"],
      settings: {
        foreground: fg1,
      },
    },
    {
      scope: ["meta.diff.header.git", "meta.diff.index.git"],
      settings: {
        foreground: diff.modified,
      },
    },
    {
      scope: ["meta.diff.header.from-file", "markup.deleted.diff"],
      settings: {
        foreground: diff.deleted,
      },
    },
    {
      scope: ["meta.diff.header.to-file", "markup.inserted.diff"],
      settings: {
        foreground: diff.added,
      },
    },
    {
      scope: ["meta.diff.range.unified"],
      settings: {
        foreground: diff.range,
      },
    },
    {
      scope: ["source.diff"],
      settings: {
        foreground: diff.fg,
      },
    },
    {
      scope: ["constant.numeric"],
      settings: {
        foreground: syntax.num,
      },
    },
    {
      scope: ["entity.name.tag"],
      settings: {
        foreground: syntax.variable,
      },
    },
    {
      scope: ["meta.attribute.style"],
      settings: {
        foreground: syntax.type,
      },
    },
  ];

  return {
    name: name,
    type,
    semanticHighlighting: true,
    colors: Object.entries(colors).reduce(
      (acc, [key, value]) => (value !== "" ? { ...acc, [key]: value } : acc),
      {}
    ),
    tokenColors,
  };
}

module.exports = getTheme;
