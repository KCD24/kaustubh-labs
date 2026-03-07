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