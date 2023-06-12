import React, { useState } from 'react';
import { Box, Stack } from '@chakra-ui/react'
import Card from './Card';
import axios from "axios";
import Loader from './Loader';
import { BASE_URL } from './helper';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const checkoutHandler = async (amount) => {
        setIsLoading(true);



        try {
            const { data: { key } } = await axios.get(`${BASE_URL}api/getkey`);
            // const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");

            const { data: { order } } = await axios.post(`${BASE_URL}api/checkout`, { amount });
            // const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", { amount });

            const options = {
                key,
                amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "Ghadi Wala.com",
                description: "Test Transaction for React App",
                image: "https://i.ibb.co/BtywP70/Logo.png",
                order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                // callback_url: `${BASE_URL}api/paymentVerification`,
                callback_url: "http://localhost:4000/api/paymentVerification",
                prefill: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9000090000"
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#3399cc"
                }
            };

            const razor = new window.Razorpay(options);
            

            razor.open();
        } catch (error) {
            console.error(error);
            setIsLoading(false); // Hide the loader on error
        }
    };


    return (
        <Box>
      {isLoading ? (
        // Show the loader when isLoading is true
        <Loader/>
      ) : (
        <Stack direction={["column", "row"]} h={"100vh"} alignItems="center" justifyContent="center">
          <Card amount={5000} img={"https://img5.gadgetsnow.com/gd/images/products/additional/large/G413762_View_1/computer-laptop/laptops/lenovo-v15-82kda00xih-amd-ryzen-5-5500u-15-6-inches-notebook-laptop-8gb-512gb-ssd-windows-11-grey-1-7-kg-.jpg"} checkoutHandler={checkoutHandler} />

          <Card amount={5000} img={"https://m.media-amazon.com/images/I/410KqOI+IeL.jpg"} checkoutHandler={checkoutHandler} />
        </Stack>
      )}
    </Box>
    )

}
export default Home;