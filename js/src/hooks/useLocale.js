import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import en from "@/../lang/en.json";
import de from "@/../lang/de.json";
import { flattenMessages } from "../../lang/flattenMessages";
const messages = {
    en,
    de,
};
export const useLocale = () => {
    const router = useRouter();
    console.log(router.locale);
    const flattenedMessages = useMemo(() => flattenMessages(messages[router.locale]), [router]);
    const switchLocale = useCallback((locale) => {
        if (locale === router.locale) {
            return;
        }
        const path = router.asPath;
        return router.push(path, path, { locale });
    }, [router]);
    return { locale: router.locale, switchLocale, messages: flattenedMessages };
};
