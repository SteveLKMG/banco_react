import React from "react";
import styles from "./style";

import Billing from "./components/Billing";
import Business from "./components/Business";
import Button from "./components/Button";
import CardDeal from "./components/CardDeal";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import FeedbackCard from "./components/FeedbackCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Stats from "./components/Stats";
import Testemonials from "./components/Testemonials";
import GetStarted from './components/Getstarted'

const App = () => (
  // NavBar
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX}${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    {/* section */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testemonials />
        <Clients />
        <CTA />
        <Footer />
       
      </div>
    </div>
  </div>
);

export default App;
