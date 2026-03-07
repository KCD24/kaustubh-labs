import { useEffect } from "react"
import FaultyTerminal from "./FaultyTerminal"
import ASCIIText from "./ASCIIText"

function EnterScreen({ onEnter }) {
    useEffect(() => {
  const handleKey = (e) => {
    if (e.key === "Enter") {
      onEnter()
    }
  }

  window.addEventListener("keydown", handleKey)

  return () => {
    window.removeEventListener("keydown", handleKey)
  }
}, [onEnter])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "black"
      }}
    >
    
    <style>
    {`
      @keyframes pulse {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.5; }
       }
     `}
    </style>
      {/* Terminal background */}
      <div
        style={{
          position: "absolute",
          inset: 0
        }}
      >
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#A7EF9E"
          mouseReact
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={0.6}
        />
      </div>

      {/* ASCII Hey text */}
      <div
        onClick={onEnter}
        onMouseEnter={() => console.log("hover")}
        style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            cursor: "pointer",
            textAlign: "center",
            transition: "transform 0.3s"
        }}
    
      >

        <ASCIIText
          text="Hey!"
          textFontSize={2000}
          asciiFontSize={4}
          enableWaves
        />
     
        <p
  style={{
    color: "#A7EF9E",
    fontFamily: "monospace",
    marginTop: "20px",
    fontSize: "18px",
    letterSpacing: "2px",
    opacity: 0.9,
    textShadow: "0 0 8px #00ff88",
    animation: "pulse 2s infinite"
  }}
>
  CLICK OR PRESS ENTER_
</p>

      </div>

    </div>
  )
}

export default EnterScreen