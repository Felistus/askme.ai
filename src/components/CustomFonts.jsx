import { Global } from "@mantine/core";

export default function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "inter-black",
            src: `url("/font/Inter-Black.ttf")`,
          },
        },
        {
          "@font-face": {
            fontFamily: "inter-bold",
            src: `url("/font/Inter-Bold.ttf")`,
          },
        },
        {
          "@font-face": {
            fontFamily: "inter-extrabold",
            src: `url("/font/Inter-ExtraBold.ttf")`,
          },
        },
        {
          "@font-face": {
            fontFamily: "inter-extralight",
            src: `url("/font/Inter-ExtraLight.ttf")`,
          },
        },
        {
          "@font-face": {
            fontFamily: "inter-light",
            src: `url("/font/Inter-Light.ttf")`,
          },
        },
        {
          "@font-face": {
            fontFamily: "inter-medium",
            src: `url("/font/Inter-Medium.ttf")`,
          },
        },
        {
          "@font-face": {
            fontFamily: "inter-regular",
            src: `url("/font/Inter-Regular.ttf")`,
          },
        },
        {
          "@font-face": {
            fontFamily: "inter-semilbold",
            src: `url("/font/Inter-SemiBold.ttf")`,
          },
        },
      ]}
    />
  );
}
