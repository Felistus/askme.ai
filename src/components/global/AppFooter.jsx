import { Box, Container, Text, Image, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { links } from "../../assets/data/menuItems";

export default function AppFooter() {
  return (
    <Container size={1215} px="md">
      <Box className="flex items-center flex-col">
        <Box w={116} mb={32}>
          <Image src="/logo/logo-white.svg" alt="askme.ai logo" fit="contain" />
        </Box>
        <Group spacing={32} mb={64}>
          {links.map((link) => (
            <Link key={link.label} to={link.link}>
              <Text className="text-sm font-inter-regular capitalize text-neutral-50">
                {link.label}
              </Text>
            </Link>
          ))}
        </Group>

        <Box className="md:flex md:justify-between space-y-3 md:space-y-0 text-center md:text-left w-full border-t pt-8">
          <Text className="text-sm font-inter-regular capitalize text-neutral-50">
            © 2023 Askme.ai. All rights reserved.
          </Text>
          <Group spacing={24} position="center">
            <Link to="#">
              <Text className="text-sm font-inter-regular capitalize text-neutral-50 underline">
                privacy policy
              </Text>
            </Link>
            <Link to="#">
              <Text className="text-sm font-inter-regular text-neutral-50 underline">
                Terms of Service
              </Text>
            </Link>
            <Link to="#">
              <Text className="text-sm font-inter-regular capitalize text-neutral-50 underline">
                cookies settings
              </Text>
            </Link>
          </Group>
        </Box>
      </Box>
    </Container>
  );
}
