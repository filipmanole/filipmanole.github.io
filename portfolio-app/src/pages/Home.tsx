import React, { lazy, Suspense } from "react";
import Layout from "../layout/layout";
import Spinner from "../components/Spinner";

const LazyRadialGradient = lazy(() => import("../components/RadialGradient"));
const LazyProfile = lazy(() => import("../components/Profile"));
const LazyBlogPosts = lazy(() => import("../components/BlogPosts"));
const LazySocialLinks = lazy(() => import("../components/SocialLinks"));
const LazyScheduler = lazy(() => import("../components/Scheduler"));

const Home: React.FC = () => {

  return (
    <>
      <Layout>
        <div className="flex flex-col relative p-32 max-lg:p-10 gap-32">
          <Suspense fallback={<Spinner />}>
            <LazyRadialGradient scale="scale-y-125" opacity="opacity-100" />
            <LazyProfile />
            <LazyScheduler />
            <LazyBlogPosts />
            <LazySocialLinks />
          </Suspense>
        </div>
      </Layout>
    </>
  );
};

export default Home;
