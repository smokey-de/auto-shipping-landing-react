import React from 'react';
import { ContentHeader } from '@/widgets/header';
import { RateByTrustPeople } from '@/widgets/rate';
import { AboutShip } from '@/widgets/aboutShip';
import { WhyChoose } from '@/widgets/whyChoose';
import { ContentFooter } from '@/widgets/contentFooter';

export const Home = () => {
  return (
    <div>
      <ContentHeader />
      <RateByTrustPeople />
      <AboutShip />
      <WhyChoose />
      <ContentFooter />
    </div>
  );
};