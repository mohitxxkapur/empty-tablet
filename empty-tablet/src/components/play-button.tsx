"use client";

import React from "react";
import "./button.css";

interface PlayButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "play" | "hojo";
}

export default function PlayButton({
    children,
    disabled = false,
    onClick,
    variant = "play",
}: PlayButtonProps) {
    return (
        <button
            className={`button button-${variant}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}