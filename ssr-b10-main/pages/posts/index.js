import React from 'react';
import Head from "next/head";
import axios from "axios";
import styles from '../../styles/Home.module.css'
import postStyles from '../../styles/Posts.module.css'
import CardPost from '../../components/CardPost'

export default function Posts({posts}){
    return(
        <div className={styles.container}>
            <Head>
                <title>Posts Page</title>
            </Head>

           <h1 style={{color:"white", textAlign:"center"}}>Page POSTS!!!</h1>
          <div className={postStyles.container}>
            {
                posts.map(currentPost => {
                    return (
                        <CardPost post={currentPost} />
                        )
                })
            }    
          </div>
        </div>    
    )

}
// Error: Error serializing `.users.config.adapter` returned from `getServerSideProps` in "/users".
// Reason: `function` cannot be serialized as JSON. Please only return JSON serializable data types.
// export async function getServerSideProps(){

//     const users = await axios.get('https://dummyapi.io/data/v1/user',
//     {headers:{'app-id': '61f0b536db5459a99936362c'}}
//     )
//     //axios -> response.data aqui viene lo que me regresa la API
//     // users.data.data el ultimo data es desde la API
//     console.log("Aca mis users", users.data.data)
//     return {
//         props: {
//             users: users.data.data
//         }
//     }

// }
export async function getStaticProps(){

    const posts = await axios.get('https://dummyapi.io/data/v1/post',
    {headers:{'app-id': '61f0b536db5459a99936362c'}}
    )
    //axios -> response.data aqui viene lo que me regresa la API
    // users.data.data el ultimo data es desde la API
    //console.log("Aca mis posts", posts.data.data)
    return {
        props: {
            posts: posts.data.data
        }
    }

}