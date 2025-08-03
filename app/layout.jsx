import React from 'react';
import '@/app/globals.css';
import PropTypes from 'prop-types';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* Kakao SDK */}
        <script src="https://developers.kakao.com/sdk/js/kakao.js" async></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
