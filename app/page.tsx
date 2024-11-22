import Image from "next/image";

import { ModeToggle } from "@/components/dark-mode-switcher";
import { HeroParallax } from "@/components/heros/hero-paralax";

const pictures: {
    title: string;
    link?: string | undefined;
    image: string;
}[] = [{
    title: "Cowboy Time",
    image: "/cowboy%20time.png"
}, {
    title: "Catfish sticker",
    image: "/catfish%20sticker%202.png"
}, {
    title: "Cuddy",
    image: "/cuddy.png"
}, {
    title: "hilson bleh bleh bleh",
    image: "/hilson%20bleh%20bleh%20bleh.png"
}, {
    title: "house and wilson again",
    image: "/house%20and%20wilson%20again.png"
}, {
    title: "house doodles",
    image: "/house%20doodles.png"
},{
    title: "house in tub",
    image: "/house%20in%20tub.png"
}, {
    title: "house white and freeman",
    image: "/house%20white%20freeman.png"
}, {
    title: "Placeholder 9",
    image: "/placeholder3.jpeg"
},{
    title: "Placeholder 10",
    image: "/placeholder1.png"
}, {
    title: "Placeholder 11",
    image: "/placeholder2.png"
}, {
    title: "Placeholder 12",
    image: "/placeholder3.jpeg"
},{
    title: "Placeholder 13",
    image: "/placeholder1.png"
}, {
    title: "Placeholder 14",
    image: "/placeholder2.png"
}, {
    title: "Placeholder 15",
    image: "/placeholder3.jpeg"
}]

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faXTwitter, faTumblr, faSteam } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';

export default function Home() {
    return (
        <div className="">
        <HeroParallax products={pictures} /> 
        <section className='my-6 lg:my-12 px-6 py-6 lg:px-12 lg:py-12 bg-neutral-200 dark:bg-neutral-900' id="social-media">
        <div className="lg:grid-cols-4 lg:grid ">
        <div className="col-start-2 col-span-2 justify-items-center grid grid-cols-1 gap-y-2 md:grid-cols-5">
        <Link href="https://www.instagram.com/wprostvii/" className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        <p>wprostvii</p>
        </Link>
        <Link href="https://x.com/wprost_VII" className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
        <p>wprost VII</p>
        </Link>
        <Link href="https://www.tumblr.com/wprostvii" className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faTumblr} className="text-2xl" />
        <p>wprostvii</p>
        </Link>
        <Link href="https://discord.gg/" className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faDiscord} className="text-2xl" />
        <p>wprostvii</p>
        </Link>
        <Link href="https://steamcommunity.com/id/wprostvii" className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faSteam} className="text-2xl" />
            <p>Cement Mix</p>
        </Link>
        </div>
        </div>
        </section>
        <section id='quote'>
            <div className="text-center font-serif text-5xl lg:text-7xl px-6 py-6 lg:px-12 lg:py-12">
               <blockquote cite="https://wprostvii.neocities.org/">
                &quot;The things you own, end up owning you.&quot;<br/> <span className='text-2xl text-gray-200 dark:text-gray-600'>1999 Film Fight Club</span>
                </blockquote>
            </div>
        </section>

        </div>
    );
}
