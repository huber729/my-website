import MotionDiv from "../components/motion-div";
import reactIcon from "@/public/images/react.png"
import nextjsIcon from "@/public/images/next-js.256x256.png"
import typescriptIcon from "@/public/images/typescript.png"
import javascriptIcon from "@/public/images/java-script.png"
import pythonIcon from "@/public/images/python.png"
import html5Icon from "@/public/images/html-5.png"
import tailwindcssIcon from "@/public/images/tailwind-css.256x154.png"
import nodejsIcon from "@/public/images/node-js.png"
import prismaIcon from "@/public/images/file-type-light-prisma.210x256.png"
import postgresIcon from "@/public/images/postgre.png"
import vscodeIcon from "@/public/images/visual-studio.png"
import githubActionsIcon from "@/public/images/github.png"
import excelIcon from "@/public/images/excel.png"
import Image, { StaticImageData } from "next/image";

export default function Skills() { 
    const data = [
        {
          title: "Web Development",
          skills: [
            {
              name: "React.js",
              icon: reactIcon,
            },
            {
              name: "Next.js",
              icon: nextjsIcon,
            },
            {
              name: "TypeScript",
              icon: typescriptIcon,
            },
            {
              name: "JavaScript",
              icon: javascriptIcon,
            },
            {
              name: "HTML5",
              icon: html5Icon,
            },
            {
              name: "Tailwind CSS",
              icon: tailwindcssIcon,
            },
          ],
        },
        {
          title: "Backend Development",
          skills: [
            {
              name: "Node.js",
              icon: nodejsIcon,
            },
            {
              name: "Prisma ORM",
              icon: prismaIcon,
            },
            {
              name: "PostgreSQL",
              icon: postgresIcon,
            },
          ],
        },
        {
          title: "Languages",
          skills: [
            {
              name: "TypeScript",
              icon: typescriptIcon,
            },
            {
              name: "JavaScript",
              icon: javascriptIcon,
            },
            {
              name: "Python",
              icon: pythonIcon,
            },
          ],
        },
        {
          title: "Tools & Environment",
          skills: [
            {
              name: "VS Code",
              icon: vscodeIcon,
            },
            {
              name: "GitHub Actions",
              icon: githubActionsIcon,
            },
            {
              name: "Excel",
              icon: excelIcon,
            },
          ],
        },
    ];

    return (
        <section
          id="about"
        >
            {data.map((item, index) => (
              <MotionDiv  delayOffset={0.9} key={index}>
                <div className="mb-6 md:px-2">
                  <div className="flex flex-wrap justify-center">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="flex flex-wrap justify-center">
                    {item.skills.map((skill) => (
                      <SkillCard key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>
              </MotionDiv>
            ))}
        </section>
      );
    }

    
function SkillCard({ icon, name }: { icon: StaticImageData; name: string }) {
    return (
        <div className="group rounded-xl border-none p-5 text-center shadow-none">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center">
              <Image src={icon} alt={name} priority />
            </div>
            <p>{name}</p>
          </div>
        </div>
    );
}