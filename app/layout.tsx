import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './contexts/ThemeContext';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AudioProvider } from "./contexts/AudioContext";
import { PodcastPlayerProvider } from "./contexts/PodcastPlayerContext";
import { PlaybackStateProvider } from "./contexts/PlaybackStateContext";
import PersistentPlayer from "@/components/PersistentPlayer/PersistentPlayer";
import PodcastPlayer from "./components/PodcastPlayer";
import PlaybackCoordinator from "./components/PlaybackCoordinator";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "RDL 68 - Radio Dreyeckland Libre",
  description: "Votre radio associative d'intérêt local pour la région du Haut-Rhin. Écoutez en direct, découvrez nos podcasts et programmes.",
  keywords: "radio, RDL 68, radio locale, Haut-Rhin, podcasts, live radio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <ThemeProvider>
          <PlaybackStateProvider>
            <AudioProvider>
              <PodcastPlayerProvider>
                <div className="app-wrapper">
                  <Header />
                  <main>{children}</main>
                  <PersistentPlayer />
                  <PodcastPlayer />
                  <Footer />
                  <PlaybackCoordinator />
                </div>
              </PodcastPlayerProvider>
            </AudioProvider>
          </PlaybackStateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
