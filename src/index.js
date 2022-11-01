import { Router } from "@gatsbyjs/reach-router";
import { Amplify } from 'aws-amplify';
import React, { Suspense } from 'react';
import ReactDOM from "react-dom";
import awsExports from './aws-exports';
import DefaultErrorBoundary from "./errorBoundary";
import Suspence from "./suspence";

const OnboardAddIndexPage = React.lazy(() => import('./onboarding'));
const LandingPage = React.lazy(() => import('./landing_page'));
const root =  document.getElementById("root");

Amplify.configure(awsExports);


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Suspence/>}>
      <DefaultErrorBoundary>
        <Router basepath="/">
          <LandingPage path="/*" />
          <OnboardAddIndexPage path="/signup/*" />
        </Router>
      </DefaultErrorBoundary>
    </Suspense>
  </React.StrictMode>,
  root
);