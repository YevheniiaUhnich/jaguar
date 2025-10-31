import React from 'react';
import Athletes from "../components/Athletes";
import Coach from "../components/Coach";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Location from "../components/Location";
import News from "../components/News";
import Translation from "../components/Translation";

export default function Home() {
    return (

        <main>
            <Hero />
            <Coach />
            <Athletes />
            <News />
            <Translation />
            <Gallery />
            <Location />
        </main>

    )
}