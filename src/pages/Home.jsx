import React from 'react';
import Athletes from "../components/Athletes";
import Coach from "../components/Coach";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Location from "../components/Location";
import News from "../components/News";
import Translation from "../components/Translation";
import StatsChUkU13 from '../components/StatsChUkU13';
import StatsChUkU16 from '../components/StatsChUkU16';
import GoalkeeperCoach from "../components/GoalkeeperCoach";


export default function Home() {
    return (
      <main>
        <Hero />
        <Coach />
        <GoalkeeperCoach />
        <StatsChUkU13 />
        <StatsChUkU16 />
        <Athletes />
        <News />
        <Translation />
        <Gallery />
        <Location />
      </main>
    );
}