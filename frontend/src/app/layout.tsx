import "./globals.css";
import { cn } from "@/lib/utils";
import { notoSansJp } from "@/lib/fonts";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={cn("h-full", "antialiased", notoSansJp.variable, "font-noto")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
