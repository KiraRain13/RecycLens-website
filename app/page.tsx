"use client";

import { useEffect, useState } from "react";
import ReleaseCard from "@/components/ReleaseCard";

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

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>♻️ RecycLens</h1>
        <p style={styles.subtitle}>
          Download the latest version of RecycLens
        </p>
      </header>

      <main style={styles.main}>
        {loading ? (
          <p style={styles.loading}>Loading releases...</p>
        ) : releases.length > 0 ? (
          <div style={styles.grid}>
            {releases.map((release) => (
              <ReleaseCard key={release.version} release={release} />
            ))}
          </div>
        ) : (
          <p style={styles.empty}>No releases available yet.</p>
        )}
      </main>

      <footer style={styles.footer}>
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

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#2d5016",
    color: "white",
    padding: "40px 20px",
    textAlign: "center" as const,
  },
  title: {
    margin: "0 0 10px 0",
    fontSize: "2.5em",
  },
  subtitle: {
    margin: "0",
    fontSize: "1.1em",
    opacity: 0.9,
  },
  main: {
    flex: 1,
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  loading: {
    textAlign: "center" as const,
    fontSize: "1.1em",
    color: "#666",
  },
  empty: {
    textAlign: "center" as const,
    fontSize: "1.1em",
    color: "#999",
  },
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center" as const,
    padding: "20px",
    marginTop: "40px",
  },
};
