import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Headline } from "@/components/ui/Headline";
import { Link } from "@/components/ui/Link";
import { Paragraph } from "@/components/ui/Paragraph";
import { Section } from "@/components/ui/Section";
import { Side } from "@/components/ui/Side";
import { Image } from "@/components/ui/Image";

export default function ClassProjects() {
    return <ClassProjectsSection />;
}

function ClassProjectsSection() {
    return (
        <Section className="flex-col gap-8 !items-start">
            <Side className="flex-col gap-6 w-1/2">
                <div>
                    <Headline>For SE137 CSS</Headline>
                    <Heading>Class Projects</Heading>
                </div>
                <div className="flex flex-col gap-2">
                    <Paragraph>
                        Assignments for weeks 1-7 of SE137, a class on CSS and web development.
                    </Paragraph>
                    <Link isExternal href="https:/github.com/hexiro/csinspect">
                        Repository
                    </Link>
                </div>
            </Side>
            <ClassProjectsGrid />
        </Section>
    );
}

interface ClassProjectProps {
    week: number;
    assignment: string;
    link: string;
    date: Date;
}

const CLASS_PROJECTS = [
    {
        week: 1,
        assignment: "Bio",
        link: "https://nelodge-se137.netlify.app/week1/bio/",
        date: new Date("2024-04-02T00:02:55.000Z"),
    },
    {
        week: 2,
        assignment: "Bio",
        link: "https://nelodge-se137.netlify.app/week2/bio/",
        date: new Date("2024-04-09T00:02:55.000Z"),
    },
    {
        week: 3,
        assignment: "Bio",
        link: "https://nelodge-se137.netlify.app/week3/bio/",
        date: new Date("2024-04-16T00:02:55.000Z"),
    },
    {
        week: 4,
        assignment: "Friday the 13th",
        link: "https://nelodge-se137.netlify.app/week4/f13/",
        date: new Date("2024-04-30T00:02:55.000Z"),
    },
    {
        week: 6,
        assignment: "VSC",
        link: "https://nelodge-se137.netlify.app/week6/vsc/",
        date: new Date("2024-05-07T00:02:55.000Z"),
    },
    {
        week: 7,
        assignment: "Stats",
        link: "https://nelodge-se137.netlify.app/week7/stats/",
        date: new Date("2024-05-14T00:02:55.000Z"),
    },
] satisfies ClassProjectProps[];

function ClassProjectsGrid() {
    return (
        <div className="grid gap-6 w-full grid-cols-2 md:grid-cols-3">
            {CLASS_PROJECTS.map((project) => (
                <ClassProject key={project.week} {...project} />
            ))}
        </div>
    );
}

function ClassProject({ week, assignment, link, date }: ClassProjectProps) {
    return (
        <Card className="flex-col gap-4 w-full">
            <div className="flex flex-col gap-1">
                <span className="text-primary-900 font-sans font-bold text-xl">
                    Week {week} | {assignment}
                </span>
                <p className="text-slate-800/75 font-mono font-semibold text-base">
                    {date.toLocaleDateString()}
                </p>
            </div>
            <ul className="flex flex-row gap-x-4 gap-y-1 flex-wrap">
                <li>
                    <Link isExternal href="https://github.com/hexiro/se137">
                        Repository
                    </Link>
                </li>
                <li>
                    <Link isExternal href={link}>
                        View
                    </Link>
                </li>
            </ul>
            <Image
                src={`/class-projects/week${week}.png`}
                alt="week page screenshot"
                className="p-1.5 rounded-lg h-auto w-full [&>img]:rounded-[4px]"
            />
        </Card>
    );
}
