// This file is a client-side rendering component
"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";
import {motion,useAnimation} from "framer-motion"

//INTERNAL IMPORT
import Style from "./BigNFTSilder.module.css";
import images from "../../img";
import Button from "../Button/Button";

const BigNFTSilder = () => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Logith Vikram",
      collection: "GYm",
      price: "00664 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "Shoaib Hussain",
      collection: "Home",
      price: "0000004 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 77,
        hours: 11,
        minutes: 21,
        seconds: 45,
      },
    },
    {
      title: "Gym NFT",
      id: 3,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "0000064 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 37,
        hours: 20,
        minutes: 11,
        seconds: 55,
      },
    },
    {
      title: "Home NFT",
      id: 4,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "4664 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_1,
      time: {
        days: 87,
        hours: 29,
        minutes: 10,
        seconds: 15,
      },
    },
  ];

  //-------INC
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  //transition Effect
  const controls = useAnimation();
  const controlBg = useAnimation();
  const [isVisible, setIsVisible] = useState(true);
  const [isBgvisible , setIsBgVisible] = useState(true);
  // Your animation properties (you can customize these)
  const animationVariants = {
    visible: { opacity: 1, y: 0, scale:1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: 50, scale:0, transition: { duration: 0.4 } },
  };

  // Trigger animation when isVisible becomes true
  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    }else {
      controls.start("hidden"); // Hide animation when isVisible is false
    }

    if(isBgvisible)controlBg.start('visible');
    else controlBg.start('hidden');
  }, [isVisible, controls]);

  // Add an event listener to detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if(window.innerWidth <= 768) window.scrollY > 1200 && window.scrollY < 3000 ? setIsVisible(true) : setIsVisible(false);
      else window.scrollY > 700 && window.scrollY < 2000 ? setIsVisible(true) : setIsVisible(false);

      if(window.innerWidth <= 768) window.scrollY > 1200 && window.scrollY < 3000 ? setIsBgVisible(true) : setIsBgVisible(false);
      else window.scrollY > 700 && window.scrollY < 2000 ? setIsBgVisible(true) : setIsBgVisible(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <motion.div className={Style.bigNFTSlider_box_left} 
            initial="hidden"
            animate={controls} 
            variants={animationVariants}
            >
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={100}
                height={100}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <h3>Creator</h3>
                <pre>
                  {sliderData[idNumber].name}{" "}
                  <span style={{color:"blue"}}>
                    <MdVerified />
                  </span>
                </pre>
              </div>
            </div >

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire style={{color:"red"}}
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />
              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p style={{color:"violet"}}>
                {sliderData[idNumber].price} <span style={{color:"purple"}}>$221,21</span>
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer 
                className={Style.bigNFTSlider_box_left_bidding_box_icon}
                style={{color:"black"}}
              />
            <span style={{color:"red"}}>Auction ending in ~</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <motion.div whileHover={{scale:1.2}} whileTap={{scale:0.8}} transition={{duration:0.4}}><Button btnName="Place" handleClick={() => {}} /></motion.div>
              <motion.div whileHover={{scale:1.2}} whileTap={{scale:0.8}} transition={{duration:0.4}}><Button btnName="View" handleClick={() => {}} /></motion.div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <motion.div whileHover={{scale:1.8}} whileTap={{scale:0.8,opacity:0.8}} transition={{duration:0.2}}>
            <TbArrowBigLeftLines
              // className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            </motion.div>
            <motion.div whileHover={{scale:1.8}} whileTap={{scale:0.8,opacity:0.8}} transition={{duration:0.2}}>
            <TbArrowBigRightLines
              // className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
            </motion.div>
          </div>
        </motion.div> 

        <motion.div className={Style.bigNFTSlider_box_right}
          initial="hidden"
          animate={controlBg} 
          variants={animationVariants}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className={Style.bigNFTSlider_box_right_box_img}
            />

            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BigNFTSilder;
