//  domain.com/
import Link from "next/link";
import Head from "next/head";
import { Button } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const index = () => {
  return (
    <div>
      <ChakraProvider>
        <Head>
          <title>Home | Bryan</title>
        </Head>
        <div className="max-w-md px-3 mx-auto text-white dark:text-[#0f0f0f] font-[Inter] mt-6 profile__work">
          <h1 className="font-bold py-2 text-lg">Bio</h1>
          <p className="mt-2">
            So far I&apos;m still enjoying learning coding, a few days ago on
            07/24/2022 I finally finished the Javascript tutorial, in the future
            I will add more small projects that will use Javascript, while
            looking for inspiration, I&apos;m also learning React.js
          </p>
          <div className="flex justify-center mt-4">
            <Link href="/posts">
              <Button variant="ghost" colorScheme="teal">
                my portfolio
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-md px-3 mx-auto text-white dark:text-[#0f0f0f] font-[Inter] mt-6 profile__bio">
          <h1 className="font-bold py-2 text-lg">Bio</h1>
          <p className="mt-2">
            <span className="font-bold">2005</span> Born in Bandung
          </p>
          <p className="mt-2">
            <span className="font-bold">2022</span> Learnt HTML,CSS,JS,Tailwind 
          </p>
          <p className="mt-2">
            <span className="font-bold">Now</span> Learning React, NextJs
          </p>
        </div>

        <div className="max-w-md px-3 mx-auto text-white dark:text-[#0f0f0f] font-[Inter] mt-6 profile__hobby">
          <h1 className="font-bold py-2 text-lg">I ♥</h1>
          <p className="mt-2">Music, art, UI/UX design, Games, Sleeping.</p>
        </div>

        <div className="max-w-md px-3 mx-auto text-white dark:text-[#0f0f0f] font-[Inter] mt-6 profile__hobby">
          <h1 className="font-bold py-2 text-lg">Link w Me!</h1>
          <div className="flex mt-4">
            <Link href="https://twitter.com/grbhz_">
              <Button
                variant="ghost"
                colorScheme="twitter"
                leftIcon={<FaTwitter />}
              >
                @brynheinz
              </Button>
            </Link>
          </div>
          <div className="flex mt-4">
            <Link href="https://t.me/bryanlovesyou">
              <Button
                variant="ghost"
                colorScheme="telegram"
                leftIcon={<FaTelegram />}
              >
                @brynheinz
              </Button>
            </Link>
          </div>
        </div>
      </ChakraProvider>
    </div>
  );
};

export default index;
