import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearhcPage = () => {
    return (
        <>
            <CustomJumbotron 
                title="Superhero Search" 
                description="Discover, explore, and manage your favorite superheroes and villains"
            />

            <CustomBreadcrumbs currentPage="Buscador de Superhéroes" />


            {/* Stats Dashboard */}
            <HeroStats />

            {/* Filter and search */}
            <SearchControls />
        </>
    )
}

export default SearhcPage;

