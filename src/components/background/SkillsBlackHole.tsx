import { FaReact, FaNodeJs, FaJava } from "react-icons/fa"
import { SiJavascript, SiTypescript } from "react-icons/si"
import type { ReactNode } from "react"

type Skill = {
  icon: ReactNode
  color: string
}

const skills: Skill[] = [
  { icon: <SiJavascript />, color: "text-yellow-400" },
  { icon: <FaReact />,      color: "text-cyan-400"   },
  { icon: <SiTypescript />, color: "text-blue-400"   },
  { icon: <FaNodeJs />,     color: "text-green-400"  },
  { icon: <FaJava />,       color: "text-orange-400" },
]

export function SkillsSolarSystem() {
  const orbitRadius = 110
  const orbitDuration = 20

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto flex-shrink-0">

      {/* Sol central */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="
          w-16 h-16 md:w-24 md:h-24
          rounded-full
          bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500
          shadow-[0_0_50px_rgba(251,191,36,0.8)]
          animate-pulse
        " />
      </div>

      {/* Anel de órbita */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 border border-gray-400/20 rounded-full" />

        {/* ✅ map DENTRO do componente, angle calculado aqui */}
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 360

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: "translate(-50%, -50%)",
                animation: `orbit ${orbitDuration}s linear infinite`,
                animationDelay: `${-(angle / 360) * orbitDuration}s`,
              }}
            >
              <div
                className="text-3xl md:text-4xl"
                style={{ transform: `translate(${orbitRadius}px, 0)` }}
              >
                <div className={`
                  ${skill.color}
                  bg-gray-900/80 backdrop-blur-sm
                  rounded-full p-2 md:p-3
                  drop-shadow-2xl
                  hover:scale-110 transition-transform duration-300
                `}>
                  {skill.icon}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  )
}