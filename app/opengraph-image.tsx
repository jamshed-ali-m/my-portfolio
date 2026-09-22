import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jamshed Ali — Full Stack Developer & AI Automation Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#060b14",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(34,211,238,0.3), transparent 50%), radial-gradient(circle at 85% 85%, rgba(14,165,233,0.25), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #0e7490, #22d3ee)",
              color: "white",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            JA
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#9ca3af" }}>
            Jamshed Ali
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Build Better. Automate Smarter.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#9ca3af",
            marginTop: 28,
            maxWidth: 820,
          }}
        >
          Full Stack Developer &amp; AI Automation Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
