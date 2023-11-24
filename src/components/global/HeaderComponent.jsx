import { useState, useEffect } from "react";
import {
  Container,
  Header,
  Group,
  Burger,
  Text,
  Box,
  NavLink,
  Divider,
  Stack,
  Drawer,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";
import Logo from "./Logo";
import { links } from "../../assets/data/menuItems";

export function HeaderComponent() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(-1);
  const scrollPosition = useScrollPosition();
  const currentURL = window.location;
  const router = currentURL.pathname;

  const items = links.map((link, index) => (
    <Link key={link.label} to={link.link}>
      <Text
        className={`${
          active === index
            ? " border-b-4 border-b-primary-500 px-4 py-1"
            : "hover:text-primary-500"
        } text-sm font-inter-medium capitalize `}
      >
        {link.label}
      </Text>
    </Link>
  ));

  useEffect(() => {
    switch (router) {
      case "/":
        setActive(0);
        break;
      case "/features":
        setActive(1);
        break;
      case "/pricing":
        setActive(2);
        break;
      case "/contact":
        setActive(3);
        break;

      default:
        break;
    }
  }, [router]);
  return (
    <Header
      withBorder={false}
      height={80}
      py="sm"
      className={`
        ${
          scrollPosition > 0
            ? "shadow-sm shadow-primary-500"
            : "bg-neutral-50  "
        } top-0 sticky z-10 text-neutral-900`}
    >
      <Container size={1215} px="md">
        <Group position="apart">
          <Logo />
          <Box className="lg:hidden">
            <Burger opened={opened} onClick={toggle} color="black" size="sm" />
          </Box>

          <Group spacing={30} className="hidden lg:flex">
            {items}
            <Group spacing={30}>
              <Group spacing={30}>
                <Button
                  type="button"
                  variant="white"
                  className="font-inter-regular font-medium capitalize bg-primary-500 text-neutral-50 rounded-xl h-14"
                >
                  get started
                </Button>
              </Group>
            </Group>
          </Group>
        </Group>

        <Drawer
          position="bottom"
          zIndex={2}
          size="45%"
          opened={opened}
          onClose={close}
          withCloseButton={false}
          transitionProps={{
            transition: "slide-up",
            duration: 150,
            timingFunction: "linear",
          }}
          // title={
          //   <Group>
          //     <Avatar radius="xl" color="yellow.4" size={60} />
          //   </Group>
          // }
        >
          <Stack spacing={2}>
            {links.map((link) => (
              <NavLink
                component={Link}
                key={link.link}
                label={link.label}
                href={link.link}
                className="capitalize"
              />
            ))}
          </Stack>
          <Divider size="sm" my="lg" />
          <Group spacing={30}>
            {/* <Button 
                type='button'
              variant="white"
              className="font-opensans-medium font-medium normal-case bg-ajebuSecondary text-neutral-50 "
            >
              Login
            </Button> */}
            <Button
              type="button"
              variant="white"
              className="font-inter-regular font-medium capitalize bg-primary-500 text-neutral-50 rounded-xl h-14"
            >
              get started
            </Button>
          </Group>
        </Drawer>
      </Container>
    </Header>
  );
}
