import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  //Frontend
  { name: "HTML/CSS", level: 95, categore: "frontend" },
  { name: "JavaScript", level: 85, categore: "frontend" },
  { name: "TypeScript", level: 85, categore: "frontend" },
  { name: "Tailwind CSS", level: 90, categore: "frontend" },
  { name: "React", level: 80, categore: "frontend" },
  { name: "Next.js", level: 75, categore: "frontend" },
  //Tools
  { name: "Git/Github", level: 95, categore: "tools" },
  { name: "Docker", level: 85, categore: "tools" },
  { name: "Figma", level: 70, categore: "tools" },
  { name: "VS Code", level: 90, categore: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.categore === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30 scroll-mt-20"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory === "backend" && filteredSkills.length === 0 ? (
            <p className="col-span-full text-center text-red-500 text-lg">
              Still learning this, will be available soon...
            </p>
          ) : (
            filteredSkills.map((skill, key) => (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
