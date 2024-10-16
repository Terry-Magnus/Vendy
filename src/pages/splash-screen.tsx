import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import Text from "../components/ui/text";

const SplashScreen = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-1/2 flex justify-center items-center">
        <div className="text-center">
          <Text className="text-3xl mb-3" variant="bold">
            Welcome to Vendy Admin
          </Text>
          <Text className="mb-10 ">
            You have arrived at the admin panel of this great application.
          </Text>
          <Link to="/login">
            <Button>Click here to get started </Button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 bg-stone-900"></div>
    </div>
  );
};

export default SplashScreen;
