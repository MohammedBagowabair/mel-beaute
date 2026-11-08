import type { Metadata } from "next";
import { Great_Vibes, Manrope, Marcellus } from "next/font/google";
import "./globals.css";

const display = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const script = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Mel Beaute & Aesthetic | Taman Desa, KL",
  description:
    "Mel Beaute & Aesthetic — Pico, Laser, Nose Thread, Mesolipo, Skinz, Drips, BToX & Fillers in Taman Desa, Kuala Lumpur. Book on WhatsApp.",
  openGraph: {
    title: "Mel Beaute & Aesthetic",
    description:
      "Your skin, our priority. Aesthetic treatments in KL & JB — book via WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${script.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('click',function(e){var a=e.target.closest('#mobile-nav a');if(!a)return;var t=document.getElementById('nav-toggle');if(t)t.checked=false;var id=a.getAttribute('data-treatment');if(!id)return;var input=document.getElementById('treatment-'+id);if(input)input.checked=true;});(function(){function sync(){var header=document.querySelector('.site-header');if(!header)return;var pink=document.querySelector('.atmosphere');var edge=header.getBoundingClientRect().bottom||72;var onPink=!!(pink&&pink.getBoundingClientRect().bottom>edge-8);header.classList.toggle('is-on-light',!onPink);}sync();window.addEventListener('scroll',sync,{passive:true});window.addEventListener('resize',sync);})();`,
          }}
        />
      </body>
    </html>
  );
}
