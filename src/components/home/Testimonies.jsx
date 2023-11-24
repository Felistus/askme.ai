import {
  Box,
  Container,
  SimpleGrid,
  Title,
  Text,
  Paper,
  Rating,
  Group,
  Avatar,
} from "@mantine/core";

export default function Testimonies() {
  const info = [
    {
      id: 1,
      rating: 4,
      description:
        "Incredible AI, The chat agent made exploring  and buying products a breeze. It feels like having a personal shopper 24/7",
      name: "Hannah Eris",
      position: "Position",
      company: "Company name",
    },
    {
      id: 2,
      rating: 3.5,
      description:
        "I had a problem with my my Order, The AI agent resolved it within minutes. Fast and efficient customer service. Highly Impressed!",
      name: "John Doe",
      position: "Position",
      company: "Company name",
    },
    {
      id: 3,
      rating: 5,
      description:
        "The Ongoing support is a game changer, I scheduled a meeting with the vendor effortlessly. The AI is like having a reliable  assistant at my finger tips",
      name: "Ezeugo Obieze",
      position: "Position",
      company: "Company name",
    },
  ];
  return (
    <Container size={1215} px="md" className="flex flex-col items-center">
      <Title
        order={2}
        fz={48}
        className="font-inter-bold text-neutral-50 text-center"
      >
        What the street is saying
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
            <Paper
              withBorder
              p={32}
              radius={12}
              key={item.id}
              className="w-full max-w-[392px] bg-inherit"
            >
              <Box className="mx-auto">
                <Rating value={item.rating} fractions={2} readOnly />
              </Box>
              <Text
                my={32}
                fz={18}
                className="text-neutral-50 font-inter-regular "
              >
                {item.description}
              </Text>
              <Group>
                <Avatar src={null} alt="User image" size={56} radius="xl" />
                <Box>
                  <Text fz={16} className="text-neutral-50 font-inter-regular ">
                    {item.name}
                  </Text>
                  <Text
                    fz={16}
                    className="text-neutral-50 font-inter-regular "
                    span
                  >
                    {item.position},
                  </Text>
                  <Text
                    fz={16}
                    className="text-neutral-50 font-inter-regular "
                    span
                  >
                    {item.company}
                  </Text>
                </Box>
              </Group>
            </Paper>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}
