import { Box, Title, Text, Button } from "@mantine/core";

export default function Hero() {
  return (
    <Box className="flex space-x-[39px] lg:h-[545px] border items-center">
      <Box className="flex-1">
        <Title
          order={1}
          maw={542}
          mb={32}
          className="font-inter-bold text-neutral-900 text-[28px] md:text-[56px]"
        >
          Revolutionize Customer Interaction
        </Title>
        <Text
          maw={490}
          fz={18}
          mb={42}
          className="text-neutral-700 font-inter-regular"
        >
          Unlock the Future of Seamless Conversations with Our AI-Powered Chat
          Agent. Elevate Customer Satisfaction 24/7.
        </Text>
        <Button
          type="button"
          variant="white"
          className="font-inter-regular font-medium capitalize bg-primary-500 text-neutral-50 rounded-xl h-14"
        >
          Chat with an AI Agent
        </Button>
      </Box>
      <Box className="w-full max-w-[577px] hidden lg:flex"></Box>
    </Box>
  );
}
