import "./App.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, useRef, useState } from "react";

import { MainPage } from "./pages/MainPage";

type GameState = "not_started" | "started" | "game_over";

const useObstacleSpawner = (
  gameState: GameState,
  setScore: (cb: (prev: number) => number) => void
) => {
  useEffect(() => {
    if (gameState !== "started") return;

    const controller = new AbortController();
    const signal = controller.signal;

    const spawnObstacle = () => {
      const obstacle = document.createElement("div");
      obstacle.classList.add("obstacle");
      document.body.appendChild(obstacle);

      obstacle.addEventListener("animationend", () => {
        obstacle.remove();
        if (gameState === "started") {
          setScore((prev) => prev + 1);
        }
      });

      const randomBigInterval = Math.floor(Math.random() * 2000) + 1000;
      const randomSmallInterval = Math.floor(Math.random() * 100) + 30;
      const randomInterval =
        Math.random() < 0.7 ? randomBigInterval : randomSmallInterval;
      console.log("🚀 / spawnObstacle / randomInterval:", randomInterval);

      const timeoutPromise = new Promise((resolve) => {
        setTimeout(resolve, randomInterval);
      });

      timeoutPromise
        .then(() => {
          if (!signal.aborted) {
            spawnObstacle();
          }
        })
        .catch(() => {});
    };

    spawnObstacle();

    return () => {
      controller.abort();
      document
        .querySelectorAll(".obstacle")
        .forEach((obstacle) => obstacle.remove());
    };
  }, [gameState, setScore]);
};

const useCollisionDetection = (
  marioRef: React.RefObject<HTMLDivElement>,
  gameState: GameState,
  setGameState: (state: GameState) => void
) => {
  useEffect(() => {
    if (gameState !== "started") return;

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
          setGameState("game_over");
        }
      });
    };

    const gameLoop = setInterval(checkCollision, 10);
    return () => clearInterval(gameLoop);
  }, [gameState, marioRef, setGameState]);
};

const useJumpHandler = (
  marioRef: React.RefObject<HTMLDivElement>,
  gameState: GameState,
  setGameState: (state: GameState) => void
) => {
  const isJumping = useRef(false);

  useEffect(() => {
    const preventSpaceScroll = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();

        if (gameState === "not_started") {
          setGameState("started");
          return;
        }

        if (gameState === "started" && !isJumping.current && marioRef.current) {
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
  }, [gameState, marioRef, setGameState]);

  return isJumping;
};

export const App = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const marioRef = useRef<HTMLDivElement>(null);
  const [gameState, setGameState] = useState<GameState>("not_started");
  const [score, setScore] = useState(0);

  useJumpHandler(marioRef, gameState, setGameState);
  useObstacleSpawner(gameState, setScore);
  useCollisionDetection(marioRef, gameState, setGameState);

  return (
    <>
      <div className="background" ref={backgroundRef}></div>
      <div className="mario" ref={marioRef}></div>
      {gameState === "not_started" ? (
        <div className="game-start">Press SPACE to start!</div>
      ) : (
        <div>Score: {score}</div>
      )}
      {gameState === "game_over" && (
        <div className="game-over">
          Game Over! Score: {score}
          <button
            onClick={() => {
              setGameState("not_started");
              setScore(0);
            }}
          >
            Close
          </button>
        </div>
      )}
      <Analytics />
      <SpeedInsights />
      <MainPage />
    </>
  );
};
