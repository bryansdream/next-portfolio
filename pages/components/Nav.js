import Link from "next/link";
import { ChakraProvider } from "@chakra-ui/react";

const Nav = () => {
  return (
    <ChakraProvider>
      <div >
        <div className="flex justify-center font-bold">
          <div className="mr-32 hover:text-sky-600">
            <Link href="/">Bryannn</Link>
          </div>
          <div className="mx-2 hover:text-sky-600">
            <Link href="/works">Works</Link>
          </div>
          <div className="mx-2 hover:text-sky-600">
            <Link href="/posts">Posts</Link>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Nav;
