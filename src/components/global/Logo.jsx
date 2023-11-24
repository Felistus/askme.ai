import { Box, Image } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <Box w={116}>
        <Image src="/logo/logo.svg" alt="askme.ai logo" fit="contain" />
      </Box>
    </Link>
  );
}
