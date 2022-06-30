import React from 'react';
import Navbar from './Navbar';
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Header() {

    return (
        <>
            <div className="topbar bg-white text-white">
                <div className="row mx-3">
                    <div className="col">
                        <div className="topbar text-dark">Date and Time
                            <div className="float-end mx-5">
                                <BsFacebook style={{ color: "#1877f2", marginLeft: "2rem", cursor: "pointer" }} />
                                <BsWhatsapp style={{ color: "#25d366", marginLeft: "2rem", cursor: "pointer" }} />
                                <BsInstagram style={{ color: "#405de6", marginLeft: "2rem", cursor: "pointer" }} />
                                <BsLinkedin style={{ color: "#0077b5", marginLeft: "2rem", cursor: "pointer" }} />
                                <BsGithub style={{ color: "#333", marginLeft: "2rem", cursor: "pointer" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    )
}
