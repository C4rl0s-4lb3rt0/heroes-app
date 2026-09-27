import { Link } from "react-router"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb"
import { SlashIcon } from "lucide-react";

interface Breadcrumbs{
    label: string;
    to: string;
} 

interface Props {
    currentPage: string;
    breadcrumbs?: Breadcrumbs[];
}

export const CustomBreadcrumbs = ({ currentPage , breadcrumbs = [] }: Props) => {
    return (
        <Breadcrumb className="my-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink  href="/">
                        <Link to="/">
                            Home
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {breadcrumbs.map((crumb) => (
                    <div className="flex items-center">
                        <BreadcrumbItem >
                            <BreadcrumbSeparator >
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbLink >
                                <Link to={crumb.to}>
                                    {crumb.label}
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </div>
                ))}

                <BreadcrumbSeparator >
                    <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                    <BreadcrumbPage className="text-black">
                        {currentPage}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
