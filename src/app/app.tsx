import React, { FC, Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import { AppError } from '@/app/config/app-error';
import { RoutesViews } from '@/app/config/routing/init';
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import './styles/global.scss';
const ErrorFallback = ({ error }: FallbackProps) => {
    return <AppError />;
};

export const App: FC = () => {
    return (
      <>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <MantineProvider>
            <Notifications />
            <Suspense fallback={ <Loading/>}>
                <RoutesViews />
            </Suspense>
          </MantineProvider>
        </ErrorBoundary>
      </>
    );
};


const Loading = () => {
  return (
    <div className={'loading'}/>
  )
}