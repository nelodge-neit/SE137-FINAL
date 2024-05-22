import { Heading } from "@/components/ui/Heading";
import { Headline } from "@/components/ui/Headline";
import { Paragraph } from "@/components/ui/Paragraph";
import { Section } from "@/components/ui/Section";
import { Image } from "@/components/ui/Image";
import { Side } from "@/components/ui/Side";
import { Link } from "@/components/ui/Link";
import { Card } from "@/components/ui/Card";

export default function Home() {
    return (
        <>
            <AboutSection />
            <HeroImageSection />
            <ProjectAndContactsSection />
        </>
    );
}

function AboutSection() {
    return (
        <Section className="justify-between gap-12 flex-col md:flex-row">
            <Side className="flex-col gap-6">
                <div>
                    <Headline>Inspired Developer</Headline>
                    <Heading>About Me</Heading>
                </div>
                <Paragraph>
                    Hey, I&rsquo;m Nathan Lodge! An 18-year-old software engineer based in the
                    United States, I&rsquo;ve been a passionate programmer for over 5 years now,
                    primarily specializing in Python and TypeScript. My interests include problem-solving, modern technology, and open source
                    and I aim to build beautiful and efficient software.
                </Paragraph>
            </Side>
            <Side className="justify-start md:justify-end">
                <Image
                    isPriority
                    src="/selfie.jpg"
                    alt="a reflection of me (Nathan Lodge) holding up a peace sign in front of a laptop with Visual Studio Code open"
                    className="aspect-square size-[250px] md:size-[300px]"
                />
            </Side>
        </Section>
    );
}

function HeroImageSection() {
    return (
        <div className="flex items-center justify-start px-[5%] w-full bg-cover bg-center bg-no-repeat bg-[url('/hero.jpg')] h-[250px] md:h-[300px]">
            <Card className="flex-col gap-3 bg-opacity-75">
                <Heading>CSInspect</Heading>
                <Paragraph>
                    a Twitter/X bot that replies to CS2 (video game) inspect links with a generated
                    screenshot.
                </Paragraph>
            </Card>
        </div>
    );
}

function ProjectAndContactsSection() {
    return (
        <Section className="justify-between gap-12 flex-col md:flex-row">
            <Side className="flex-col gap-6">
                <div>
                    <Headline>Public & Active</Headline>
                    <Heading>Featured Project</Heading>
                </div>
                <div className="flex flex-col gap-2">
                    <Paragraph>
                        CSInspect, a Twitter/X bot that replies to CS2 (video game) inspect links
                        with a generated screenshot.
                    </Paragraph>
                    <ul className="flex flex-row gap-x-4 gap-y-1 flex-wrap">
                        <li>
                            <Link isExternal href="https:/github.com/hexiro/csinspect">
                                Repository
                            </Link>
                        </li>
                        <li>
                            <Link isExternal href="https:/twitter.com/csgoinspect">
                                Twitter/X
                            </Link>
                        </li>
                    </ul>
                </div>
            </Side>
            <Side className="flex-col gap-6 justify-start md:justify-end">
                <div>
                    <Headline>Find Me Online</Headline>
                    <Heading>Repos & Contacts</Heading>
                </div>
                <ul className="flex flex-col gap-1">
                    <li>
                        <Link isExternal href="https://github.com/nelodge-neit/SE137">
                            Class Repository
                        </Link>
                    </li>
                    <li>
                        <Link isExternal href="https://github.com/nelodge-neit/SE137-FINAL">
                            Final Project Repository
                        </Link>
                    </li>
                    <li>
                        <Link isExternal href="https://www.linkedin.com/in/nathan-lodge">
                            LinkedIn
                        </Link>
                    </li>
                    <li>
                        <Link isExternal href="https://twitter.com/hexiiro">
                            Twitter/X
                        </Link>
                    </li>
                </ul>
            </Side>
        </Section>
    );
}
