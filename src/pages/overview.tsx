import React from "react";
import Container from "../components/ui/container";
import Text from "../components/ui/text";

const OverviewPage: React.FC = () => {
  return (
    <Container>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <Text size="2xl" variant="bold" color="black">
          Overview
        </Text>
        <div className="mt-4">
          <Text size="lg" color="gray">
            Welcome to the admin dashboard. Here you can see statistics and an
            overview of the system.
          </Text>
          {/* Add more components or data visualizations here */}
        </div>
      </div>
    </Container>
  );
};

export default OverviewPage;
