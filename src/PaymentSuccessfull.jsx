import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccessfull = () => {
  const searchQuery = useSearchParams()[0];

  const referenceNum = searchQuery.get("reference");
  console.log(referenceNum);


  return (
    <Box>
      <VStack h={"100vh"} justifyContent={"center"}  >
      <Link to="/">
        <Button m="4" pos="absolute" top="20px" left="20px">Back</Button>
      </Link>
        <Heading textTransform={"uppercase"} > 🎉ORder successfull🎉 </Heading>
        <Text>
          Refrence No. {referenceNum}
        </Text>
      </VStack>
    </Box>
  )
}

export default PaymentSuccessfull