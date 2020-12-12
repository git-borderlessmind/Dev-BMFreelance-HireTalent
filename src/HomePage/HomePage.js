import React, { useState, useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { FreelancersList } from "../FreelancersList/FreelancersList";
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import "./HomePage.css";

export const HomePage = ({ ...props }) => {
  return (
    <React.Fragment>
      <div>
        <Header />
        <section id="freelancers_banner">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12 offset-xl-2 offset-lg-2 offset-md-1 offset-sm-0 offset-0">
                <h1>
                  Hire the <span>Top 5% of Freelance</span> Talent in India
                </h1>
                <p>
                  Hire the Best Graphic Designers Talent from India directly
                  through BorderlessMind. We offer experienced Graphic
                  Designers, experts, freelancers and consultants to work
                  exclusively for you remotely. Small-Mid size businesses,
                  agencies and start-ups choose Borderless Mind for local and
                  offshore Graphic designing resources. Our Graphic designing
                  resources are ready to start working with you in a short time.
                </p>
                <a href="hire-talent-step1.html">Hire Best Talent</a>
              </div>
            </div>
          </div>
        </section>
        <section id="free_inner_content">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-12 search_wrapper">
                  <SearchForm />
              </div>
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-7 col-12">
                <FreelancersList />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};
