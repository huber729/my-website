import socialWeb from "@/public/images/Screenshot 2024-01-31 171934.png"
import Image from "next/image"
import MotionDiv from "../components/motion-div"
import Link from "next/link"

export default function Projects() {
    return (
        <section
            id="Projects"
        >
            <div className="space-y-8">
                <MotionDiv delayOffset={0.9}>
                <h2 className="text-center">My Projects</h2>
                </MotionDiv>
                <MotionDiv delayOffset={1.1}>
                <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:flex-wrap space-x-0 md:space-x-12 m-4 md:space-y-0">
                    <div className="animate-border inline-block rounded-md bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1 w-64 flex flex-col items-center">
                        <h2>Post Website</h2>
                        <div className="h-50 w-50 mb-4 rounded-md">
                            <Image src={socialWeb} alt="ReactIcaon"/>
                        </div>
                        <span className="h-50 block rounded-md bg-white px-5 py-3 font-bold text-black" style={{height:"280px"}}>
                            This project is a mock social app that allows users to view creator posts and also create their own. Users can navigate different pages to view profiles and use filters to display posts in a variety of ways.
                            <br/>
                            <br/>
                            <Link href={"https://socialworldapp.vercel.app/"}><b>Link</b></Link>
                        </span>
                    </div>
                    <div className="animate-border inline-block rounded-md bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1 w-64 flex flex-col items-center">
                        <h2>Post Website</h2>
                        <div className="h-50 w-50 mb-4 rounded-md">
                            <Image src={socialWeb} alt="ReactIcaon"/>
                        </div>
                        <span className="block rounded-md bg-white px-5 py-3 font-bold text-black" style={{height:"280px"}}>More Projects coming soon...</span>
                    </div>
                </div>
                </MotionDiv>
            </div>
        </section>
    )
}