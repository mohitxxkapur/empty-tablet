"use client";

import Button from "../../components/play-button";
import {useRouter} from "next/navigation";

export default function LobbyPage() {

  const router = useRouter();

  return (
    <main>
      <h1>LOBBY PAGE</h1>
      <p>This is the lobby page.</p>
      <br></br>
      <div className= "play-wrapper">
        <Button variant="play" onClick={() => router.push("/")}>home</Button>
      </div>
    </main>
  );
}





