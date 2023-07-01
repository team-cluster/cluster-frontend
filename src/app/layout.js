import "./globals.css";
import localFont from "next/font/local";
import { ApolloWrapper } from "./ApolloWrapper";

const pretendard = localFont({
  src: [
    {
      path: "./fonts/PretendardVariable.woff2",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "ClusterKice",
  description: "webpage for team cluster.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
