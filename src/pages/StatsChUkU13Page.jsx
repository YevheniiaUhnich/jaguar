import React from "react";
import "../styles/LeagueTable.css";
import {
  teamsTur1,
  teamsTur2,
  teamsTur3,
  teamsTur4,
  tur1U13,
  tur2U13,
  tur3U13,
  tur4U13,
  tur1,
  tur2,
  tur3,
  tur4,
  tur5,
  teamsTur5,
  tur5U13,
  tur6,
  tur6U13,
  teamsTur6,
  tur7U13,
  tur7,
  teamsTur7,
  tur8U13,
  tur8,
  teamsTur8
} from "../data/turU13.js";
import { TourMatrixU13 } from "../components/TourMatrixU13.jsx";

export default function StatsChUkU13Page() {
  return (
    <section className="league-page">
      <div className="container">
        <h2 className="titleChUk">
          Турнірна таблиця Чемпіонату України з хокею <br />
          серед юнаків 2013-2014 року народження
          <br />
          сезону 2025-2026 р. ЕЛІТ ЛІГА
        </h2>

        <TourMatrixU13
          title="Тур 1"
          standings={tur1U13}
          results={tur1}
          teams={teamsTur1}
        />

        <TourMatrixU13
          title="Тур 2"
          standings={tur2U13}
          results={tur2}
          teams={teamsTur2}
        />

        <TourMatrixU13
          title="Тур 3"
          standings={tur2U13}
          results={tur3}
          teams={teamsTur3}
        />

        <TourMatrixU13
          title="Тур 4"
          standings={tur4U13}
          results={tur4}
          teams={teamsTur4}
        />

        <TourMatrixU13
          title="Тур 5"
          standings={tur5U13}
          results={tur5}
          teams={teamsTur5}
        />


        <TourMatrixU13
          title="Тур 6"
          standings={tur6U13}
          results={tur6}
          teams={teamsTur6}
        />

         <TourMatrixU13
          title="Тур 7"
          standings={tur7U13}
          results={tur7}
          teams={teamsTur7}
        />

         <TourMatrixU13
          title="Тур 8"
          standings={tur8U13}
          results={tur8}
          teams={teamsTur8}
        />
      </div>
    </section>
  );
}
