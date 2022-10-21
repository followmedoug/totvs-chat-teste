import { configureStore } from "@reduxjs/toolkit";
import createSaga from "redux-saga";

import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSaga();

const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
