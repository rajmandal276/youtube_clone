import React from "react";
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdSchool, MdFlight, MdLibraryBooks } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm, FiHelpCircle, FiSettings } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { GiSoccerBall } from "react-icons/gi";
import { FaUserFriends, FaRegLaughBeam, FaTheaterMasks } from "react-icons/fa";
import {  RiFeedbackLine } from "react-icons/ri";

export const categories = [
    { id: "0", name: "Home", icon: <AiFillHome />, type: "category" },
    { id: "10", name: "Music", icon: <CgMusicNote />, type: "category" },
    { id: "17", name: "Sports", icon: <GiSoccerBall />, type: "category" },
    { id: "19", name: "Travel & Events", icon: <MdFlight />, type: "category" },
    { id: "20", name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { id: "22", name: "People & Blogs", icon: <FaUserFriends />, type: "category" },
    { id: "23", name: "Comedy", icon: <FaRegLaughBeam />, type: "category" },
    { id: "24", name: "Entertainment", icon: <FaTheaterMasks />, type: "category", divider: true },
    { id: "1", name: "Film & Animation", icon: <FiFilm />, type: "category" },
    { id: "25", name: "News & Politics", icon: <MdLibraryBooks />, type: "category" },
    { id: "27", name: "Education", icon: <MdSchool />, type: "category" },
];

export const menuItems = [
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];

