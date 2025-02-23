import Link from '@components/Link';
import React from 'react';
import YouTube from 'react-youtube';

const Progress = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 max-w-8xl mx-auto">
        <YouTube
          videoId="lDX6a9pCOw8"
          className="w-full mb-10 lg:mb-0 h-48 lg:h-full"
        />
        <div>
          <h3 className="text-3xl leading-9 font-semibold lg:leading-13 lg:text-5xl">
            Our movement has <span className="text-primary">abolished</span>{' '}
            more than
          </h3>
          <h2 className="text-6xl leading-20 text-primary font-semibold font-more-gothic lg:text-9xl lg:leading-40">
            $1.8 Billion
          </h2>
          <p className="text-xl lg:text-2xl leading-7 font-semibold">
            in student debt, medical debt, payday loans, probation debt and
            credit card debt. Our student debt campaign put full student debt
            cancellation and free public college on the political map.
          </p>
        </div>
      </div>
      <Link className="mx-auto block mt-10 lg:mt-20" variant="button" href="/">
        Join the union
      </Link>
    </div>
  );
};

export default Progress;
