const palette = {
  neutral: {
    n900: "#383838",
    n800: "#404040",
    n700: "#4D4D4D",
    n600: "#595959",
    n500: "#666666",
    n400: "#747474",
    n300: "#808080",
    n200: "#8C8C8C",
    n100: "#999999",
    n90: "#BDBDBD",
    n80: "#C4C4C4",
    n70: "#C9C9C9",
    n60: "#D1D1D1",
    n50: "#D9D9D9",
    n40: "#E0E0E0",
    n30: "#E8E8E8",
    n20: "#F0F0F0",
    n10: "#F7F7F7",
    n0: "#FFFFFF",
  },
  neutralAlpha: {
    n900a: "rgba(56, 56, 56, 1)",
    n800a: "rgba(56, 56, 56, 0.95)",
    n700a: "rgba(56, 56, 56, 0.89)",
    n600a: "rgba(56, 56, 56, 0.82)",
    n500a: "rgba(56, 56, 56, 0.77)",
    n400a: "rgba(56, 56, 56, 0.71)",
    n300a: "rgba(56, 56, 56, 0.66)",
    n200a: "rgba(56, 56, 56, 0.60)",
    n100a: "rgba(56, 56, 56, 0.54)",
    n90a: "rgba(56, 56, 56, 0.48)",
    n80a: "rgba(56, 56, 56, 0.42)",
    n70a: "rgba(56, 56, 56, 0.36)",
    n60a: "rgba(56, 56, 56, 0.31)",
    n50a: "rgba(56, 56, 56, 0.25)",
    n40a: "rgba(56, 56, 56, 0.13)",
    n30a: "rgba(56, 56, 56, 0.08)",
    n20a: "rgba(56, 56, 56, 0.04)",
    n10a: "rgba(56, 56, 56, 0.02)",
    n0a: "rgba(56, 56, 56, 0)",
  },
  red: {
    r500: "#BF2600",
    r400: "#DE350B",
    r300: "#FF5630",
    r200: "#FF7452",
    r100: "#FF8F73",
    r75: "#FFBDAD",
    r50: "#FFEBE6",
  },
  yellow: {
    y500: "#D89A00",
    y400: "#FFB600",
    y300: "#FFCC00",
    y200: "#FFE066",
    y100: "#FFEB99",
    y75: "#FFF5CC",
    y50: "#FFFAE6",
  },
  green: {
    g500: "#0C733B",
    g400: "#109C50",
    g300: "#15CC69",
    g200: "#57D992",
    g100: "#79F2C0",
    g75: "#CCFFE4",
    g50: "#E5FFF1",
  },
  blue: {
    b500: "#004480",
    b400: "#0059A7",
    b300: "#1FA7F2",
    b200: "#61AEF2",
    b100: "#91C5F2",
    b75: "#CCE7FF",
    b50: "#E5F3FF",
  },
  teal: {
    t500: "#008DA6",
    t400: "#00A3BF",
    t300: "#00B8D9",
    t200: "#00C7E6",
    t100: "#79E2F2",
    t75: "#B3F5FF",
    t50: "#E6FCFF",
  },
  purple: {
    p500: "#403294",
    p400: "#5243AA",
    p300: "#6554C0",
    p200: "#8777D9",
    p100: "#998DD9",
    p75: "#C0B6F2",
    p50: "#EAE6FF",
  },
};

const inubepTheme = {
  assisted: {
    title: {
      appearance: {
        Value: "",
        Reference: "inubep.assisted.title.appearance",
        Token: "dark",
      },
    },
    description: {
      appearance: {
        Value: "",
        Reference: "inubep.assisted.description.appearance",
        Token: "gray",
      },
    },
    track: {
      color: {
        Value: "",
        Reference: "inubep.assisted.track.color",
        Token: "inubep.palette.neutral.n30",
      },
    },
    bar: {
      color: {
        Value: "",
        Reference: "inubep.assisted.bar.color",
        Token: "inubep.palette.blue.b400",
      },
    },
    background: {
      color: {
        Value: "",
        Reference: "inubep.assisted.background.color",
        Token: "inubep.palette.neutral.n10",
      },
    },
    button: {
      appearance: {
        Value: "",
        Reference: "inubep.assisted.button.appearance",
        Token: "primary",
      },
    },
    step: {
      color: {
        Value: "",
        Reference: "inubep.assisted.step.color",
        Token: "inubep.palette.blue.b400",
      },
    },
  },
  breadcrumbs: {
    content: {
      active: "inubep.breadcrumbs.content.active",
    },
  },
  blanket: {
    background: {
      color: palette.neutralAlpha.n100a,
    },
  },
  button: {
    primary: {
      content: {
        color: {
          regular: "inubep.palette.blue.b400",
          disabled: "inubep.palette.neutral.n20",
          hover: "inubep.palette.blue.b300",
        },
      },
      border: {
        color: {
          regular: "inubep.palette.blue.b400",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.blue.b300",
        },
      },
      contrast: {
        appearance: "light",
      },
    },
    success: {
      content: {
        color: {
          regular: "inubep.palette.green.g400",
          disabled: "inubep.palette.neutral.n20",
          hover: "inubep.palette.green.g300",
        },
      },
      border: {
        color: {
          regular: "inubep.palette.green.g400",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.green.g300",
        },
      },
      contrast: {
        appearance: "light",
      },
    },
    warning: {
      content: {
        color: {
          regular: "inubep.palette.yellow.y400",
          disabled: "inubep.palette.neutral.n20",
          hover: "inubep.palette.yellow.y300",
        },
      },
      border: {
        color: {
          regular: "inubep.palette.yellow.y400",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.yellow.y300",
        },
      },
      contrast: {
        appearance: "dark",
      },
    },
    danger: {
      content: {
        color: {
          regular: "inubep.palette.red.r400",
          disabled: "inubep.palette.neutral.n20",
          hover: "inubep.palette.red.r300",
        },
      },
      border: {
        color: {
          regular: "inubep.palette.red.r400",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.red.r300",
        },
      },
      contrast: {
        appearance: "light",
      },
    },
    help: {
      content: {
        color: {
          regular: "inubep.palette.purple.p400",
          disabled: "inubep.palette.neutral.n20",
          hover: "inubep.palette.purple.p300",
        },
      },
      border: {
        color: {
          regular: "inubep.palette.purple.p400",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.purple.p300",
        },
      },
      contrast: {
        appearance: "light",
      },
    },
    dark: {
      content: {
        color: {
          regular: "inubep.palette.neutral.n900",
          disabled: "inubep.palette.neutral.n20",
          hover: "inubep.palette.neutral.n500",
        },
      },
      border: {
        color: {
          regular: "inubep.palette.neutral.n900",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.neutral.n500",
        },
      },
      contrast: {
        appearance: "light",
      },
    },
    gray: {
      content: {
        color: {
          regular: "inubep.palette.neutral.n20",
          disabled: "inubep.palette.neutral.n20",
          hover: "inubep.palette.neutral.n30",
        },
      },
      border: {
        color: {
          regular: "inubep.palette.neutral.n200",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.neutral.n90",
        },
      },
      contrast: {
        appearance: "gray",
      },
    },
    light: {
      content: {
        color: {
          regular: "inubep.palette.neutral.n10",
          disabled: "inubep.palette.neutral.n20",
          hover: "inubep.palette.neutral.n0",
        },
      },
      border: {
        color: {
          regular: "inubep.palette.neutral.n10",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.neutral.n0",
        },
      },
      contrast: {
        appearance: "dark",
      },
    },
  },
  countdownBar: {
    primary: {
      color: palette.blue.b400,
    },
    success: {
      color: palette.green.g400,
    },
    warning: {
      color: palette.yellow.y400,
    },
    danger: {
      color: palette.red.r400,
    },
    help: {
      color: palette.purple.p400,
    },
    dark: {
      color: palette.neutral.n900,
    },
    gray: {
      color: palette.neutral.n20,
    },
    light: {
      color: palette.neutral.n10,
    },
  },
  divider: {
    stroke: {
      color: palette.neutral.n40,
    },
  },
  fieldset: {
    legend: {
      color: {
        "inubep.fieldset.legend.color": "inubep.palette.neutral.n200",
      },
    },
    border: {
      color: {
        "inubep.fieldset.border.color": "inubep.palette.neutral.n40",
      },
    },
  },
  fullscreenNav: {
    background: {
      color: {
        Value: "",
        Reference: "inubep.fullscreenNav.background.color",
        Token: "inubep.palette.neutral.n10",
      },
    },
    divider: {
      color: {
        Value: "",
        Reference: "inubep.fullscreenNav.divider.color",
        Token: "inubep.palette.neutral.n40",
      },
    },
    title: {
      appearance: {
        Value: "",
        Reference: "inubep.fullscreenNav.title.appearance",
        Token: "gray",
      },
    },
    subtitle: {
      appearance: {
        regular: {
          Value: "",
          Reference: "inubep.fullscreenNav.subtitle.appearance.regular",
          Token: "gray",
        },
        expanded: {
          Value: "",
          Reference: "inubep.fullscreenNav.subtitle.appearance.expanded",
          Token: "primary",
        },
      },
      background: {
        expanded: {
          Value: "",
          Reference: "inubep.fullscreenNav.subtitle.background.expanded",
          Token: "inubep.palette.neutral.n30",
        },
      },
    },
    link: {
      appearance: {
        regular: {
          Value: "",
          Reference: "inubep.fullscreenNav.link.appearance.regular",
          Token: "dark",
        },
        selected: {
          Value: "",
          Reference: "inubep.fullscreenNav.link.appearance.selected",
          Token: "primary",
        },
      },
      background: {
        selected: {
          Value: "",
          Reference: "inubep.fullscreenNav.link.background.selected",
          Token: "inubep.palette.neutral.n30",
        },
        hover: {
          Value: "",
          Reference: "inubep.fullscreenNav.link.background.hover",
          Token: "inubep.palette.neutral.n30",
        },
      },
    },
    copyright: {
      appearance: {
        Value: "",
        Reference: "inubep.fullscreenNav.copyright.appearance",
        Token: "gray",
      },
    },
    burger: {
      appearance: {
        Value: "",
        Reference: "inubep.fullscreenNav.burger.appearance",
        Token: "dark",
      },
    },
  },
  header: {
    background: {
      color: "inubep.palette.neutral.n0",
    },
    content: {
      appearance: "gray",
    },
  },
  icon: {
    primary: {
      content: {
        color: {
          regular: palette.blue.b400,
          disabled: palette.neutral.n70,
          hover: palette.blue.b300,
        },
      },
      background: {
        color: {
          regular: palette.blue.b400,
          disabled: palette.neutral.n20,
          hover: palette.blue.b300,
        },
      },
      contrast: {
        color: {
          regular: palette.neutral.n10,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n10,
        },
      },
    },
    success: {
      content: {
        color: {
          regular: palette.green.g400,
          disabled: palette.neutral.n70,
          hover: palette.green.g300,
        },
      },
      background: {
        color: {
          regular: palette.green.g400,
          disabled: palette.neutral.n20,
          hover: palette.green.g300,
        },
      },
      contrast: {
        color: {
          regular: palette.neutral.n10,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n10,
        },
      },
    },
    warning: {
      content: {
        color: {
          regular: palette.yellow.y400,
          disabled: palette.neutral.n70,
          hover: palette.yellow.y300,
        },
      },
      background: {
        color: {
          regular: palette.yellow.y400,
          disabled: palette.neutral.n20,
          hover: palette.yellow.y300,
        },
      },
      contrast: {
        color: {
          regular: palette.neutral.n10,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n10,
        },
      },
    },
    danger: {
      content: {
        color: {
          regular: palette.red.r400,
          disabled: palette.neutral.n70,
          hover: palette.red.r300,
        },
      },
      background: {
        color: {
          regular: palette.red.r400,
          disabled: palette.neutral.n20,
          hover: palette.red.r300,
        },
      },
      contrast: {
        color: {
          regular: palette.neutral.n10,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n10,
        },
      },
    },
    help: {
      content: {
        color: {
          regular: palette.purple.p400,
          disabled: palette.neutral.n70,
          hover: palette.purple.p300,
        },
      },
      background: {
        color: {
          regular: palette.purple.p400,
          disabled: palette.neutral.n20,
          hover: palette.purple.p300,
        },
      },
      contrast: {
        color: {
          regular: palette.neutral.n10,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n10,
        },
      },
    },
    dark: {
      content: {
        color: {
          regular: palette.neutral.n900,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n500,
        },
      },
      background: {
        color: {
          regular: palette.neutral.n900,
          disabled: palette.neutral.n20,
          hover: palette.neutral.n500,
        },
      },
      contrast: {
        color: {
          regular: palette.neutral.n10,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n10,
        },
      },
    },
    gray: {
      content: {
        color: {
          regular: palette.neutral.n300,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n100,
        },
      },
      background: {
        color: {
          regular: palette.neutral.n20,
          disabled: palette.neutral.n20,
          hover: palette.neutral.n30,
        },
      },
      contrast: {
        color: {
          regular: palette.neutral.n300,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n900,
        },
      },
    },
    light: {
      content: {
        color: {
          regular: palette.neutral.n10,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n0,
        },
      },
      background: {
        color: {
          regular: palette.neutral.n10,
          disabled: palette.neutral.n20,
          hover: palette.neutral.n0,
        },
      },
      contrast: {
        color: {
          regular: palette.neutral.n900,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n900,
        },
      },
    },
  },
  input: {
    border: {
      color: {
        regular: "inubep.palette.neutral.n40",
        disabled: "inubep.palette.neutral.n40",
        focus: "inubep.palette.blue.b300",
        invalid: "inubep.palette.red.r400",
      },
    },
    background: {
      color: {
        regular: "inubep.palette.neutral.n0",
        disabled: "inubep.palette.neutral.n10",
      },
    },
    content: {
      color: {
        regular: "inubep.palette.neutral.n900",
        disabled: "inubep.palette.neutral.n70",
      },
    },
    placeholder: {
      color: {
        regular: "inubep.palette.neutral.n300",
      },
    },
    message: {
      color: {
        regular: "inubep.palette.red.r400",
      },
    },
    required: {
      color: {
        regular: "inubep.palette.red.r400",
        disabled: "inubep.palette.neutral.n70",
      },
    },
    optionList: {
      appearance: {
        regular: "dark",
        expanded: "primary",
      },
      background: {
        expanded: "inubep.palette.neutral.n0",
        selected: "inubep.palette.neutral.n30",
      },
    },
  },
  label: {
    content: {
      color: {
        regular: "inubep.palette.neutral.n900",
        disabled: "inubep.palette.neutral.n70",
        focus: "inubep.palette.blue.b300",
        invalid: "inubep.palette.red.r400",
      },
    },
  },
  link: {
    content: {
      color: {
        regular: "inubep.palette.blue.b400",
        hover: "inubep.palette.blue.b300",
      },
    },
  },
  menu: {
    avatar: {
      appearance: {
        Value: "",
        Reference: "inubep.menu.avatar.appearance",
        Token: "primary",
      },
    },
    username: {
      appearance: {
        Value: "",
        Reference: "inubep.menu.username.appearance",
        Token: "dark",
      },
    },
    client: {
      appearance: {
        Value: "",
        Reference: "inubep.menu.client.appearance",
        Token: "gray",
      },
    },
    heading: {
      appearance: {
        Value: "",
        Reference: "inubep.menu.heading.appearance",
        Token: "gray",
      },
    },
    item: {
      content: {
        Value: "",
        Reference: "inubep.menu.item.content",
        Token: "dark",
      },
      background: {
        hover: {
          Value: "",
          Reference: "inubep.menu.item.background.hover",
          Token: "inubep.palette.neutral.n20",
        },
        disabled: {
          Value: "",
          Reference: "inubep.menu.item.background.disabled",
          Token: "inubep.palette.neutral.n20",
        },
      },
    },
    background: {
      color: {
        Value: "",
        Reference: "inubep.menu.background.color",
        Token: "inubep.palette.neutral.n0",
      },
    },
    divider: {
      color: {
        Value: "",
        Reference: "inubep.menu.divider.color",
        Token: "inubep.palette.neutral.n40",
      },
    },
  },
  nav: {
    background: {
      color: {
        Value: "",
        Reference: "inubep.nav.background.color",
        Token: "inubep.palette.neutral.n10",
      },
    },
    divider: {
      color: {
        Value: "",
        Reference: "inubep.nav.divider.color",
        Token: "inubep.palette.neutral.n40",
      },
    },
    title: {
      appearance: {
        Value: "",
        Reference: "inubep.nav.title.appearance",
        Token: "gray",
      },
    },
    subtitle: {
      appearance: {
        regular: {
          Value: "",
          Reference: "inubep.nav.subtitle.appearance.regular",
          Token: "gray",
        },
        expanded: {
          Value: "",
          Reference: "inubep.nav.subtitle.appearance.expanded",
          Token: "primary",
        },
      },
      background: {
        expanded: {
          Value: "",
          Reference: "inubep.nav.subtitle.background.expanded",
          Token: "inubep.palette.neutral.n30",
        },
      },
    },
    link: {
      appearance: {
        regular: {
          Value: "",
          Reference: "inubep.nav.link.appearance.regular",
          Token: "dark",
        },
        selected: {
          Value: "",
          Reference: "inubep.nav.link.appearance.selected",
          Token: "primary",
        },
      },
      background: {
        selected: {
          Value: "",
          Reference: "inubep.nav.link.background.selected",
          Token: "inubep.palette.neutral.n30",
        },
        hover: {
          Value: "",
          Reference: "inubep.nav.link.background.hover",
          Token: "inubep.palette.neutral.n30",
        },
      },
    },
    copyright: {
      appearance: {
        Value: "",
        Reference: "inubep.nav.copyright.appearance",
        Token: "gray",
      },
    },
  },
  palette: palette,
  flag: {
    primary: {
      background: {
        color: {
          Value: "",
          Reference: "inubep.flag.primary.background.color",
          Token: "inubep.palette.blue.b50",
        },
      },
      countdownBar: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.primary.countdownBar.appearance",
          Token: "primary",
        },
      },
      icon: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.primary.icon.appearance",
          Token: "primary",
        },
      },
      content: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.primary.content.appearance",
          Token: "dark",
        },
      },
    },
    success: {
      background: {
        color: {
          Value: "",
          Reference: "inubep.flag.success.background.color",
          Token: "inubep.palette.green.g50",
        },
      },
      countdownBar: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.success.countdownBar.appearance",
          Token: "success",
        },
      },
      icon: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.success.icon.appearance",
          Token: "success",
        },
      },
      content: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.success.content.appearance",
          Token: "dark",
        },
      },
    },
    warning: {
      background: {
        color: {
          Value: "",
          Reference: "inubep.flag.warning.background.color",
          Token: "inubep.palette.yellow.y50",
        },
      },
      countdownBar: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.warning.countdownBar.appearance",
          Token: "warning",
        },
      },
      icon: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.warning.icon.appearance",
          Token: "warning",
        },
      },
      content: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.warning.content.appearance",
          Token: "dark",
        },
      },
    },
    danger: {
      background: {
        color: {
          Value: "",
          Reference: "inubep.flag.danger.background.color",
          Token: "inubep.palette.red.r50",
        },
      },
      countdownBar: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.danger.countdownBar.appearance",
          Token: "danger",
        },
      },
      icon: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.danger.icon.appearance",
          Token: "danger",
        },
      },
      content: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.danger.content.appearance",
          Token: "dark",
        },
      },
    },
    help: {
      background: {
        color: {
          Value: "",
          Reference: "inubep.flag.help.background.color",
          Token: "inubep.palette.purple.p50",
        },
      },
      countdownBar: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.help.countdownBar.appearance",
          Token: "help",
        },
      },
      icon: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.help.icon.appearance",
          Token: "help",
        },
      },
      content: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.help.content.appearance",
          Token: "dark",
        },
      },
    },
    dark: {
      background: {
        color: {
          Value: "",
          Reference: "inubep.flag.dark.background.color",
          Token: "inubep.palette.neutral.n30",
        },
      },
      countdownBar: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.dark.countdownBar.appearance",
          Token: "dark",
        },
      },
      icon: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.dark.icon.appearance",
          Token: "dark",
        },
      },
      content: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.dark.content.appearance",
          Token: "dark",
        },
      },
    },
    gray: {
      background: {
        color: {
          Value: "",
          Reference: "inubep.flag.gray.background.color",
          Token: "inubep.palette.neutral.n10",
        },
      },
      countdownBar: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.gray.countdownBar.appearance",
          Token: "gray",
        },
      },
      icon: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.gray.icon.appearance",
          Token: "gray",
        },
      },
      content: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.gray.content.appearance",
          Token: "dark",
        },
      },
    },
    light: {
      background: {
        color: {
          Value: "",
          Reference: "inubep.flag.light.background.color",
          Token: "inubep.palette.neutral.n0",
        },
      },
      countdownBar: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.light.countdownBar.appearance",
          Token: "dark",
        },
      },
      icon: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.light.icon.appearance",
          Token: "dark",
        },
      },
      content: {
        appearance: {
          Value: "",
          Reference: "inubep.flag.light.content.appearance",
          Token: "dark",
        },
      },
    },
  },
  skeleton: {
    background: {
      color: palette.neutral.n30,
    },
    animation: {
      color: palette.neutral.n10,
    },
  },
  spinner: {
    primary: {
      solid: {
        spin: {
          color: palette.blue.b400,
        },
        track: {
          color: palette.neutral.n30,
        },
      },
      transparent: {
        spin: {
          color: palette.blue.b400,
        },
        track: {
          color: palette.neutralAlpha.n0a,
        },
      },
    },
    success: {
      solid: {
        spin: {
          color: palette.green.g400,
        },
        track: {
          color: palette.neutral.n30,
        },
      },
      transparent: {
        spin: {
          color: palette.green.g400,
        },
        track: {
          color: palette.neutralAlpha.n0a,
        },
      },
    },
    warning: {
      solid: {
        spin: {
          color: palette.yellow.y400,
        },
        track: {
          color: palette.neutral.n30,
        },
      },
      transparent: {
        spin: {
          color: palette.yellow.y400,
        },
        track: {
          color: palette.neutralAlpha.n0a,
        },
      },
    },
    danger: {
      solid: {
        spin: {
          color: palette.red.r400,
        },
        track: {
          color: palette.neutral.n30,
        },
      },
      transparent: {
        spin: {
          color: palette.red.r400,
        },
        track: {
          color: palette.neutralAlpha.n0a,
        },
      },
    },
    help: {
      solid: {
        spin: {
          color: palette.purple.p400,
        },
        track: {
          color: palette.neutral.n30,
        },
      },
      transparent: {
        spin: {
          color: palette.purple.p400,
        },
        track: {
          color: palette.neutralAlpha.n0a,
        },
      },
    },
    dark: {
      solid: {
        spin: {
          color: palette.neutral.n900,
        },
        track: {
          color: palette.neutral.n30,
        },
      },
      transparent: {
        spin: {
          color: palette.neutral.n900,
        },
        track: {
          color: palette.neutralAlpha.n0a,
        },
      },
    },
    gray: {
      solid: {
        spin: {
          color: palette.neutral.n100,
        },
        track: {
          color: palette.neutral.n30,
        },
      },
      transparent: {
        spin: {
          color: palette.neutral.n100,
        },
        track: {
          color: palette.neutralAlpha.n0a,
        },
      },
    },
    light: {
      solid: {
        spin: {
          color: palette.neutral.n10,
        },
        track: {
          color: palette.neutral.n30,
        },
      },
      transparent: {
        spin: {
          color: palette.neutral.n10,
        },
        track: {
          color: palette.neutralAlpha.n0a,
        },
      },
    },
  },
  tabs: {
    content: {
      appearance: {
        selected: {
          Token: "primary",
          Reference: "inubep.tabs.content.appearance.selected",
        },
      },
    },
  },
  tag: {
    primary: {
      normal: {
        background: {
          color: "inubep.palette.blue.b50",
        },
        content: {
          appearance: "primary",
        },
      },
      strong: {
        background: {
          color: "inubep.palette.blue.b400",
        },
        content: {
          appearance: "light",
        },
      },
    },
    success: {
      normal: {
        background: {
          color: "inubep.palette.green.g50",
        },
        content: {
          appearance: "success",
        },
      },
      strong: {
        background: {
          color: "inubep.palette.green.g400",
        },
        content: {
          appearance: "light",
        },
      },
    },
    warning: {
      normal: {
        background: {
          color: "inubep.palette.yellow.y50",
        },
        content: {
          appearance: "warning",
        },
      },
      strong: {
        background: {
          color: "inubep.palette.yellow.y400",
        },
        content: {
          appearance: "dark",
        },
      },
    },
    danger: {
      normal: {
        background: {
          color: "inubep.palette.red.r50",
        },
        content: {
          appearance: "danger",
        },
      },
      strong: {
        background: {
          color: "inubep.palette.red.r400",
        },
        content: {
          appearance: "light",
        },
      },
    },
    help: {
      normal: {
        background: {
          color: "inubep.palette.purple.p50",
        },
        content: {
          appearance: "help",
        },
      },
      strong: {
        background: {
          color: "inubep.palette.purple.p400",
        },
        content: {
          appearance: "light",
        },
      },
    },
    dark: {
      normal: {
        background: {
          color: "inubep.palette.neutral.n30",
        },
        content: {
          appearance: "dark",
        },
      },
      strong: {
        background: {
          color: "inubep.palette.neutral.n900",
        },
        content: {
          appearance: "light",
        },
      },
    },
    gray: {
      normal: {
        background: {
          color: "inubep.palette.neutral.n10",
        },
        content: {
          appearance: "gray",
        },
      },
      strong: {
        background: {
          color: "inubep.palette.neutral.n30",
        },
        content: {
          appearance: "gray",
        },
      },
    },
    light: {
      normal: {
        background: {
          color: "inubep.palette.neutral.n0",
        },
        content: {
          appearance: "dark",
        },
      },
      strong: {
        background: {
          color: "inubep.palette.neutral.n10",
        },
        content: {
          appearance: "dark",
        },
      },
    },
  },
  table: {
    border: {
      color: {
        Value: "",
        Reference: "inubep.table.border.color",
        Token: "inubep.palette.neutral.n40",
      },
    },
    heading: {
      background: {
        regular: {
          Value: "",
          Reference: "inubep.table.heading.background.regular",
          Token: "inubep.palette.neutral.n0",
        },
      },
      color: {
        regular: {
          Value: "",
          Reference: "inubep.table.heading.color.regular",
          Token: "inubep.palette.neutral.n900",
        },
      },
    },
    action: {
      background: {
        action: {
          Value: "",
          Reference: "inubep.table.action.background.action",
          Token: "inubep.palette.neutral.n30",
        },
      },
      color: {
        action: {
          Value: "",
          Reference: "inubep.table.action.color.action",
          Token: "inubep.palette.neutral.n900",
        },
      },
    },
    row: {
      background: {
        regular: {
          Value: "",
          Reference: "inubep.table.row.background.regular",
          Token: "inubep.palette.neutral.n0",
        },
        zebra: {
          Value: "",
          Reference: "inubep.table.row.background.zebra",
          Token: "inubep.palette.neutral.n30",
        },
      },
      color: {
        regular: {
          Value: "",
          Reference: "inubep.table.row.color.regular",
          Token: "inubep.palette.neutral.n900",
        },
        zebra: {
          Value: "",
          Reference: "inubep.table.row.color.zebra",
          Token: "inubep.palette.neutral.n900",
        },
      },
    },
    cell: {
      color: {
        primary: {
          Value: "",
          Reference: "inubep.table.cell.color.primary",
          Token: "inubep.palette.blue.b400",
        },
        success: {
          Value: "",
          Reference: "inubep.table.cell.color.success",
          Token: "inubep.palette.green.g400",
        },
        warning: {
          Value: "",
          Reference: "inubep.table.cell.color.warning",
          Token: "inubep.palette.yellow.y400",
        },
        danger: {
          Value: "",
          Reference: "inubep.table.cell.color.danger",
          Token: "inubep.palette.red.r400",
        },
        help: {
          Value: "",
          Reference: "inubep.table.cell.color.help",
          Token: "inubep.palette.purple.p400",
        },
        dark: {
          Value: "",
          Reference: "inubep.table.cell.color.dark",
          Token: "inubep.palette.neutral.n900",
        },
        gray: {
          Value: "",
          Reference: "inubep.table.cell.color.gray",
          Token: "inubep.palette.neutral.n300",
        },
        light: {
          Value: "",
          Reference: "inubep.table.cell.color.light",
          Token: "inubep.palette.neutral.n900",
        },
      },
      background: {
        primary: {
          Value: "",
          Reference: "inubep.table.cell.background.primary",
          Token: "inubep.palette.blue.b50",
        },
        success: {
          Value: "",
          Reference: "inubep.table.cell.background.success",
          Token: "inubep.palette.green.g50",
        },
        warning: {
          Value: "",
          Reference: "inubep.table.cell.background.warning",
          Token: "inubep.palette.yellow.y50",
        },
        danger: {
          Value: "",
          Reference: "inubep.table.cell.background.danger",
          Token: "inubep.palette.red.r50",
        },
        help: {
          Value: "",
          Reference: "inubep.table.cell.background.help",
          Token: "inubep.palette.purple.p50",
        },
        dark: {
          Value: "",
          Reference: "inubep.table.cell.background.dark",
          Token: "inubep.palette.neutral.n30",
        },
        gray: {
          Value: "",
          Reference: "inubep.table.cell.background.gray",
          Token: "inubep.palette.neutral.n20",
        },
        light: {
          Value: "",
          Reference: "inubep.table.cell.background.light",
          Token: "inubep.palette.neutral.n0",
        },
      },
    },
    pagination: {
      appearance: {
        Value: "",
        Reference: "inubep.table.pagination.appearance",
        Token: "gray",
      },
    },
    caption: {
      appearance: {
        Value: "",
        Reference: "inubep.table.caption.appearance",
        Token: "gray",
      },
    },
  },
  text: {
    primary: {
      content: {
        color: {
          regular: "inubep.palette.blue.b400",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.blue.b300",
        },
      },
    },
    success: {
      content: {
        color: {
          regular: "inubep.palette.green.g400",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.green.g300",
        },
      },
    },
    warning: {
      content: {
        color: {
          regular: "inubep.palette.yellow.y400",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.yellow.y300",
        },
      },
    },
    danger: {
      content: {
        color: {
          regular: "inubep.palette.red.r400",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.red.r300",
        },
      },
    },
    help: {
      content: {
        color: {
          regular: "inubep.palette.purple.p400",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.purple.p300",
        },
      },
    },
    dark: {
      content: {
        color: {
          regular: "inubep.palette.neutral.n900",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.neutral.n500",
        },
      },
    },
    gray: {
      content: {
        color: {
          regular: "inubep.palette.neutral.n300",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.neutral.n100",
        },
      },
    },
    light: {
      content: {
        color: {
          regular: "inubep.palette.neutral.n10",
          disabled: "inubep.palette.neutral.n70",
          hover: "inubep.palette.neutral.n0",
        },
      },
    },
  },
  toggle: {
    on: {
      background: {
        color: {
          regular: {
            "inubep.toggle.on.background.color.regular":
              "inubep.palette.green.g400",
          },
          disabled: {
            "inubep.toggle.on.background.color.disabled":
              "inubep.palette.neutral.n20",
          },
          hover: {
            "inubep.toggle.on.background.color.hover":
              "inubep.palette.green.g300",
          },
        },
      },
      "toggle-background": {
        color: {
          regular: {
            "inubep.toggle.on.toggle-background.color.regular":
              "inubep.palette.neutral.n0",
          },
          disabled: {
            "inubep.toggle.on.toggle-background.color.disabled":
              "inubep.palette.neutral.n0",
          },
          hover: {
            "inubep.toggle.on.toggle-background.color.hover":
              "inubep.palette.neutral.n0",
          },
        },
      },
      "toggle-border": {
        color: {
          regular: {
            "inubep.toggle.on.toggle-border.color.regular":
              "inubep.palette.neutralAlpha.n0a",
          },
          disabled: {
            "inubep.toggle.on.toggle-border.color.disabled":
              "inubep.palette.neutral.n70",
          },
          hover: {
            "inubep.toggle.on.toggle-border.color.hover":
              "inubep.palette.neutralAlpha.n0a",
          },
        },
      },
      icon: {
        appearance: {
          "inubep.toggle.on.icon.appearance": "light",
        },
      },
    },
    off: {
      background: {
        color: {
          regular: {
            "inubep.toggle.off.background.color.regular":
              "inubep.palette.neutral.n20",
          },
          disabled: {
            "inubep.toggle.off.background.color.disabled":
              "inubep.palette.neutral.n20",
          },
          hover: {
            "inubep.toggle.off.background.color.hover":
              "inubep.palette.neutral.n10",
          },
        },
      },
      "toggle-background": {
        color: {
          regular: {
            "inubep.toggle.off.toggle-background.color.regular":
              "inubep.palette.neutral.n0",
          },
          disabled: {
            "inubep.toggle.off.toggle-background.color.disabled":
              "inubep.palette.neutral.n0",
          },
          hover: {
            "inubep.toggle.off.toggle-background.color.hover":
              "inubep.palette.neutral.n0",
          },
        },
      },
      "toggle-border": {
        color: {
          regular: {
            "inubep.toggle.off.toggle-border.color.regular":
              "inubep.palette.neutral.n70",
          },
          disabled: {
            "inubep.toggle.off.toggle-border.color.disabled":
              "inubep.palette.neutral.n70",
          },
          hover: {
            "inubep.toggle.off.toggle-border.color.hover":
              "inubep.palette.neutral.n70",
          },
        },
      },
      icon: {
        appearance: {
          "inubep.toggle.off.icon.appearance": "gray",
        },
      },
    },
  },
  typographyTheme: {
    display: {
      large: {
        font: "Open Sans",
        lineHeight: "64px",
        size: "57px",
        tracking: "-0.25",
        weight: "400",
      },
      medium: {
        font: "Open Sans",
        lineHeight: "52px",
        size: "45px",
        tracking: "0",
        weight: "400",
      },
      small: {
        font: "Open Sans",
        lineHeight: "44px",
        size: "36px",
        tracking: "0",
        weight: "400",
      },
    },
    headline: {
      large: {
        font: "Open Sans",
        lineHeight: "40px",
        size: "32px",
        tracking: "0",
        weight: "400",
      },
      medium: {
        font: "Open Sans",
        lineHeight: "36px",
        size: "28px",
        tracking: "0",
        weight: "400",
      },
      small: {
        font: "Open Sans",
        lineHeight: "32px",
        size: "24px",
        tracking: "0",
        weight: "400",
      },
    },
    title: {
      large: {
        font: "Open Sans",
        lineHeight: "28px",
        size: "22px",
        tracking: "0",
        weight: "400",
      },
      medium: {
        font: "Open Sans",
        lineHeight: "24px",
        size: "16px",
        tracking: "0.15",
        weight: "500",
      },
      small: {
        font: "Open Sans",
        lineHeight: "20px",
        size: "14px",
        tracking: "0.1",
        weight: "500",
      },
    },
    label: {
      large: {
        font: "Open Sans",
        lineHeight: "20px",
        size: "14px",
        tracking: "0.1",
        weight: "500",
      },
      medium: {
        font: "Open Sans",
        lineHeight: "16px",
        size: "12px",
        tracking: "0.5",
        weight: "500",
      },
      small: {
        font: "Open Sans",
        lineHeight: "16px",
        size: "11px",
        tracking: "0.5",
        weight: "500",
      },
    },
    body: {
      large: {
        font: "Open Sans",
        lineHeight: "24px",
        size: "16px",
        tracking: "0.5",
        weight: "400",
      },
      medium: {
        font: "Open Sans",
        lineHeight: "20px",
        size: "14px",
        tracking: "0.25",
        weight: "400",
      },
      small: {
        font: "Open Sans",
        lineHeight: "16px",
        size: "12px",
        tracking: "0.4",
        weight: "400",
      },
    },
  },
};

export { inubepTheme };
