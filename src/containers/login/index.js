import React from "react";
import { useTranslation } from "react-i18next";
import { endpoints } from "../../config/constants";

export function Login() {
  const { t } = useTranslation();
  console.log(endpoints.authorization.url);

  return (
    <div>
      <a href={endpoints.authorization.url}>{t("LOGIN.LOGIN_BTN")}</a>
    </div>
  );
}
