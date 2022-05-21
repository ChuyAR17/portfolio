import React from 'react';
import { Helmet } from 'react-helmet';
import { Social } from './Social';
import { EmailSide } from './EmailSide';

interface HelmetProps {
  children: React.ReactNode;
  title: string;
  name?: string;
  description?: string;
}

export const Layout = ({ children, title, name, description }: HelmetProps) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name={name} content={description} />
    </Helmet>
    <div className='Layout'>
      <Social />
      <EmailSide />
      {children}
    </div>
  </>
);
