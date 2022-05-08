import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { MessengerPage } from '../../pages/MessengerPage/MessengerPage';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { NoMatchPage } from '../../pages/NoMatchPage/NoMatchPage';
import { HomePage } from '../../pages/HomePage/HomePage';
import { AppRoutesEnum } from '../../globalStoreUtils';

export const AppRoutes: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={AppRoutesEnum.HOME} element={<HomePage />} />
        <Route path={AppRoutesEnum.MESSENGER} element={<MessengerPage />} />
        <Route path={AppRoutesEnum.PROFILE} element={<ProfilePage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
      <main></main>
      <Footer />
    </>
  );
};
