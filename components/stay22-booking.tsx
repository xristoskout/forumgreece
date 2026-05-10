"use client";

import Script from "next/script";

export default function Stay22Booking() {
  return (
    <Script
      id="stay22-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function (s, t, a, y, twenty, two) {
            s.Stay22 = s.Stay22 || {};
            s.Stay22.params = { lmaID: '69eb75e6ce6579d96ef11aa3' };
            twenty = t.createElement(a);
            two = t.getElementsByTagName(a)[0];
            twenty.async = 1;
            twenty.src = y;
            two.parentNode.insertBefore(twenty, two);
          })(window, document, 'script', 'https://scripts.stay22.com/letmeallez.js');
        `,
      }}
    />
  );
}
