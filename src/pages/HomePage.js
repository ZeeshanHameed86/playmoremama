import React, { Suspense, lazy } from "react";
// import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
// import MainFooter from "../components/Footer/MainFooter";
//import Introduction from "../components/Introduction/Introduction";
// import FeaturedProducts from "../components/Featured/FeaturedProducts";
// import Value from "../components/Value/Value";
//import Footer from "../components/Footer/Footer";
// import {
//   Navbar,
//   Header,
//   Introduction,
//   FeaturedProducts,
//   Value,
//   Footer,
//   MainFooter,
// } from "../components";

const NavbarLazy = lazy(() =>
  import(/* webpackChunkName: "navbar" */ "../components/Navbar/Navbar")
);
const ValueLazy = lazy(() =>
  import(/* webpackChunkName: "value" */ "../components/Value/Value")
);
const IntroductionLazy = lazy(() =>
  import(
    /* webpackChunkName: "introduction" */ "../components/Introduction/Introduction"
  )
);
const FeaturedProductsLazy = lazy(() =>
  import(
    /* webpackChunkName: "featured" */ "../components/Featured/FeaturedProducts"
  )
);
const FooterLazy = lazy(() =>
  import(/* webpackChunkName: "footer" */ "../components/Footer/Footer")
);
const MainFooterLazy = lazy(() =>
  import(/* webpackChunkName: "mainFooter" */ "../components/Footer/MainFooter")
);

const HomePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarLazy offset={0} />
      </Suspense>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <ValueLazy />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <IntroductionLazy />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedProductsLazy />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FooterLazy />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MainFooterLazy />
      </Suspense>
    </div>
  );
};

export default HomePage;
