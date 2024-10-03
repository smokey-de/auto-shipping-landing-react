import React from 'react';
import { BlurFade } from '@/shared/ui';
import { Navbar } from '@/widgets/header/Navbar';
import { ContentFooter } from '@/widgets/contentFooter';
import { PrivacyContent } from '@/widgets/privacyContent';

export const Privacy = () => {
  return (
      <header className={'bg-[#1A1B26]'}>
        <div className={"container"}>
          <BlurFade delay={0.06}>
            <Navbar />
          </BlurFade>
          <BlurFade delay={0.15}>
            <PrivacyContent/>
          </BlurFade>
        </div>

        <ContentFooter />
      </header>
  );
};