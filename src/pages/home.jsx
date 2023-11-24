import { Box, Stack, Container } from "@mantine/core";
import { HeaderComponent } from "../components/global/HeaderComponent";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";

export default function Home() {
  return (
    <main className="w-full">
      <Stack mih="100dvh" spacing={0} className="w-full">
        <HeaderComponent />
        <Box className="flex-1 bg-neutral-200">
          <Container size={1215} px="md" mb={125} mt={115}>
            <Hero />
          </Container>
          <Box className="w-full bg-secondary-50 py-[112px]">
            <HowItWorks />
          </Box>
        </Box>
        <Box className="w-full h-[192px] bg-primary-900">
          <Container size={1215} px="md"></Container>
        </Box>
      </Stack>
    </main>
  );
}
