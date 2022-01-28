import React from 'react';
import Image from "next/image";
import postStyles from '../styles/Posts.module.css';


export default function CardPost({post}) {
    const formattedDate = new Date(post.publishDate).toDateString();
    const formattedTime = new Date(post.publishDate).toLocaleTimeString();
    console.log(post.owner);
    return (
        <div>
            <div className={postStyles.cardpost}>
                <div className={postStyles.postheader}>
                    <Image alt={post.id} src={post.owner.picture} layout="fixed" width="60" height="60"></Image>
                    <div>
                        <span>  {`${post.owner.title}. ${post.owner.firstName} ${post.owner.lastName}`}</span>
                        <span> {`${formattedDate} ${formattedTime}`}</span>
                    </div>
                </div>
                <div className={postStyles.post}>
                    <Image alt={post.id} src={post.image} width="160" height="180"></Image>
                    <div className={postStyles.posttext}>
                        <span> {`${formattedDate} ${formattedTime}`}</span>
                        <span>  {`${post.text}`}</span>
                        <div className={postStyles.tagsbox}>
                            {post.tags.map(tags => (<div className={postStyles.tags}> {`${tags}`}</div>))}
                        </div>
                        <div className={postStyles.likes}>
                            <span> <Image src="https://dummyapi.io/img/like.svg" width="18" height="18"/> {`${post.likes}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
