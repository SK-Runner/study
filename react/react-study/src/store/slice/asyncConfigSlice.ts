import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type ResponseDataType = {
  code: number;
  data: {
    token: string;
  };
  message: string;
};

type RequestDataType = {
  userId: string;
};

export const asyncConfigAction = createAsyncThunk<
  ResponseDataType,
  RequestDataType
>("asyncConfig", async (requestData, thunkConfig) => {
  const controller = new AbortController();
  const signal = thunkConfig.signal;

  signal.addEventListener("abort", () => {
    controller.abort();
  });

  const responseData = await fetch(
    `/m2/7619461-7358429-default/397126034?userId=${requestData.userId}`,
    { signal }
  );

  if (responseData.status === 200) {
    return responseData.json();
  }

  throw new Error("请求异常");
});

export interface InitialStateType {
  isLoading: boolean;
  token: string;
  errorInfo: string | null;
}
const initialState: InitialStateType = {
  isLoading: false,
  token: "",
  errorInfo: null,
};

const asyncConfigSlice = createSlice({
  name: "asyncConfig",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(asyncConfigAction.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.code !== 1) {
          state.errorInfo = "获取失败";
          state.token = "";
        } else {
          state.errorInfo = null;
          state.token = action.payload.data.token;
        }
      })
      .addCase(asyncConfigAction.pending, (state) => {
        state.errorInfo = null;
        state.isLoading = true;
      })
      .addCase(asyncConfigAction.rejected, (state) => {
        state.errorInfo = "获取失败";
        state.isLoading = false;
        state.token = "";
      });
  },
});

export default asyncConfigSlice.reducer;
