"use client";

import React from "react";
import "./button.css";

interface PlayButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "play" | "hojo";
  className?: string;
}

export default function PlayButton({
    children,
    disabled = false,
    onClick,
    variant = "play",
    className = ""
}: PlayButtonProps) {
    return (
        <button
            className={`button button-${variant} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}