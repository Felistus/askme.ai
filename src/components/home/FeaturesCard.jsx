import { Box, Title, Text, ActionIcon, Badge } from "@mantine/core";
import ChevronRight from "../../assets/icons/ChevronRight";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function FeaturesCard({ title, description, link, icon }) {
  return (
    <Box className="flex space-x-6 ">
      {icon}
      <Box>
        <Title
          order={4}
          maw={377}
          className="font-inter-bold text-neutral-900 text-2xl"
        >
          {title}
        </Title>
        <Text
          maw={430}
          fz={16}
          my={8}
          className="text-neutral-700 font-inter-regular "
        >
          {description}
        </Text>
        <Link to={link}>
          <ActionIcon variant="transparent" className="w-fit">
            <Badge
              variant="transparent"
              className="normal-case text-base font-inter-regular text-neutral-900 p-0"
              rightSection={<ChevronRight />}
            >
              Learn more
            </Badge>
          </ActionIcon>
        </Link>
      </Box>
    </Box>
  );
}

FeaturesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
