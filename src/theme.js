import {
    extendTheme,
    withDefaultColorScheme,
  } from "@chakra-ui/react";
  
  
  const CustomTheme = extendTheme({
      colors: {
        blue: {
            "50": "#7DCFF2",
            "100": "#70BADE",
            "200": "#63A5CB",
            "300": "#5590B7",
            "400": "#487BA3",
            "500": "#3B6590",
            "600": "#2E507C",
            "700": "#203B68",
            "800": "#132655",
            "900": "#061141"
        }
      }
    },
    withDefaultColorScheme({ colorScheme: "blue" })
  );
  
  
  
  export default CustomTheme;
  