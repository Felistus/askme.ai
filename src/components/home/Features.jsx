import { Box, Container } from "@mantine/core";
import FeaturesCard from "./FeaturesCard";
import TopRated from "../../assets/icons/TopRated";
import Support from "../../assets/icons/Support";
import Complaint from "../../assets/icons/Complaint";

export default function Features() {
  return (
    <Container size={1215} px="md" className="flex flex-col items-center">
      <Box className="flex lg:space-x-20 lg:h-[610px] items-center ">
        <Box className="h-full w-[570px] hidden lg:flex bg-red-900"></Box>
        <Box className="flex-1">
          <FeaturesCard
            icon={<TopRated color="#228B22" />}
            link="#"
            title="Elevate your customer experience with AI"
            description="Discover the Power of Our AI-Powered Chat Agent. Your All-in-One Solution for Seamless Customer Interaction."
          />
          <Box my={32}>
            <FeaturesCard
              icon={<Complaint color="#228B22" />}
              link="#"
              title="Effortless Issue Resolution"
              description="Streamline complaint handling with our AI. Resolve issues efficiently, turning challenges into opportunities for excellent customer service"
            />
          </Box>
          <FeaturesCard
            icon={<Support color="#228B22" />}
            link="#"
            title="Seamless Integration for Business Efficiency"
            description="Integrate effortlessly with backend tools. Enhance your workflow with features like calendar bookings, ensuring optimal business efficiency"
          />
        </Box>
      </Box>
    </Container>
  );
}
