"use client";

import { useRouter } from "next/navigation";
import Button from "../components/play-button";
import { useState } from "react";
import "../components/rules.css";
import Rules from "../components/rules";
//import Link from "next/link";

export default function HomePage() {

  const router = useRouter();

  const [lobbyButton, lobbyButtonState] =  useState(false);
  const [rulesActive, setRulesActive] = useState(false);

  return (
    <main>
      <h1 className = "big-title">EMPTY TABLET</h1>
      <h2 className = "sub-big-title">Write a word to complete a phrase - can you match with exactly one person?</h2>
      <div className="play-wrapper">
        {!lobbyButton && (
          <Button variant="play"  onClick={() => {lobbyButtonState(true);}}>
            PLAY
          </Button>
          )}

        {lobbyButton && (
          <div className = "hojo-wrapper">
          <Button variant="hojo" onClick={() => router.push("/lobby")}>HOST</Button>
          <Button variant="hojo" onClick={() => router.push("/game")}>JOIN</Button>
          </div>
        )}
      </div>


      <p className="rules-link" onClick={() => setRulesActive(true)}>
        HOW TO PLAY
      </p>

      {rulesActive && (
        <div className="rules-dark-overlay" onClick={() => setRulesActive(false)}>
          <div className="rules-box" onClick={(e) => e.stopPropagation()}>
            <Rules />
          </div> 
        </div>
      )}


      {/* <p className="rules-link">
        <Link href="/rules">Rules</Link>
      </p> */}
    </main>
  );
}