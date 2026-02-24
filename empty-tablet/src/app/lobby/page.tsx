import Link from "next/link";

export default function LobbyPage() {
  return (
    <main>
      <h1>LOBBY PAGE</h1>
      <p>This is the lobby page.</p>
      <br></br>
      <Link href="/" className="change-pages">click 2 go home</Link>
    </main>
  );
}