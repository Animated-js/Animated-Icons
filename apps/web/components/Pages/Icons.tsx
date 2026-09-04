import { IconsGrid } from "../ui/custom-ui/IconsGrid";
import { SearchComponent } from "../ui/custom-ui/SearchComp";


export function IconsPageComponent() {

    return <div>

        < section className="w-full bg-white dark:bg-black pt-20" >

            <div className="w-full flex pt-10 border-ash flex-col items-center gap-8 ">

                <div className="w-full items-center-center md:items-start 
                px-5 md:pl-10 lg:pl-15">
                    <SearchComponent />
                </div>

                <div className="w-full p-5">
                    <IconsGrid />
                </div>
            </div>

        </section >
    </div>

}