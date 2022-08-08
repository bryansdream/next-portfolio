//domain.com/posts

import Image from "next/image";
import jettBlender from "../src/Jets.png";
import reynaBlender from "../src/Untitled-1.png";
import wraithBlender from "../src/thebestwraith1.png";
import fakelibWeb from "../src/fakelibweb.png";
import kelaskamiWeb from "../src/kelaskami.png";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

const index = () => {
  return (
    <ChakraProvider>
      <div>
        <Head>
          <title>Posts | Bryan</title>
        </Head>
        <div className="max-w-md px-3 mx-auto text-white dark:text-[#0f0f0f] font-[Inter] mt-6 profile__bio">
          <h1 className="font-bold py-2 text-lg">Blender</h1>
          <div>
            <Image
              src={jettBlender}
              alt="Jett Valorant.png"
              placeholder="blur" // Optional blur-up while loading
            />
            <p>Jett from Valorant made using Blender</p>
          </div>

          <div className="mt-8">
            <Image
              src={wraithBlender}
              alt="Reyna Valorant.png"
              placeholder="blur" // Optional blur-up while loading
            />
            <p>Wraith from Apex Legends made using Blender</p>
          </div>

          <div className="mt-8">
            <Image
              src={reynaBlender}
              alt="Wraith Apex.png"
              placeholder="blur" // Optional blur-up while loading
            />
            <p>Close up Reyna from Valorant made using Blender</p>
          </div>
        </div>

        <div className="max-w-md px-3 mx-auto text-white dark:text-[#0f0f0f] font-[Inter] mt-6 profile__bio">
          <h1 className="font-bold py-2 text-lg">Websites</h1>
          <Image
            src={fakelibWeb}
            alt="Wraith Apex.png"
            placeholder="blur" // Optional blur-up while loading
          />
          <p>My first HTML one page Website, full with tailwindcss</p>
          <a
            href="https://fakelib.netlify.app/"
            className="text-pink-600"
          >
            <p className="underline">Link</p>
          </a>

          <Image
            src={kelaskamiWeb}
            alt="Wraith Apex.png"
            placeholder="blur" // Optional blur-up while loading
          />
          <p>Website for my class</p>
          <a
            href="https://kelaskami.netlify.app/"
            className="text-pink-600"
          >
            <p className="underline">Link</p>
          </a>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default index;
