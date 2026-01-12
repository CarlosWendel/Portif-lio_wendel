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
      
      {/* 🌞 Sol Central */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="
          w-24 h-24 rounded-full
          bg-linear-to-br from-yellow-300 via-orange-400 to-red-500
          shadow-[0_0_50px_rgba(251,191,36,0.8)]
          animate-pulse
        " />
      </div>

     
      <div className="absolute inset-0">
        
        <div className="absolute inset-0 border border-gray-400/20 rounded-full" />
        
       
        {skills.map((skill, index) => {
          const orbitRadius = 120
          const orbitDuration = 20
          
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%)`,
                animation: `orbit ${orbitDuration}s linear infinite`,
                animationDelay: `${-(skill.angle / 360) * orbitDuration}s`,
              }}
            >
              <div
                className="text-4xl"
                style={{
                  transform: `translate(${orbitRadius}px, 0)`,
                }}
              >
                <div className={`
                  ${skill.color}
                  bg-gray-900/80 backdrop-blur-sm
                  rounded-full p-3
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
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}