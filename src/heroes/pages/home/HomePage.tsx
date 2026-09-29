

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
import { useSearchParams } from "react-router"
import { getSummaryAction } from "@/heroes/actions/get-summary.action"

export const HomePage = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const activeTab = searchParams.get('tab') ?? 'all';
    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '6';

    const selectedTab = useMemo(() => {
        const validTabs = ["all", "favorites", "heroes", "villains"];
        return validTabs.includes(activeTab) ? activeTab : 'all';
    },[activeTab])

    const {data: heroesResponse} = useQuery({
        queryKey: ['heroes', { page, limit}],
        queryFn: () => getHeroesByPageAction(+page,+limit),
        staleTime: 1000 * 60 * 5 // 5 minutes
    })

    console.log({heroesResponse});

    const { data : summary } = useQuery({
        queryKey: ['summary-information'],
        queryFn: () => getSummaryAction(),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    return (
        <>
            <>
                {/* Header */}
                
                <CustomJumbotron 
                    title="@/components/custom/" 
                    description="Discover, explore, and manage your favorite superheroes and villains"
                />

                <CustomBreadcrumbs currentPage="Super Heroes" />

                {/* Stats Dashboard */}
                <HeroStats />
                {/* Tabs */}
                <Tabs value={selectedTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all" onClick={ ()=> setSearchParams((prev) => {
                            prev.set('tab', 'all')
                            return prev
                        } ) }>All Characters (16)</TabsTrigger>
                        <TabsTrigger value="favorites"  onClick={ ()=> setSearchParams((prev) => {
                            prev.set('tab', 'favorites')
                            return prev
                        } ) } className="flex items-center gap-2" >Favorites (3)</TabsTrigger>
                        <TabsTrigger value="heroes" onClick={ ()=> setSearchParams((prev) => {
                            prev.set('tab', 'heroes')
                            return prev
                        } ) }>Heroes (12)</TabsTrigger>
                        <TabsTrigger value="villains" onClick={ ()=> setSearchParams( (prev) => {
                            prev.set('tab', 'villains')
                            return prev
                        } ) }>Villains (2)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <HeroGrid  heroes={heroesResponse?.heroes || []} />                 
                    </TabsContent> 

                    <TabsContent value="favorites">
                        <HeroGrid heroes={[]} />                     
                    </TabsContent>  


                    <TabsContent value="heroes">
                        <HeroGrid heroes={[]}/>                     
                    </TabsContent>  

                    <TabsContent value="villains">
                        <HeroGrid heroes={[]}/>                    
                    </TabsContent>  

                </Tabs>


                {/* Pagination */}
                <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
            </>
        </>
    )
}