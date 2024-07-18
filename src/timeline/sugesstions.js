import React from "react";
import "./sugesstions.css";
import { Avatar } from "@mui/material";

function sugesstions(){
    return <div className="sugesstions">
        <div className="sugesstions_title">Sugesstions for you</div>
        <div className="sugesstion_usernames">
            <div className="sugesstion_username">
                <div className="username_left">
                    <span className="avatar">
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username_info">
                        <span className="username">redian_</span>
                        <span className="relation">New to Instagram</span>
                    </div>
                </div>
                <button className="follow_button">Follow</button>
            </div>
            <div className="sugesstion_username">
                <div className="username_left">
                    <span className="avatar">
                        <Avatar>K</Avatar>
                    </span>
                    <div className="username_info">
                        <span className="username">kavita_menon</span>
                        <span className="relation">New to Instagram</span>
                    </div>
                </div>
                <button className="follow_button">Follow</button>
            </div>
            <div className="sugesstion_username">
                <div className="username_left">
                    <span className="avatar">
                        <Avatar>P</Avatar>
                    </span>
                    <div className="username_info">
                        <span className="username">priya_nair</span>
                        <span className="relation">New to Instagram</span>
                    </div>
                </div>
                <button className="follow_button">Follow</button>
            </div>

        </div>
    </div>;
}

export default sugesstions;