import React from "react"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { useI18next } from "gatsby-plugin-react-i18next"
import Header from "../components/header"

export default function Home() {
  const { t } = useTranslation()
  const { languages, originalPath } = useI18next()
  return (
    <div>
      <Header />
      <h1>Index</h1>
      <br />
      <Trans>hello</Trans>
      <p>{t("morning")}</p>
      {languages.map(language => {
        return (
          <div key={language}>
            <Link to={originalPath} language={language}>
              {language}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
