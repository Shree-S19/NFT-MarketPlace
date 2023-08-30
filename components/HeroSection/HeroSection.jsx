// This file is a client-side rendering component
"use client";

import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect'
import Lottie from 'lottie-react';
import {motion} from 'framer-motion';
//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
// import { Button } from "../componentsindex";
// import images from "../../img";
import NFTanimation from "../../public/LottieAnimations/NFTcircling.json"



const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
              <motion.p initial={{scale:0.4,opacity:1}} animate={{scale:1,opacity:1}} transition={{delay:0.3,duration:1}}>
                Discover the most outstanding NTFs in all topics of life. 
              </motion.p>
              <motion.p initial={{scale:0.4,opacity:1}} animate={{scale:1,opacity:1}} transition={{delay:0.6,duration:1}}>
                Creativeyour NTFs and sell them
              </motion.p>
          <Typewriter id="typewriter"
                options={{
                  cursor: '',
                  delay:18
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("<h1>Discover, </h1> <h1>collect, and </h1> <h1>sell <span style='color: blue'>NFTs</span> 🖼️</h1>")
                        .start();
                }}
            />
           {/* <Button btnName="Start your search" /> */}
        </div>
        <motion.div className={Style.heroSection_box_right} initial={{scaleY:0,scaleX:0.2}} animate={{scaleY:1,scaleX:1}} transition={{duration:1.4}}>
              <Lottie animationData={NFTanimation}/>
        </motion.div>
      // </div> 
    </div>
  );
};

export default HeroSection;
