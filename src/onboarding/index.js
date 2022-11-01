import { Router } from "@gatsbyjs/reach-router";
import React, { Suspense } from "react";
import { Provider } from 'react-redux';
import { store } from './store';
import Suspence from "../suspence"
const OnBoardPage = React.lazy(() => import('./pages/onboard-page'));


const OnboardAddIndexPage = () => {
    return (
        <Suspense fallback={<Suspence />}>
            <Provider store={store}>
                <OnBoardPage />
            </Provider>
        </Suspense>
    )
}

export default OnboardAddIndexPage