import React from 'react'

import { Link, Router } from '@gatsbyjs/reach-router';
import PresolvedLandingPage from './pages';
import PresolvedSignupPage from './pages/signup';



const presolvedIndexPage = () => {
  return (
    <Router >
      <PresolvedLandingPage path="/" />
      <PresolvedSignupPage path="/signup" />
    </Router>
  )
}

export default presolvedIndexPage