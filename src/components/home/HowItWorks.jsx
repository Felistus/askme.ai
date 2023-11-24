import {
  Box,
  Container,
  SimpleGrid,
  Title,
  Text,
  Paper,
  Button,
} from "@mantine/core";
import TopRated from "../../assets/icons/TopRated";
import Complaint from "../../assets/icons/Complaint";
import Support from "../../assets/icons/Support";

export default function HowItWorks() {
  const info = [
    {
      id: 1,
      title: "Discover top rated products effortlessly",
      description:
        "Users can easily discover top-rated products, get detailed information, and find purchasing options.",
      icon: <TopRated color="#4723C2" />,
    },
    {
      id: 2,
      title: "Hassle free complaint solution",
      description:
        "Report issues, express concerns and let our Ai agent guide you through quick and effective solutions",
      icon: <Complaint color="#4723C2" />,
    },
    {
      id: 3,
      title: "Continous support, anytime, anywhere",
      description:
        "From scheduling meetings to uncovering exlusive deals, our AI is here for ongoing assistance whenver you need it",
      icon: <Support color="#4723C2" />,
    },
  ];
  return (
    <Container size={1215} px={70} className="flex flex-col items-center">
      <Title order={2} fz={36} className="font-inter-bold text-center">
        How it works
      </Title>
      <Box my={80}>
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: "62rem", cols: 3, spacing: "md" },
            { maxWidth: "48rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
        >
          {info.map((item) => (
            <Paper key={item.id} className="w-full max-w-[330px] bg-inherit">
              <Box w={42} h={42} className="mx-auto">
                {item.icon}
              </Box>
              <Text
                my={24}
                fz={24}
                className="text-secondary-900 font-inter-bold text-center"
              >
                {item.title}
              </Text>
              <Text
                fz={16}
                className="text-secondary-900 font-inter-regular text-center"
              >
                {item.description}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Box>
      <Button
        type="button"
        variant="white"
        className="font-inter-regular font-medium capitalize bg-primary-500 text-neutral-50 rounded-xl h-14"
      >
        Request a demo
      </Button>
    </Container>
  );
}
