import Head from "@docusaurus/Head";
import clsx from "clsx";
import React from "react";

import { CommonLayout } from "../refine-theme/common-layout";
import { LandingFooter } from "../refine-theme/landing-footer";
import { LandingCommunity } from "../refine-theme/landing-community";
import { LandingEnterpriseDevelopers } from "../refine-theme/landing-enterprise-developers";
import { LandingTrustedByDevelopers } from "../refine-theme/landing-trusted-by-developers";
import { LandingPackages } from "../refine-theme/landing-packages";
import { LandingAlreadyInvented } from "../refine-theme/landing-already-invented";
import { LandingPureReactCode } from "../refine-theme/landing-pure-react-code";
import { LandingSweetSpot } from "../refine-theme/landing-sweet-spot";
import { LandingHeroSection } from "../refine-theme/landing-hero-section";
import { LandingTryItSection } from "../refine-theme/landing-try-it-section";
import { CommonHeader } from "../refine-theme/common-header";
import { LandingTestimonial } from "../refine-theme/landing-testimonial";

function Home() {
  const title = "Refine | Open-source Retool for Enterprise";
  return (
    <>
      <Head>
        <html data-active-page="index" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <link
          rel="preload"
          href="https://refine.new/embed-form"
          as="document"
        />
      </Head>
      <CommonLayout description="Build React-based internal tools, admin panels, dashboards & B2B apps with unmatched flexibility.">
        <div className={clsx()}>
          <CommonHeader />

          </div>
          <LandingFooter />
        </div>
      </CommonLayout>
    </>
  );
}

export default Home;
