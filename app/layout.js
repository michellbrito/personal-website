import "./reset.css";
import "./globals.css";
import "./github-markdown-dark.css";

export const metadata = {
  title: "Michell Brito",
  description: "Welcome to my personal website. Discover my blog, and latest projects. Connect with me and explore my journey in software engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
