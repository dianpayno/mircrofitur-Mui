import progres from "../assets/progres.svg"

const OnProgres = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
    }}>
        <img  style={{
            width:"300px",
            height:"300px",
        }}
        src={progres} alt="loading" />
        <h1>Still working on it :)</h1>

    </div>
  )
}

export default OnProgres