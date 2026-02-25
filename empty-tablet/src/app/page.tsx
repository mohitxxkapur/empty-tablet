"use client";

import Router from "next/navigation";
import Button from "../components/play-button";

export default function HomePage() {

  const router = Router.useRouter();

  return (
    <main>
      <h1>Home Page</h1>
      <p >Welcome to my site.</p> <br></br>
        <div className="play-wrapper">
          <Button variant="play"  onClick={() => router.push("/lobby")}>
            PLAY
          </Button>
        </div>

      <h1>
        <div className="play-wrapper nomargin">
            <Button variant = "play" onClick={() => router.push("/game")}>game</Button>
        </div>
      </h1>
    </main>
  );
}