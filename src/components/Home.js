import React from 'react';
import {Helmet} from 'react-helmet';
import homeImage from'./../images/home.jpeg';

export default function Home(){
    return(
        <section>
                <Helmet>
                <title>MJ - Book | Home</title>
                <meta charset="UTF-8" />
                <meta name="description" content="MJ - Book | Home" />
                <meta name="keywords" content="Home" />
                </Helmet>
        <main>
            <img src={homeImage} className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-slug home-name">Welcome in mj-book website.</h1>
            </section>
        </main>
        </section>

    )
}