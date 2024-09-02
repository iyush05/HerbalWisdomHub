import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { SearchFilter } from "./SearchFilter"
import { SearchFilter2 } from "./SearchFilter2"
import { SearchFilter3 } from "./SearchFilter3"

const SearchCard = () => {
    return (
        <div className="bg-teal-950 pb-28">
            <div>
                <div className="text-5xl text-green-700 font-serif pl-6 pt-24">Search for Plants and Herbs</div>
                <div className="flex justify-center pt-11 pb-11">
                <div className="flex justify-center max-w-lg text-white space-x-10 w-full">
                <Input type="email" placeholder="Plants & Herbs" />
                <Button type="submit" className="bg-green-700 hover:bg-green-900">Search</Button>
                </div>
                </div>
                <div className="flex justify-center justify-evenly">
                <SearchFilter/>
                <SearchFilter2/>
                <SearchFilter3/>
                <Button className="bg-green-700 hover:bg-green-900">Filter</Button>
                </div>
            </div>
        </div>
    )
}

export default SearchCard