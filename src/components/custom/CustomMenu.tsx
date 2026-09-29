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
                    <NavigationMenuLink
                        render={<Link to="/" />}
                        className={cn(isActive("/") && 'bg-slate-200', 'p-2 rounded-md')}
                    >
                        Inicio
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* { Search } */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        render={<Link to="/search" />}
                        className={cn(isActive("/search") && 'bg-slate-200', 'p-2 rounded-md')}
                    >
                        Buscar Superhéroes
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}
