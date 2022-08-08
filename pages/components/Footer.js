import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>
      <Box align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Bryan Heinz. All Rights Reserved.
      </Box>
    </div>
  );
};

export default Footer;
