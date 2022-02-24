import React, { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./theme";
import {
  ChatPage,
  HomePage,
  ProfilePage,
  Gists,
  LoginPage,
  SignUpPage,
} from "./pages";
import { store, persistor } from "./store";
import { PublicRoute, PrivateRoute } from "./components";
import { sessionSelector, setSessionFB } from "./store/session";
import "./common.module.css";

function App() {
  const session = useSelector(sessionSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSessionFB());
  }, [dispatch]);

  const isAuth = session?.user.email;
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <CustomThemeProvider>
            <BrowserRouter>
              <Routes>
                <Route path="//*" element={<HomePage session={session} />} />
                <Route
                  path="/chat/*"
                  element={
                    <PrivateRoute isAuth={isAuth} to="/login">
                      <ChatPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/profile/*"
                  element={
                    <PrivateRoute isAuth={isAuth}>
                      <ProfilePage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/gists"
                  element={
                    <PrivateRoute isAuth={isAuth}>
                      <Gists />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute isAuth={isAuth}>
                      <LoginPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/sign-up"
                  element={
                    <PublicRoute isAuth={isAuth}>
                      <SignUpPage />
                    </PublicRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
          </CustomThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
