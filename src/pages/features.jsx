import { Box, Stack, Container } from "@mantine/core";
import { HeaderComponent } from "../components/global/HeaderComponent";
import { Suspense, lazy } from "react";
import Logo from "../components/global/Logo";
import AppFooter from "../components/global/AppFooter";

const Hero = lazy(() => import("../components/home/Hero"));
const HowItWorks = lazy(() => import("../components/home/HowItWorks"));
const Testimonies = lazy(() => import("../components/home/Testimonies"));
const Features = lazy(() => import("../components/home/Features"));

export default function FeaturesHome() {
  return (
    <Stack mih="100dvh" spacing={0} className="w-full">
      <HeaderComponent />
      <Box className="flex-1 bg-neutral-200">
        <Container size={1215} px="md" mb={125} mt={115}>
          <Suspense
            fallback={
              <div className="w-full h-auto pt-16 flex items-center justify-center">
                <Logo />
              </div>
            }
          >
            <Hero />
          </Suspense>
        </Container>
        <Box className="w-full bg-secondary-50 py-[112px]">
          <Suspense
            fallback={
              <div className="w-full h-auto pt-16 flex items-center justify-center">
                <Logo />
              </div>
            }
          >
            <HowItWorks />
          </Suspense>
        </Box>
        <Box className="w-full bg-neutral-900 py-[112px]">
          <Suspense
            fallback={
              <div className="w-full h-auto pt-16 flex items-center justify-center">
                <Logo />
              </div>
            }
          >
            <Testimonies />
          </Suspense>
        </Box>
        <Box className="w-full bg-neutral-100 py-[112px]">
          <Suspense
            fallback={
              <div className="w-full h-auto pt-16 flex items-center justify-center">
                <Logo />
              </div>
            }
          >
            <Features />
          </Suspense>
        </Box>
      </Box>
      <Box className="w-full py-20 bg-primary-900">
        <AppFooter />
      </Box>
    </Stack>
  );
}
