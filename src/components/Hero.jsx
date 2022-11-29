import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from './Getstarted'

const Hero = () =>  (
        <section id="Home" className={` flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[16px] px-4 bg-discount-gradient-[10px] mb-2">
                    <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2`}>
                    <span className="text-white">20%</span> Discount for{' '}
                    <span className="text-white">1 Month </span>
                    Account
                    </p>
                </div>


            <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[71px] text[-51px] text-white ss:leading-[100px] leading-[75px]">
                The Next <br className="sm:block hidden" /> {' '}
            <span className="text-gradient"> Generation</span><br />
             
             </h1>
             <div className="ss:flex hidden md:mr-4 mr-0">
                <GetStarted />
             </div>
            </div>
            <h1 className="font-poppins font-semibold ss:text-[68px] text[-51px] text-white ss:leading-[100px] leading-[75px] w-full">
                Payment Method.
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Our team of expert uses a method to identify the credit cards most likely to fit your needs.
                We examine anual percentage rates, annual frees.
            </p>
            </div>
                <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
            <div className={`flex-1 flex ${styles.flexCenter} md-0 my-10 relative`}>

            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[380%] rounded-full bottom-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[20%]right-20 bottom blue__gradient" />
                

            
            </div>

            <div className={` ss:hidden ${styles.flexCenter}`}>
                <GetStarted/>
            </div>
        </section>
    )


export default Hero