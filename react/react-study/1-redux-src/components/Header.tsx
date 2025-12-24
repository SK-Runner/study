import { useEffect, useState } from "react";
import store from "../store";
import {
  LANG_LIST,
  setLangAction,
  setThemeAction,
  THEME_LIST,
} from "../store/reducers/systemConfigReducer";

export default function Header() {
  const [systemConfig, setSystemConfig] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setSystemConfig(store.getState());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleThemeChange = () => {
    const currentIndex = THEME_LIST.indexOf(systemConfig.theme);

    const newIndex = (currentIndex + 1) % THEME_LIST.length;

    store.dispatch(setThemeAction(THEME_LIST[newIndex]));
  };

  const handleLangChange = () => {
    const currentIndex = LANG_LIST.indexOf(systemConfig.lang);

    const newIndex = (currentIndex + 1) % LANG_LIST.length;

    store.dispatch(setLangAction(LANG_LIST[newIndex]));
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
