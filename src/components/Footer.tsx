export function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ maxWidth: "64rem" }}>
        <div
          className="flex justify-between items-center gap-8"
          style={{ flexWrap: "wrap" }}
        >
          <div className="text-center">
            <h3
              style={{
                fontSize: "1.5rem",
                color: "white",
                marginBottom: "0.5rem",
              }}
            >
              Комерсиална фотография 1.0
            </h3>
            <p style={{ color: "#666" }}>Avenix Studio</p>
          </div>

          <div className="flex gap-8" style={{ color: "#666" }}>
            <a
              href="#"
              style={{
                color: "#666",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
            >
              Instagram
            </a>
            <a
              href="#"
              style={{
                color: "#666",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
            >
              Behance
            </a>
            <a
              href="#"
              style={{
                color: "#666",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid #333",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#666", fontSize: "0.875rem" }}>
            © 2024 Avenix Studio. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}
