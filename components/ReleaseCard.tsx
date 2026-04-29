"use client";

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
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h2 style={styles.version}>{release.name}</h2>
        <span style={styles.badge}>v{release.version}</span>
      </div>

      <div style={styles.cardBody}>
        <p style={styles.date}>📅 {release.releaseDate}</p>
        <p style={styles.size}>📦 {release.fileSize}</p>

        {release.changelog && (
          <div style={styles.changelog}>
            <h3 style={styles.changelogTitle}>Changelog:</h3>
            <p style={styles.changelogText}>{release.changelog}</p>
          </div>
        )}
      </div>

      <div style={styles.cardFooter}>
        <a
          href={release.downloadUrl}
          style={styles.downloadBtn}
          download
          title={`Download ${release.name}`}
        >
          ⬇️ Download APK
        </a>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column" as const,
    height: "100%",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  cardHeader: {
    padding: "20px",
    borderBottom: "2px solid #2d5016",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  version: {
    margin: "0",
    fontSize: "1.3em",
    color: "#333",
  },
  badge: {
    backgroundColor: "#2d5016",
    color: "white",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "0.85em",
    fontWeight: "bold" as const,
  },
  cardBody: {
    padding: "20px",
    flex: 1,
  },
  date: {
    margin: "0 0 10px 0",
    color: "#666",
    fontSize: "0.95em",
  },
  size: {
    margin: "0 0 15px 0",
    color: "#666",
    fontSize: "0.95em",
  },
  changelog: {
    marginTop: "15px",
    padding: "12px",
    backgroundColor: "#f9f9f9",
    borderLeft: "3px solid #2d5016",
    borderRadius: "4px",
  },
  changelogTitle: {
    margin: "0 0 8px 0",
    fontSize: "0.9em",
    color: "#2d5016",
    fontWeight: "bold" as const,
  },
  changelogText: {
    margin: "0",
    fontSize: "0.9em",
    color: "#555",
    lineHeight: "1.4",
  },
  cardFooter: {
    padding: "15px 20px",
    borderTop: "1px solid #eee",
    display: "flex",
    gap: "10px",
  },
  downloadBtn: {
    flex: 1,
    padding: "10px 15px",
    backgroundColor: "#2d5016",
    color: "white",
    textAlign: "center" as const,
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold" as const,
    fontSize: "0.95em",
    transition: "background-color 0.2s",
    cursor: "pointer",
  },
};
