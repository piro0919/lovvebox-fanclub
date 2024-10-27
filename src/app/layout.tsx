// eslint-disable-next-line filenames/match-exported
import type { Metadata } from "next";
import { M_PLUS_1 as MPLUS1 } from "next/font/google";
import "ress";
import "./globals.css";

const mPlus1 = MPLUS1({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "ラブボックス ファンクラブ",
  description: "会いに行けるアイドルVTuberグループ",
  title: "ラブボックス ファンクラブ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ja">
      <body className={mPlus1.className}>{children}</body>
    </html>
  );
}
