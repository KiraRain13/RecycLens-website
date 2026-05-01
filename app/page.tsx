"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

interface Release {
  version: string;
  name: string;
  downloadUrl: string;
  releaseDate: string;
  fileSize: string;
  changelog?: string;
}

export default function Home() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReleases();
  }, []);

  const fetchReleases = async () => {
    try {
      const response = await fetch("/api/releases");
      const data = await response.json();
      setReleases(data.releases || []);
    } catch (error) {
      console.error("Failed to fetch releases:", error);
      setReleases(mockReleases);
    } finally {
      setLoading(false);
    }
  };

  const latestRelease = [...releases].sort((a, b) => {
    return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
  })[0];

  return (
    <div className={styles.container}>
      <header className={styles.headerWrap}>
        <div className={styles.headerPattern} aria-hidden="true" />
        <div className={styles.header}>
          <div className={styles.brand}>
            <Image
              src="/icon.png"
              alt="RecycLens"
              width={56}
              height={56}
              priority
              className={styles.icon}
            />
            <h1 className={styles.title}>RecycLens</h1>
          </div>
          <p className={styles.subtitle}>
            Take photos of trash. The app tells you if it goes in the green or blue bin. Learn by playing!
          </p>
          <div className={styles.ctaRow}>
            {latestRelease ? (
              <a href={latestRelease.downloadUrl} className={styles.primaryButton} download>
                Download Latest APK
              </a>
            ) : (
              <button className={styles.primaryButton} disabled>
                Download Latest APK
              </button>
            )}
            {latestRelease && (
              <p className={styles.latestMeta}>
                v{latestRelease.version} • {latestRelease.fileSize} • Released {latestRelease.releaseDate}
              </p>
            )}
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.appSection}>
          <h2 className={styles.sectionTitle}>What is RecycLens?</h2>
          <div className={styles.contentCard}>
            <p className={styles.bodyText}>
              RecycLens is a game that teaches you how to sort trash the right way.
            </p>
            <p className={styles.bodyText}>
              Point your phone camera at trash, and the app shows you where it belongs. Collect points as you learn!
            </p>
          </div>
        </section>

        <section className={styles.appSection}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.featureGrid}>
            <article className={styles.featureCard}>
              <h3 className={styles.featureTitle}>📸 Take a Picture</h3>
              <p className={styles.featureText}>
                Show RecycLens what kind of trash it is.
              </p>
            </article>
            <article className={styles.featureCard}>
              <h3 className={styles.featureTitle}>🗑️ Pick the Right Bin</h3>
              <p className={styles.featureText}>
                RecycLens tells you if it goes in green or blue.
              </p>
            </article>
            <article className={styles.featureCard}>
              <h3 className={styles.featureTitle}>🎮 Earn Points!</h3>
              <p className={styles.featureText}>
                Play games, learn, and get rewards!
              </p>
            </article>
          </div>
        </section>

        <section className={styles.appSection}>
          <h2 className={styles.sectionTitle}>Screenshots</h2>
          <div className={styles.screenshotGrid}>
            <div className={styles.screenshotCard}>
              <Image
                src="/screenshots/screenshot1.png"
                alt="RecycLens App Screenshot 1"
                width={240}
                height={480}
                className={styles.screenshot}
              />
            </div>
            <div className={styles.screenshotCard}>
              <Image
                src="/screenshots/screenshot2.png"
                alt="RecycLens App Screenshot 2"
                width={240}
                height={480}
                className={styles.screenshot}
              />
            </div>
            <div className={styles.screenshotCard}>
              <Image
                src="/screenshots/screenshot3.png"
                alt="RecycLens App Screenshot 3"
                width={240}
                height={480}
                className={styles.screenshot}
              />
            </div>
            <div className={styles.screenshotCard}>
              <Image
                src="/screenshots/screenshot4.png"
                alt="RecycLens App Screenshot 4"
                width={240}
                height={480}
                className={styles.screenshot}
              />
            </div>
            <div className={styles.screenshotCard}>
              <Image
                src="/screenshots/screenshot5.png"
                alt="RecycLens App Screenshot 5"
                width={240}
                height={480}
                className={styles.screenshot}
              />
            </div>
          </div>
        </section>

        <section className={styles.appSection}>
          <h2 className={styles.sectionTitle}>Why This App?</h2>
          <div className={styles.contentCard}>
            <ul className={styles.objectiveList}>
              <li>See what trash is just by taking a photo.</li>
              <li>Learn why some things go in green bins and others in blue bins.</li>
              <li>Have fun while you learn about helping the planet!</li>
              <li>Use the app in English or Filipino — pick your language.</li>
              <li>Play different levels: Easy, Medium, or Hard.</li>
            </ul>
          </div>
        </section>

        <section className={styles.latestSection}>
          <h2 className={styles.sectionTitle}>Download Now</h2>
          {loading ? (
            <p className={styles.message}>Loading latest build...</p>
          ) : latestRelease ? (
            <div className={styles.latestCard}>
              <h3 className={styles.latestTitle}>{latestRelease.name}</h3>
              <p className={styles.latestDescription}>{latestRelease.changelog}</p>
              <a href={latestRelease.downloadUrl} download className={styles.primaryButton}>
                Download v{latestRelease.version}
              </a>
            </div>
          ) : (
            <p className={styles.message}>No releases available yet.</p>
          )}
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 RecycLens. All rights reserved.</p>
      </footer>
    </div>
  );
}

const mockReleases: Release[] = [
  {
    version: "1.0.0",
    name: "Initial Release",
    downloadUrl: "#",
    releaseDate: "2026-04-27",
    fileSize: "45.2 MB",
    changelog:
      "Initial release of RecycLens with waste classification features",
  },
];
