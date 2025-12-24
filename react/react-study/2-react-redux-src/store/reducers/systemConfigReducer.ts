export const THEME_LIST = ["light", "dark", "purple", "origin"] as const;
export const LANG_LIST = ["zh-cn", "en-us"] as const;

export type ThemeListType = (typeof THEME_LIST)[number];
export type LangListType = (typeof LANG_LIST)[number];

export const setThemeAction = (newTheme: ThemeListType) => ({
  type: "SET_THEME" as const,
  payload: {
    newTheme,
  },
});

export const setLangAction = (newLang: LangListType) => ({
  type: "SET_LANG" as const,
  payload: {
    newLang,
  },
});

type SystemConfigAction = ReturnType<
  typeof setThemeAction | typeof setLangAction
>;
interface SystemConfigState {
  theme: ThemeListType;
  lang: LangListType;
}

const initState: SystemConfigState = {
  theme: "dark",
  lang: "zh-cn",
};

export default function (
  state: SystemConfigState = initState,
  action: SystemConfigAction
) {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload.newTheme,
      };
    case "SET_LANG":
      return {
        ...state,
        lang: action.payload.newLang,
      };
    default:
      return state;
  }
}
