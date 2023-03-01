import {
    extendTheme,
    withDefaultColorScheme,
    withDefaultProps
  } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { withProse } from '@nikolovlazar/chakra-ui-prose';


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
      },
      styles: {
        global: (props) => ({
          body: {
            bg: mode("gray.100", "gray.600")(props),
          }
        })
      },
      /*semanticTokens: {
        colors: {
          "chakra-ring-color": {
            _light: "purple.800",
            _dark: "pink.100",
          },
          "chakra-border-color": {
            _light: "purple.800",
            _dark: "pink.100",
          }
        }
      }*/
    },
    withDefaultColorScheme({ colorScheme: "blue" }),
    withProse({
      baseStyle: {
        a: {
          color: "blue.300",
          fontSize: "md",
          _hover: {
            textDecoration: "underline",
          },
        },
        p: {
          padding: "0",
          margin: "0",
          fontSize: "md"
        },
        li: {
          padding: "0",
          margin: "0",
          fontSize: "md"
        },
        ul: {
          my: "0.5rem",
        }
      }
    })
    /*withDefaultProps({
        defaultProps: {
            focusBorderColor: 'blue.900'
        },
        components: ['Link', 'Button', 'Box'],
      }),*/
  );
  
  
  
  export default CustomTheme;
  