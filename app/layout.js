import "./reset.css";
import "./globals.css";
import "./github-markdown-dark.css";
import Script from 'next/script';

export const metadata = {
  title: "Michell Brito",
  description: "Welcome to my personal website. Discover my blog, and latest projects. Connect with me and explore my journey in software engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script id="clarity-script" strategy="afterInteractive" type="text/javascript">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "nzotl3n8ke");
        `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
