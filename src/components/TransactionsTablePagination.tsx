"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { formUrlQuery } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const TransactionsTablePagination = ({ page, totalPages }: PaginationProps) => {
    const router = useRouter();
    const searchParams = useSearchParams()!;

    const handleNavigation = (type: "prev" | "next") => {
        const pageNumber = type === "prev" ? page - 1 : page + 1;

        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "page",
            value: pageNumber.toString(),
        });

        router.push(newUrl, { scroll: false });
    };

    return (
        <div className="flex justify-between gap-3">
            <Button
                size="lg"
                variant="ghost"
                className="p-0 hover:bg-transparent hover:text-green-500"
                onClick={() => handleNavigation("prev")}
                disabled={Number(page) <= 1}
            >
                <ArrowLeft className="mr-2" />
                Prev
            </Button>
            <p className="text-14 flex items-center px-2">
                {page} / {totalPages}
            </p>
            <Button
                size="lg"
                variant="ghost"
                className="p-0 hover:bg-transparent hover:text-green-500"
                onClick={() => handleNavigation("next")}
                disabled={Number(page) >= totalPages}
            >
                Next
                <ArrowRight className="ml-2" />
            </Button>
        </div>
    );
};