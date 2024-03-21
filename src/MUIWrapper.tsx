// MUIWrapper.tsx

import {
    createTheme,
    ThemeProvider,
    Direction,
    PaletteMode,
  } from "@mui/material";
  import { createContext, useMemo, useState, useEffect } from "react";
  import rtlPlugin from "stylis-plugin-rtl";
  import { prefixer } from "stylis";
  import { CacheProvider } from "@emotion/react";
  import createCache from "@emotion/cache";
  import {IntlProvider} from "react-intl";
  import translate, { changeLanguage, messages } from "./translate";
  import {getDesignTokens} from './theme';
  /**
    TypeScript and React inconvenience:
    These functions are in here purely for types! 
    They will be overwritten - it's just that
    createContext must have an initial value.
    Providing a type that could be 'null | something' 
    and initiating it with *null* would be uncomfortable :)
  */
  export const MUIWrapperContext = createContext({
    toggleColorMode: () => {},
    changeDirection: (dir: Direction) => {},
  });
  
  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  
  const emptyCache = createCache({
    key: "meaningless-key",
  });
  
  export default function MUIWrapper({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [mode, setMode] = useState<PaletteMode>("dark");
    const [direction, setDirection] = useState<Direction>("ltr");
    const [lang, setLang] = useState("en");

    const muiWrapperUtils = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        },
        changeDirection: (dir: Direction) => {
          setDirection(dir);
          setLang(dir === 'ltr' ? "en" : "he");
        },
      }),
      []
    );
  
    useEffect(() => {
      document.dir = direction;
    }, [direction]);
  
    const theme = useMemo(
      () =>
        createTheme({
          ...getDesignTokens(mode),
          direction,
        }),
      [mode, direction]
    );
  
    return (
      <CacheProvider value={direction === "rtl" ? cacheRtl : emptyCache}>
        <MUIWrapperContext.Provider value={muiWrapperUtils}>
        <IntlProvider locale={lang} messages={messages[lang]}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </IntlProvider>
        </MUIWrapperContext.Provider>
      </CacheProvider>
    );
  }