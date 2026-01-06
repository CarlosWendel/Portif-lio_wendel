import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useCallback, useMemo } from "react";

interface ParticlesBackgroundProps {
  id?: string;
}

export function ParticlesBackground({ id }: ParticlesBackgroundProps) {
  const options = useMemo(() => {
    return {
      background: {
        color: "#020617",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: false, 
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 120,
            duration: 0.4,
          },
        },
      },
      particles: {
        number: {
          value: 70,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#7dd3fc",
        },
        links: {
          enable: true,
          color: "#6366f1",
          distance: 160,
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.3, 
        },
        opacity: {
          value: { min: 0.2, max: 0.5 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return <Particles id={id} init={particlesInit} options={options} />;
}
