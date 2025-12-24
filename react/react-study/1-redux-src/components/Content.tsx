import { useEffect, useState } from "react";
import store from "../store";

export default function Content() {
  const [systemConfig, setSystemConfig] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setSystemConfig(store.getState());
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
      }}
    >
      这是content组件
      <br />
      <p>当前的主题是：{systemConfig.theme}</p>
      <p>当前的语种是：{systemConfig.lang}</p>
    </div>
  );
}
