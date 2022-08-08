//  domain.com/works

import Link from "next/link";
import Head from "next/head";
import { Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const news = () => {
  return (
    <div>
      <ChakraProvider>
        <Head>
          <title>Works | Bryan</title>
        </Head>

        <div className="max-w-md px-3 mx-auto text-white dark:text-[#0f0f0f] font-[Inter] mt-6 profile__work">
          <h1 className="font-bold py-2 text-lg">School Projects</h1>
          <p className="mt-2 font-semibold">Sage Project</p>
          <p className="mt-2 indent-4">
            Sage Project adalah proyek kelas kami pada saat kelas 1 dan 2 sma,
            yang bertujuan untuk mengurangi sampah kertas disekolah. Dengan cara
            mengolah kembali kertas bekas menjadi kertas baru yang layak dipakai
            kembali, tidak hanya kertas daur ulang yang kami hasilkan, namun
            kami juga membuat beberapa produk inovasi lainnya
          </p>
          <a
            href="https://docs.google.com/document/d/1j7wincXxES8O7EZU7PPeJ19SUXGcoSa7Fp6IYzDs-To/edit?usp=sharing"
            className="text-pink-600"
          >
            <p className="underline">Laporan akhir proyek</p>
          </a>
          <p className="mt-2 font-semibold">Live-In</p>
          <p className="mt-2 indent-4">
            Kami melakukan live-in di Gambung selama kurang lebih seminggu.
            Selama live-in berlangsung kami cukup banyak berbaur dengan warga
            sekitar. Kami juga mengikuti beberapa rutinitas warga. Seperti
            memandikan sapi, memanen biji kopi, hingga nongkrong bareng warga.
          </p>
          <a
            href="https://drive.google.com/drive/u/1/folders/19Va31K3-3MKxx0Ohn5g_nutUDYCGzJH4"
            className="text-pink-600"
          >
            <p className="underline">VLOG</p>
          </a>
        </div>

        <div className="max-w-md px-3 mx-auto text-white dark:text-[#0f0f0f] font-[Inter] mt-6 profile__work">
          <h1 className="font-bold py-2 text-lg">Coding Progress</h1>
          <p className="mt-2 font-semibold">HTML and CSS</p>
          <p className="mt-2 indent-4">Start learning 7 June 2022</p>
          <a href="/posts.html" className="text-pink-600">
            <p className="underline">Portfolio</p>
          </a>
          <p className="mt-2 font-semibold">JavaScript</p>
          <p className="mt-2 indent-4">Start learning 20 June 2022</p>
          <a href="/posts.html" className="text-pink-600">
            <p className="underline">Portfolio</p>
          </a>
          <div className="flex justify-center mt-4">
            <Link href="/posts">
              <Button variant="ghost" colorScheme="teal">
                my portfolio
              </Button>
            </Link>
          </div>
        </div>
      </ChakraProvider>
    </div>
  );
};

export default news;
