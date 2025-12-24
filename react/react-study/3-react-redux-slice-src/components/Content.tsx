import { useSelector } from "react-redux";
import { type StoreType } from "../store";
import type {
  LangListType,
  ThemeListType,
} from "../store/slice/systemConfigSlice";

export default function Content() {
  const theme = useSelector<StoreType, ThemeListType>(
    (state) => state.systemConfig.theme
  );
  const lang = useSelector<StoreType, LangListType>(
    (state) => state.systemConfig.lang
  );

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
      }}
    >
      这是content组件
      <br />
      <p>当前的主题是：{theme}</p>
      <p>当前的语种是：{lang}</p>
    </div>
  );
}
