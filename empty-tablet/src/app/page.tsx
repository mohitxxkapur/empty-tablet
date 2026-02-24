import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <p >Welcome to my site.</p> <br></br>

      <div className="pagechange-wrapper">
        <Link href = "/lobby" className="change-pages">click 4 lobby</Link>
      </div>
    </main>
  );
}