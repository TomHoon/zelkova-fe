'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function C_KakaoMap() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!isScriptLoaded) return;

    // kakao 객체 확인
    if (!window.kakao || !window.kakao.maps) {
      console.error('kakao.maps 객체 없음');
      return;
    }

    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(37.547458, 127.204603),
        level: 3,
      };

      const map = new window.kakao.maps.Map(container, options);

      new window.kakao.maps.Marker({
        map,
        position: options.center,
      });
    });
  }, [isScriptLoaded]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false&libraries=services`}
        onLoad={() => {
          setIsScriptLoaded(true);
        }}
        onError={() => {
          console.error('Kakao Map SDK load failed');
        }}
      />
      <div
        id="map"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </>
  );
}
