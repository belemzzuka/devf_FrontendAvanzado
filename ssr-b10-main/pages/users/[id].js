import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../../styles/Home.module.css'

export default function Users({ user }){
    const router = useRouter();
    const { id } = router.query;
    return(
        <div className={styles.container}>
            <Head>
                <title>Users detail page</title>
            </Head>

           <h1>User ID: {id}</h1>
           <br/>
           <h2>{user.firstName} {user.lastName}</h2>
           <Image alt={user.firstName} width="200" height="200" src={user.picture}></Image>
        </div>    
    )

}

export async function getStaticPaths(){
    const users = await axios.get(`https://dummyapi.io/data/v1/user`,
    {headers:{'app-id': '61f0b536db5459a99936362c'}}
    )

    const paths = users.data.data.map( user => {
        return { params: { id: user.id }}
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const id = context.params.id;

    const users = await axios.get(`https://dummyapi.io/data/v1/user/${id}`,
    {headers:{'app-id': '61f0b536db5459a99936362c'}}
    )
    //axios -> response.data aqui viene lo que me regresa la API
    // users.data.data el ultimo data es desde la API
    console.log("Aca mis users", users.data.data)
    return {
        props: {
            user: users.data
        }
    }
}

// [userID].js
// const { userID } = router.query

// export async function getStaticPaths(){

// }

// export async function getStaticProps({ params }){
//     console.log(params)
// }