import { SKILLS } from "../constants";

const Skills = () => {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl font-bold">Skills</h2>
      <div className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30 ">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className={`py-6 flex items-center ${index!==SKILLS.length - 1 ? "border-b border-stone-50/30" : ""}`}>
            <div className="flex items-center">
              {skill.icon}
              <h3 className="px-6 text-lg lg:text-2xl">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
