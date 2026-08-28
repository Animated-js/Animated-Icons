import { Button } from "@/components/ui/button";


export function Landing() {
    return <div className=" min-h-screen flex justify-center items-center ">

        {/* Hero section */}
        <section className="flex items-center flex-col gap-4" >

            <h1 className="text-5xl md:text-8xl lg:text-9xl tracking-normal">
                Animated Icons
            </h1>

            <div className="space-x-8" >
                <Button className="border-taupe-50">
                    Explore Icons
                </Button>
                <Button className="border-accent">
                    Prompt to Icon
                </Button>
            </div>
        </section >



    </div >
}