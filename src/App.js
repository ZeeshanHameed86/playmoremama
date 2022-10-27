import React, { Suspense, lazy } from "react";
import HomePage from "./pages/HomePage";
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
            <Suspense fallback={<div className="loading"></div>}>
              <ProductsPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Suspense fallback={<div className="loading"></div>}>
              <SingleProductPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div className="loading"></div>}>
              <CartPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/faqs"
          element={
            <Suspense fallback={<div className="loading"></div>}>
              <FAQPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/success/:id"
          exact
          element={
            <Suspense fallback={<div className="loading"></div>}>
              <SuccessPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/failed"
          exact
          element={
            <Suspense fallback={<div className="loading"></div>}>
              <FailedPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/review/:id"
          exact
          element={
            <Suspense fallback={<div className="loading"></div>}>
              <ReviewPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/digital"
          exact
          element={
            <Suspense fallback={<div className="loading"></div>}>
              <DigitalPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/privacypolicy"
          exact
          element={
            <Suspense fallback={<div className="loading"></div>}>
              <PrivacyPageLazy />
            </Suspense>
          }
        />
        <Route
          path="/terms"
          exact
          element={
            <Suspense fallback={<div className="loading"></div>}>
              <TermsPageLazy />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div className="loading"></div>}>
              <Page404Lazy />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
