"use client";
import { Inter } from 'next/font/google'
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] })
import React, { useEffect } from 'react';


export default function RootLayout({ children }) {
  useEffect(() => {
    const scripts = [
      `/assets/js/jquery.min.js`,
      `/assets/js/jquery.easing.min.js`,
      `/assets/plugins/bootstrap/js/bootstrap.min.js`,
      `/assets/plugins/pace/pace.min.js`,
      `/assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js`,
      `/assets/plugins/viewport/viewportchecker.js`,
      `/assets/plugins/sparkline-chart/jquery.sparkline.min.js`,
      `/assets/js/chart-chartjs.js`,
      `/assets/plugins/candlestick/jquery.jqcandlestick.min.js`,
      `/assets/js/candle-stick-ini.js`,
      `/assets/js/scripts.js`,
    ];

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src + `?v=${Date.now()}`; // Add timestamp query parameter
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      for (const script of scripts) {
        try {
          await loadScript(script);
        } catch (error) {
          console.error(error);
        }
      }
    };

    if (document.readyState === "complete") {
      loadScripts();
    } else {
      window.onload = loadScripts;
    }
  }, []);

  return (
    <>
    <html lang="en">
      <head>
      <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Crypto Template &amp; Dashboard</title>
        <meta content="" name="description" />
        <meta content="" name="author" />
        <link
          rel="shortcut icon"
          href="/assets/images/favicon.png"
          type="image/x-icon"
        />
        
        <link
          href="/assets/plugins/pace/pace-theme-flash.css"
          rel="stylesheet"
          type="text/css"
          media="screen"
        />
        <link
          href="/assets/plugins/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/plugins/bootstrap/css/bootstrap-theme.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/fonts/font-awesome/css/font-awesome.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/fonts/webfont/cryptocoins.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/fonts/webfont/cryptocoins.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="/assets/css/animate.min.css" rel="stylesheet" type="text/css" />
        <link
          href="/assets/plugins/perfect-scrollbar/perfect-scrollbar.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/plugins/candlestick/jqcandlestick.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="/assets/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/responsive.css" rel="stylesheet" type="text/css" />      
        
      </head>
        
      <body >
        
        {children}
       
     
      </body>
    </html>
    </>
    
  )
}
