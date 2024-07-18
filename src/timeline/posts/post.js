import React from 'react';
import "./post.css";
import { Avatar } from '@mui/material';
import  MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function post({user, postImage, likes, timestamp}){
    return (
        <div className='post'>
            <div className='post_header'>
                <div className='post_headerAuthor'>
                <Avatar> {user.charAt(0).toUpperCase()} </Avatar>
                {user} . {" "} <span> {timestamp} </span>
                </div>
                <MoreHorizIcon />
            </div>
            <div className='post_image'>
                <img src={postImage}
                     alt='img1' />
            </div>
            <div className='post_footer'>
                <div className='post_footerIcons'>
                    <div className='post_iconsMain'>
                        <FavoriteBorderIcon className='postIcon'/>
                        <ChatBubbleOutlineIcon className='postIcon'/>
                        <TelegramIcon className='postIcon'/>
                    </div>
                    <div className='post_iconSave'>
                        <BookmarkBorderIcon className='postIcon'/>
                    </div>
                </div>
                Liked by {likes} people.
            </div>
        </div>
    )
}

export default post;