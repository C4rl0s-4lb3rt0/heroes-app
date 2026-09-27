import { cn } from "cn";
import { NavigationMenu , NavigationMenuList, NavigationMenuItem , NavigationMenuLink} from "../ui/navigation-menu"
import { Link, useLocation } from "react-router"

export const CustomMenu = () => {

    const { pathname } = useLocation();

    const isActive = (path: string) => {
        return pathname === path;
    }

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* { Home } */}
                <NavigationMenuItem>
                    <NavigationMenuLink  className={cn(isActive("/") && 'bg-slate-200', 'p-2 rounded-md')} >
                        <Link to ="/" > Inicio </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* { Search } */}
                <NavigationMenuItem>
                    <NavigationMenuLink className={cn(isActive("/search") && 'bg-slate-200', 'p-2 rounded-md')} >
                        <Link to ="/search" > Buscar Superhéroes </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}
