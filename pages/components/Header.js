import { ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";
import catHeader from "../src/cat.png";

const Header = () => {
  return (
    <div>
      <ChakraProvider>
        <div className="max-w-md px-3 mx-auto text-white dark:text-[#0f0f0f] font-[Inter] mt-6 profile__bio">
          <Image
            src={catHeader}
            alt="cat.png"
            placeholder="blur" // Optional blur-up while loading
          />
        </div>

        <div className="mx-auto mt-2 text-center bg-white/10 w-72 p-2 rounded-md dark:bg-black/10 font-semibold text-white dark:text-[#0f0f0f] z-10 img__desc">
          <h1>Hello, im bryan</h1>
        </div>

        <div className="max-w-md mt-7 mx-auto px-3 text-white dark:text-[#0f0f0f] font-bold text-2xl font-[Inter] profile__name">
          <h1>Bryan Heinz</h1>
        </div>
        <div className="max-w-md px-3 mx-auto text-white dark:text-[#0f0f0f] font-[Inter] profile__desc">
          <h2>Student</h2>
        </div>
      </ChakraProvider>
    </div>
  );
};

export default Header;
