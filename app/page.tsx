import CustomCursor from "./components/CustomCursor";
import GlitchText from "./components/GlitchText";
import ViewfinderFrame from "./components/ViewfinderFrame";

export default function Home() {
  const projects = [
    {
      id: "01",
      title: "NEON_GENESIS",
      category: "WEB_APP",
      description:
        "Next.js dashboard with brutalist data visualization components.",
      coords: "X:45 Y:12",
    },
    {
      id: "02",
      title: "VOID_WALKER",
      category: "THREE.JS",
      description: "Interactive 3D experience exploring liminal spaces.",
      coords: "X:88 Y:90",
    },
    {
      id: "03",
      title: "ECHO_CHAMBER",
      category: "AUDIO_VIZ",
      description: "Real-time audio reactive visualizer using WebAudio API.",
      coords: "X:12 Y:34",
    },
  ];

  return (
    <main className="min-h-screen relative p-8 md:p-12 overflow-x-hidden selection:bg-blood selection:text-white">
      <CustomCursor />

      {/* Header / Status */}
      <header className="flex justify-between items-start mb-24 relative z-10">
        <div className="flex flex-col">
          <span className="font-tech text-xs text-gray-500 tracking-[0.2em] mb-1">
            IDENT: VITOR
          </span>
          <span className="font-tech text-xs text-hazard tracking-[0.2em]">
            STATUS: ONLINE
          </span>
        </div>
        <div className="font-tech text-xs text-gray-500 tracking-[0.2em] text-right">
          SYS.VER.2.0
          <br />
          LOC: BR
        </div>
      </header>

      {/* Hero Section */}
      <section className="mb-32 relative z-10">
        <div className="relative">
          <h1 className="font-display text-[15vw] leading-[0.8] tracking-tighter mix-blend-difference text-paper">
            <GlitchText text="VITOR" />
          </h1>
          <div className="absolute top-0 right-0 md:top-[20%] md:right-[10%] max-w-xs text-right">
            <p className="font-tech text-sm md:text-base text-gray-400 leading-relaxed mb-6">
              Full-stack developer specializing in{" "}
              <span className="text-blood">visual conflict</span> and
              high-performance interfaces. Building digital experiences that
              vibrate.
            </p>
            <ViewfinderFrame
              label="ROLE"
              coords="X:00 Y:00"
              className="inline-block"
            >
              <span className="font-display text-2xl text-paper">
                CREATIVE DEV
              </span>
            </ViewfinderFrame>
          </div>
        </div>
      </section>

      {/* Portfolio Section (Horizontal Scroll) */}
      <section className="mb-32 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-[2px] bg-hazard"></span>
          <h2 className="font-display text-4xl text-paper">PROJECTS</h2>
        </div>

        {/* Scroll Container */}
        <div className="overflow-x-auto pb-12 -mx-8 px-8 md:-mx-12 md:px-12 no-scrollbar">
          <div className="flex gap-8 w-max">
            {projects.map((project) => (
              <div key={project.id} className="w-[85vw] md:w-[600px] shrink-0">
                <ViewfinderFrame
                  label={`PRJ.${project.id}`}
                  coords={project.coords}
                  className="h-full hover:bg-noir-light transition-colors duration-500"
                >
                  <div className="aspect-video bg-noir border border-gray-800 mb-6 flex items-center justify-center group overflow-hidden relative">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 bg-gray-900 group-hover:bg-gray-800 transition-colors duration-500" />
                    <span className="font-tech text-6xl text-gray-800 group-hover:text-hazard transition-colors duration-300 z-10">
                      {project.id}
                    </span>
                    {/* Scan effect on hover */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-hazard opacity-0 group-hover:opacity-50 group-hover:animate-[scan_2s_linear_infinite]" />
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <span className="label-hazard mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-display text-3xl text-paper mb-2">
                        {project.title}
                      </h3>
                      <p className="font-tech text-sm text-gray-500 max-w-sm">
                        {project.description}
                      </p>
                    </div>
                    <a
                      href="#"
                      className="font-tech text-xs text-blood hover:text-white transition-colors tracking-widest uppercase border-b border-blood pb-1"
                    >
                      Initialize &gt;
                    </a>
                  </div>
                </ViewfinderFrame>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer className="border-t border-gray-900 pt-12 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-5xl mb-8">
              INITIATE
              <br />
              CONTACT
            </h2>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-tech text-sm text-gray-400 hover:text-hazard transition-colors"
              >
                [EMAIL]
              </a>
              <a
                href="#"
                className="font-tech text-sm text-gray-400 hover:text-hazard transition-colors"
              >
                [GITHUB]
              </a>
              <a
                href="#"
                className="font-tech text-sm text-gray-400 hover:text-hazard transition-colors"
              >
                [LINKEDIN]
              </a>
            </div>
          </div>
          <div className="flex items-end justify-start md:justify-end">
            <div className="text-right">
              <p className="font-tech text-xs text-gray-600 mb-2">
                Designed by VITOR
              </p>
              <p className="font-tech text-[10px] text-gray-700">
                SYSTEM STATUS: OPTIMAL
                <br />
                LAST UPDATE: 2026.02.10
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
