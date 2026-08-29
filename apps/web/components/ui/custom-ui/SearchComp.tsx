'use client'

import { SearchIcon } from "lucide-react"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { useState } from "react"

export function SearchComponent() {
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <div className="flex w-full md:w-1/2 lg:w-1/3 flex-col gap-6">
            <InputGroup className="rounded-none border-ash">
                <InputGroupInput placeholder="Search..."
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }} />
                <InputGroupAddon>
                    <SearchIcon />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                    {
                        0 === searchQuery.length ?
                            <>
                                <Kbd>⌘</Kbd>
                                <Kbd>K</Kbd>
                            </>
                            :
                            <Kbd data-icon="inline-end" className="translate-x-0.5">
                                ⏎
                            </Kbd>
                    }
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}
