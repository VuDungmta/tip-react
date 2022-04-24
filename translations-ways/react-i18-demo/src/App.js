import React from "react";
import "./styles.css";
import i18n from "./_i18n/i18n";
import { useTranslation } from "react-i18next";

function changeLanguageOnClick(language) {
  i18n.changeLanguage(language);
}

export default function App() {
  const [t] = useTranslation(["translation", "customFile"]);

  return (
    <div className="App">
      <button onClick={() => changeLanguageOnClick("en")}>English</button>
      <button onClick={() => changeLanguageOnClick("de")}>German</button>
      <h1>{t("title")}</h1>
      <h2>{t("customFile:title")}</h2>
    </div>
  );
}
