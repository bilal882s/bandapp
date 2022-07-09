import React, { useEffect, useState } from 'react';

import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import dayjs from 'dayjs';

export default function Header() {
    const [time, setTime] = useState("")

    setInterval(() => {
        setTime(dayjs().format("DD MMM YYYY /  ddd hh:mm:ss ( a )"))
    })
    return (
        <>
            <div className="topbar bg-white text-white">
                <div className="row mx-3">
                    <div className="col">
                        <div className="topbar text-dark">{time}
                            <div className="float-end mx-5 icons">
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
        </>
    )
}
