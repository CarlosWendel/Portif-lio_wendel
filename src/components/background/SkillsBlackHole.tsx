import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiTypescript } from "react-icons/si"
import type { ReactNode } from "react"

type Skill = {
  icon: ReactNode
  color: string
  angle: number
}

const skills: Skill[] = [
  { icon: <SiJavascript />, color: "text-yellow-400", angle: 0 },
  { icon: <FaReact />, color: "text-cyan-400", angle: 90 },
  { icon: <SiTypescript />, color: "text-blue-400", angle: 180 },
  { icon: <FaNodeJs />, color: "text-green-400", angle: 270 },
]

export function SkillsSolarSystem() {
  return (
    <div className="relative w-80 h-80 mx-auto my-20">

      {/* ☀️ SOL */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="
          w-20 h-20 rounded-full
          bg-linear-to-br from-yellow-300 via-orange-400 to-red-500
          shadow-[0_0_40px_rgba(251,191,36,0.9)]
          animate-pulse
        " />
      </div>

      {/* 🪐 Órbita */}
      <div className="absolute inset-0 animate-spin-slow">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="absolute inset-0"
            style={{ transform: `rotate(${skill.angle}deg)` }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-5xl">
              <span className={`${skill.color} drop-shadow-lg`}>
                {skill.icon}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
