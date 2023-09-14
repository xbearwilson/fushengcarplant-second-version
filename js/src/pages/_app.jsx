import "@/styles/globals.css";
import { IntlProvider } from "react-intl";
import { useLocale } from "@/hooks/useLocale";
export default function App({ Component, pageProps }) {
    const { locale, messages } = useLocale();
    console.log(locale);
    return (<IntlProvider locale={locale} messages={messages}>
      <Component {...pageProps}/>
    </IntlProvider>);
}
