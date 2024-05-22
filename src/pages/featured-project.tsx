import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Headline } from "@/components/ui/Headline";
import { Link } from "@/components/ui/Link";
import { Paragraph } from "@/components/ui/Paragraph";
import { Section } from "@/components/ui/Section";
import { Side } from "@/components/ui/Side";
import { Image } from "@/components/ui/Image";

import NextImage from "next/image";

export default function FeaturedProject() {
    return (
        <>
            <FeaturedProjectSection />
            <HeroImageSection />
            <CommunityTestimonialsSection />
        </>
    );
}

function FeaturedProjectSection() {
    return (
        <Section>
            <Side className="flex-col gap-6 basis-full sm:basis-2/3 md:basis-1/2">
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
                            <Link isExternal href="https://twitter.com/csgoinspect">
                                Twitter/X
                            </Link>
                        </li>
                    </ul>
                </div>
            </Side>
        </Section>
    );
}

function HeroImageSection() {
    return (
        <div className="flex items-center justify-start px-[5%] w-full bg-cover bg-center bg-no-repeat bg-[url('/hero.jpg')] h-[250px] md:h-[300px]">
            <Card>
                <Heading>CSInspect</Heading>
            </Card>
        </div>
    );
}

function CommunityTestimonialsSection() {
    return (
        <Section className="flex-col gap-9 !items-start">
            <div>
                <Headline>From Real Users</Headline>
                <Heading>Community Testimonials</Heading>
            </div>
            <div className="flex flex-col gap-12 w-full">
                <div className="flex flex-col md:flex-row gap-12">
                    <Testimonial
                        name="cody"
                        at="devlooskie"
                        tweet="https://twitter.com/devlooskie/status/1505669861057478656"
                        messages={[
                            "Look at this helpful Twitter bot @csgoinspect, @Hexiiro made it :), it basically takes a steam inspect URL and replies to the tweet with an actual picture.",
                            "look, steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S76561198942370692A23207767825D12163770052928159047",
                        ]}
                    />
                    <Testimonial
                        name="chase"
                        at="funnysmartguy12"
                        tweet="https://twitter.com/funnysmartguy12/status/1585712774575190017"
                        messages={[
                            "does anybody want to buy my knife im selling it for like 1.2k",
                            "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S76561198810745469A27470199885D5048010500379876447",
                        ]}
                        afterMessage="oh thank you"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-12">
                    <Testimonial
                        name="時給290円"
                        at="G2CounterStrike"
                        tweet="https://twitter.com/G2CounterStrike/status/1787546906144690620"
                        messages={[
                            "フレンドのスキンはゲーム内で見れるけどTwitterにインスペクトリンク貼り付ければbotが高画質画像貼ってくれるの便利では",
                            "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S76561198841123531A36926831416D460077585735394781",
                        ]}
                    />
                    <Testimonial
                        name="LasFar"
                        at="OhLasFar"
                        tweet="https://twitter.com/OhLasFar/status/1732583559880151276"
                        messages={[
                            "Steam Inspect: steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S76561198285678109A34845570383D3198231532510994976",
                            "Server Inspect: !gen 16 1228 661 0.01 0 0 5951 0 5259 0 0 0",
                        ]}
                        afterMessage="This bot is amazing wtf ?!"
                    />
                </div>
            </div>
            <Link isExternal href="https://twitter.com/csgoinspect/with_replies">
                View More on Twitter/X
            </Link>
        </Section>
    );
}

interface TestimonialProps {
    name: string;
    at: string;
    tweet: string;
    messages: string[];
    afterMessage?: string;
}
function Testimonial({ name, at, tweet, messages, afterMessage }: TestimonialProps) {
    return (
        <Card className="flex-col gap-6 w-full md:w-1/2">
            <div className="flex flex-row gap-3">
                <NextImage
                    src={`/avatars/${at.toLowerCase()}.jpg`}
                    alt={`The profile picture of ${name}`}
                    width={52}
                    height={52}
                    className="aspect-square rounded-full border border-solid border-slate-900/10"
                />
                <div className="h-full flex flex-col justify-between">
                    <span className="text-primary-900 font-sans font-bold text-xl">{name}</span>
                    <p className="text-slate-800/75 font-mono font-semibold text-base">@{at}</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 justify-between h-full">
                {messages.map((message) => (
                    <Paragraph key={message} className="max-w-full break-all">
                        {message}
                    </Paragraph>
                ))}
                <div className="flex flex-col gap-0.5 text-right">
                    <Image
                        src={`/screenshots/${at.toLowerCase()}.jpg`}
                        alt={"cs2 screenshot"}
                        className="p-2 rounded-lg h-auto w-full [&>img]:rounded-md"
                    />
                    <p className="text-xs font-mono font-bold text-slate-900/75">
                        Source:{" "}
                        <span className="font-semibold text-slate-800/75">
                            CSInspect, sponsored by{" "}
                            <Link
                                isExternal
                                href="https://screenshot.skinport.com/"
                                className="inline-block text-xs"
                            >
                                Skinport
                            </Link>
                        </span>
                    </p>
                </div>
                {afterMessage ? <Paragraph className="break-all">{afterMessage}</Paragraph> : null}
            </div>
            <Link isExternal href={tweet}>
                View Post
            </Link>
        </Card>
    );
}
