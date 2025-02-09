import "./App.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, useRef, useState } from "react";

import { MainPage } from "./pages/MainPage";

export const App = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const marioRef = useRef<HTMLDivElement>(null);
  const isJumping = useRef(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Spawn obstacles
  useEffect(() => {
    if (gameOver) return;

    const spawnObstacle = () => {
      const obstacle = document.createElement("div");
      obstacle.classList.add("obstacle");
      document.body.appendChild(obstacle);

      // Remove obstacle after animation
      obstacle.addEventListener("animationend", () => {
        obstacle.remove();
        setScore((prev) => prev + 1);
      });
    };

    const spawnInterval = setInterval(() => {
      spawnObstacle();
    }, 2000); // Adjust timing as needed

    return () => clearInterval(spawnInterval);
  }, [gameOver]);

  // Collision detection
  useEffect(() => {
    if (gameOver) return;

    const checkCollision = () => {
      const mario = marioRef.current?.getBoundingClientRect();
      const obstacles = document.querySelectorAll(".obstacle");

      obstacles.forEach((obstacle) => {
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
          mario &&
          mario.left < obstacleRect.right &&
          mario.right > obstacleRect.left &&
          mario.top < obstacleRect.bottom &&
          mario.bottom > obstacleRect.top
        ) {
          setGameOver(true);
        }
      });
    };

    const gameLoop = setInterval(checkCollision, 10);
    return () => clearInterval(gameLoop);
  }, [gameOver]);

  // Jump handler
  useEffect(() => {
    const preventSpaceScroll = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space" && !gameOver) {
        event.preventDefault();

        if (!isJumping.current && marioRef.current) {
          isJumping.current = true;
          marioRef.current.classList.add("jump");

          setTimeout(() => {
            marioRef.current?.classList.remove("jump");
            isJumping.current = false;
          }, 500);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", preventSpaceScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", preventSpaceScroll);
    };
  }, [gameOver]);

  return (
    <>
      <div className="background" ref={backgroundRef}></div>
      <div className="mario" ref={marioRef}></div>
      {gameOver && (
        <div className="game-over">
          Game Over! Score: {score}
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      )}
      <Analytics />
      <SpeedInsights />
      <MainPage />
    </>
  );
};
