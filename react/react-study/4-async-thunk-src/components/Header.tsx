import { useSelector, useDispatch } from "react-redux";
import { type DispatchType, type StoreType } from "../store";
import {
  LANG_LIST,
  setLang,
  setTheme,
  THEME_LIST,
  type LangListType,
  type ThemeListType,
} from "../store/slice/systemConfigSlice";
import { asyncConfigAction } from "../store/slice/asyncConfigSlice";

export default function Header() {
  const theme = useSelector<StoreType, ThemeListType>(
    (state) => state.systemConfig.theme
  );
  const lang = useSelector<StoreType, LangListType>(
    (state) => state.systemConfig.lang
  );

  const dispatch = useDispatch<DispatchType>();

  const handleThemeChange = () => {
    const currentIndex = THEME_LIST.indexOf(theme);

    const newIndex = (currentIndex + 1) % THEME_LIST.length;

    dispatch(setTheme(THEME_LIST[newIndex]));
  };

  const handleLangChange = () => {
    const currentIndex = LANG_LIST.indexOf(lang);

    const newIndex = (currentIndex + 1) % LANG_LIST.length;

    dispatch(setLang(LANG_LIST[newIndex]));
  };

  const getToken = () => {
    dispatch(asyncConfigAction({ userId: "111" }));
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        marginBottom: "14px",
        padding: "10px",
      }}
    >
      这是header组件
      <br />
      <button onClick={handleThemeChange}>修改主题</button>
      <button onClick={handleLangChange}>修改语种</button>
      <button onClick={getToken}>获取token</button>
    </div>
  );
}
