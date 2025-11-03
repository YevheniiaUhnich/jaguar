import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <h1 className="nf-title">Сторінку не знайдено</h1>
        <p className="nf-text">
          Можливо, адреса з помилкою або сторінку перенесено.
        </p>
        <div className="nf-actions">
          <Link to="/" className="nf-btn">
            На головну
          </Link>
          <Link to="/news" className="nf-btn nf-secondary">
            Новини
          </Link>
          <Link to="/translation" className="nf-btn nf-secondary">
            Трансляції
          </Link>
        </div>
      </div>
    </section>
  );
}
