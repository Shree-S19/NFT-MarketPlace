// This file is a client-side rendering component
"use client";

import React,{useState,useEffect} from "react";
import Image from "next/image";
import {motion, useAnimation} from "framer-motion";

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";


const Service = () => {

  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  // Your animation properties (you can customize these)
  const animationVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    hidden: { opacity: 0, y: 50, transition: { duration: 0.4 } },
  };

  // Trigger animation when isVisible becomes true
  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    }else {
      controls.start("hidden"); // Hide animation when isVisible is false
    }
  }, [isVisible, controls]);14
  // Add an event listener to detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if(window.innerWidth <= 768) window.scrollY > 400 && window.scrollY < 1400 ? setIsVisible(true) : setIsVisible(false);
      else window.scrollY > 250 && window.scrollY < 800 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div className={Style.service}>
      <div className={Style.service_box}>
        <motion.div className={Style.service_box_item} initial="hidden"animate={controls} variants={animationVariants} whileHover={{scale:1.25}}>
            <Image
              src={images.service1}
              alt="Filter & Discover"
              width={100}
              height={100}
            />
            <p className={Style.service_box_item_step}>
              <span>Step 1</span>
            </p>
            <h3>Filter & Discover</h3>
            <p>
              Connect with wallet, discover, buy NTFs, sell your NFTs and earn
              money
            </p>
        </motion.div>
        <motion.div className={Style.service_box_item} initial="hidden"animate={controls} variants={animationVariants} whileHover={{scale:1.25}}>
          <Image
            src={images.service2}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </motion.div>
        <motion.div className={Style.service_box_item} initial="hidden"animate={controls} variants={animationVariants} whileHover={{scale:1.25}}>
          <Image
            src={images.service3}
            alt="Connect Wallet"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </motion.div>
        <motion.div className={Style.service_box_item} initial="hidden"animate={controls} variants={animationVariants} whileHover={{scale:1.25}}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Start trading</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Service;
