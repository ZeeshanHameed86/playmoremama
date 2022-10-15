import React, { Suspense, lazy } from "react";
import HomePage from "./pages/HomePage";
//import SingleProductsPage from "./pages/SingleProductPage/SingleProductsPage";
//import CartPage from "./pages/CartPage/CartPage";
//import FAQPage from "./pages/FAQPage/FAQPage";
// import SuccessPage from "./pages/SuccessFailedPage/SuccessPage";
// import FailedPage from "./pages/SuccessFailedPage/FailedPage";
// import DigitalPage from "./pages/DigitalPage/DigitalPage";
// import ReviewPage from "./pages/ReviewPage/ReviewPage";
// import Page404 from "./pages/Page404/Page404";
// import PrivacyPolicyPage from "./pages/Privacy&Terms/PrivacyPolicyPage";
// import TermsConditionsPage from "./pages/Privacy&Terms/TermsConditionsPage";
// import {
//   HomePage,
//   SingleProductsPage,
//   CartPage,
//   FAQPage,
//   SuccessPage,
//   FailedPage,
//   DigitalPage,
//   ReviewPage,
//   Page404,
//   PrivacyPolicyPage,
//   TermsConditionsPage,
// } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ProductsPageLazy = lazy(() =>
  import(
    /* webpackChunkName: "productPage" */ "./pages/ProductsPage/ProductsPage"
  )
);
const SingleProductPageLazy = lazy(() =>
  import(
    /* webpackChunkName: "singleProductPage" */ "./pages/SingleProductPage/SingleProductsPage"
  )
);
const CartPageLazy = lazy(() =>
  import(/* webpackChunkName: "cartPage" */ "./pages/CartPage/CartPage")
);
const FAQPageLazy = lazy(() =>
  import(/* webpackChunkName: "faqPage" */ "./pages/FAQPage/FAQPage")
);
const SuccessPageLazy = lazy(() =>
  import(
    /* webpackChunkName: "successPage" */ "./pages/SuccessFailedPage/SuccessPage"
  )
);
const FailedPageLazy = lazy(() =>
  import(
    /* webpackChunkName: "failedPage" */ "./pages/SuccessFailedPage/FailedPage"
  )
);
const ReviewPageLazy = lazy(() =>
  import(/* webpackChunkName: "reviewPage" */ "./pages/ReviewPage/ReviewPage")
);
const DigitalPageLazy = lazy(() =>
  import(
    /* webpackChunkName: "digitalPage" */ "./pages/DigitalPage/DigitalPage"
  )
);
const PrivacyPageLazy = lazy(() =>
  import(
    /* webpackChunkName: "privacyPage" */ "./pages/Privacy&Terms/PrivacyPolicyPage"
  )
);
const TermsPageLazy = lazy(() =>
  import(
    /* webpackChunkName: "termsPage" */ "./pages/Privacy&Terms/TermsConditionsPage"
  )
);
const Page404Lazy = lazy(() =>
  import(/* webpackChunkName: "404Page" */ "./pages/Page404/Page404")
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route
          path="/products"
          exact
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProductsPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SingleProductPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CartPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/faqs"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FAQPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/success/:id"
          exact
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SuccessPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/failed"
          exact
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FailedPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/review/:id"
          exact
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ReviewPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/digital"
          exact
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <DigitalPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/privacypolicy"
          exact
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PrivacyPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/terms"
          exact
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <TermsPageLazy />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Page404Lazy />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
