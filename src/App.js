import "./App.css";
import React from "react";
import rootReducer from "./Data/Indexroot";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AdminRoutes from "./AdminRoutes";

const App = () => {
  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  let store = createStore(persistedReducer);
  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AdminRoutes />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
