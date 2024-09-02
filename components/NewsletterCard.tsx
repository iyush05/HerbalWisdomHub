import Image from "next/image"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const NewsletterCard = () => {
    return (
        <div className="bg-hero-image h-full w-full ">
            <div className="text-6xl font-sans text-orange-600 flex justify-center pt-60 pb-4">Subscribe to our Newsletter</div>
            <div className="flex justify-center pt-36 pb-60">
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" className="border-green-900 border text-green-900 bg-green-400"/>
                <Button type="submit" className="bg-green-700 hover:bg-green-900">Subscribe</Button>
            </div>
            </div>
        </div>
    )
}

export default NewsletterCard