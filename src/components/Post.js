import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import sanityClient from "../client.js";

export default function Post(){
    const [postData, setPost ]= useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type =="post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data)=> setPost(data))
        .catch(console.error);
    }, []);

    return(
        <section>
            <Helmet>
                <title>MJ - Book | Blog Posts</title>
                <meta charset="UTF-8" />
                <meta name="description" content="MJ - Book | Blog Posts" />
                <meta name="keywords" content="Blog Posts" />
                </Helmet>
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Blog Posts Page</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my page of blog posts</h2>
                <div className="grid-cols-12">
                    {postData && postData.map((post, index)=>(
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block mb-5 relative rounded shadow leading-snug bg-white border-l-8 border-green-400 hover:text-white-100 hover:bg-red-100" key={index}>
                            {/* <img src={post.mainImage.asset.url} className="w-full h-full rounded-r object-cover absolute" /> */}
                            <span className="block relative h-full flex justify-start items-end pr-4 bp-4">
                                <h3 className="text-red-800 text-lg font-blog px-3 py-4 text-red-100 bg-opacity-75 rounded">{post.title}</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
))}
                </div>
            </section>
        </main>
        </section>

    )
}