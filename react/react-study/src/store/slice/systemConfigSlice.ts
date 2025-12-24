import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const THEME_LIST = ["light", "dark", "purple", "origin"] as const;
export const LANG_LIST = ["zh-cn", "en-us"] as const;

export type ThemeListType = (typeof THEME_LIST)[number];
export type LangListType = (typeof LANG_LIST)[number];

interface SystemConfigState {
  theme: ThemeListType;
  lang: LangListType;
}

const initState: SystemConfigState = {
  theme: "dark",
  lang: "zh-cn",
};

const systemConfigSlice = createSlice({
  name: "systemConfig",
  initialState: initState,
  reducers: {
    setLang(state, action: PayloadAction<LangListType>) {
      state.lang = action.payload;
    },
    setTheme(state, action: PayloadAction<ThemeListType>) {
      state.theme = action.payload;
    },
  },
});

export const { setLang, setTheme } = systemConfigSlice.actions;

export default systemConfigSlice.reducer;
