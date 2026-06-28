import React from 'react';
import AdminHeader from '../component/AdminHeader';
import AdminNav from '../component/AdminNav';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <AdminHeader />
      <AdminNav />
      {children}
    </>
  );
};

export default layout;
