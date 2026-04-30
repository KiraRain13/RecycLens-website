"use client";
import styles from "./ReleaseCard.module.css";

interface Release {
  version: string;
  name: string;
  downloadUrl: string;
  releaseDate: string;
  fileSize: string;
  changelog?: string;
}

export default function ReleaseCard({ release }: { release: Release }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.version}>{release.name}</h2>
        <span className={styles.badge}>v{release.version}</span>
      </div>

      <div className={styles.body}>
        <p className={styles.meta}>📅 {release.releaseDate}</p>
        <p className={styles.meta}>📦 {release.fileSize}</p>

        {release.changelog && (
          <div className={styles.changelog}>
            <h3 className={styles.changelogTitle}>Changelog</h3>
            <p className={styles.changelogText}>{release.changelog}</p>
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <a
          href={release.downloadUrl}
          className={styles.button}
          download
          title={`Download ${release.name}`}
        >
          ⬇ Download APK
        </a>
      </div>
    </article>
  );
}
