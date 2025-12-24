import { useSelector, useDispatch } from "react-redux";
import { type StoreType } from "../store";
import {
  LANG_LIST,
  setLangAction,
  setThemeAction,
  THEME_LIST,
  type LangListType,
  type ThemeListType,
} from "../store/reducers/systemConfigReducer";

export default function Header() {
  const theme = useSelector<StoreType, ThemeListType>((state) => state.theme);
  const lang = useSelector<StoreType, LangListType>((state) => state.lang);

  const dispatch = useDispatch();

  const handleThemeChange = () => {
    const currentIndex = THEME_LIST.indexOf(theme);

    const newIndex = (currentIndex + 1) % THEME_LIST.length;

    dispatch(setThemeAction(THEME_LIST[newIndex]));
  };

  const handleLangChange = () => {
    const currentIndex = LANG_LIST.indexOf(lang);

    const newIndex = (currentIndex + 1) % LANG_LIST.length;

    dispatch(setLangAction(LANG_LIST[newIndex]));
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
    </div>
  );
}
