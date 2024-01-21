import React from "react"

export default function Home(){
    return (
        <main className="relative">
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img className="rounded w-35 h-44 lg:w-64 mr-8" alt ="pfp" src="images/pfp.png"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-black mb-4">Hey I'm{" "} <span className="text-green-100">Amin Saber</span>!</h1>

                        <div className="prose lg:prose-xl text-white">
                            Welcome to my website. You can explore using the top bar to see a summary of my Resume and some Projects I have worked on over the years. 
                            I am  a fourth year Software Engineering student at the University of Ottawa. I've always had a passion for software since my high-school 
                            coding classes. I am an avid learner and always seeking new opportunities to deepen my knowledge and strengthen my skills as a software engineer.
                        </div>
                    </div>
                    
                </section>
            </div>
            
        </main>
    );
}