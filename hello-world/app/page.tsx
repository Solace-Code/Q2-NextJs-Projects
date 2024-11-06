export default function Home() {
  return (
    <div className="container">
      <div className="background-video">
        <video autoPlay muted loop className="video-background">
          <source src="world.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="header">
        <h1 className="typing-animation">Hello World</h1>
      </div>
    </div>
  );
}
