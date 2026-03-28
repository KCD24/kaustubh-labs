import { useState } from "react"
import EnterScreen from "./components/EnterScreen"

function App() {

  const [entered, setEntered] = useState(false)

  return (
    <>
      {entered ? (
        <div
          style={{
            background: "#0f0f0f",
            minHeight: "100vh",
            color: "white",
            padding: "40px"
          }}
        >
          <button 
            onClick={() => setEntered(false)}
            style={{
              background: "transparent",
              color: "#aaa",
              border: "1px solid #333",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "20px",
              transition: "all 0.2s"
            }}
            onMouseOver={(e) => { e.target.style.color = "white"; e.target.style.borderColor = "#aaa" }}
            onMouseOut={(e) => { e.target.style.color = "#aaa"; e.target.style.borderColor = "#333" }}
          >
            ← Back to Intro
          </button>
          <h1>Kaustubh</h1>
          <p>AI • XR • Creative Technology</p>

          <h2>Projects</h2>

          <p>Projects will appear here.</p>

        </div>
      ) : (
        <EnterScreen onEnter={() => setEntered(true)} />
      )}
    </>
  )
}

export default App