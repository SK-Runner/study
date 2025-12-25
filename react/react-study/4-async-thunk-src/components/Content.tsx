import { useSelector } from "react-redux";
import { type StoreType } from "../store";
import type {
  LangListType,
  ThemeListType,
} from "../store/slice/systemConfigSlice";
import type { InitialStateType } from "../store/slice/asyncConfigSlice";

export default function Content() {
  const theme = useSelector<StoreType, ThemeListType>(
    (state) => state.systemConfig.theme
  );
  const lang = useSelector<StoreType, LangListType>(
    (state) => state.systemConfig.lang
  );

  const asyncConfig = useSelector<StoreType, InitialStateType>(
    (state) => state.asyncConfig
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
      <p>
        获取到的token:{" "}
        {asyncConfig.isLoading ? (
          <span>正在加载...</span>
        ) : asyncConfig.errorInfo ? (
          <span>{asyncConfig.errorInfo}</span>
        ) : (
          <span>{asyncConfig.token}</span>
        )}
      </p>
    </div>
  );
}
