import Image from "next/image"
import { Separator } from "./ui/separator"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="text-gray-400 bg-teal-950">
            <Separator/>
            <div className="grid grid-cols-3">
                <div className="flex justify-center">
                    <Image
                    src="/assets/images/logo.png"
                    height={300}
                    width={300}
                    alt="logo"
                    className=""></Image>
                </div>
                <div className="flex  justify-evenly items-center">
                    <p>Merchandise</p> 
                    <p>Privacy</p>
                    <p>Cookies</p>
                    <p>Terms</p>
                    <p>About</p>
                </div>
                <div className="flex justify-center items-center">
                    <Image src="/assets/images/facebook.png" height={30} width={30} alt="facebook" className="pr-2"></Image>
                    <Image src="/assets/images/twitter.png" height={30} width={30} alt="twitter" className="pr-2"></Image>
                    <Image src="/assets/images/instagram.png" height={30} width={30} alt="instagram" className=""></Image>
                    
                </div>
            </div>
            <Separator className="mt-11 bg-gray-600"/>
            <div className="flex justify-center mt-11 mb-1 text-center">
            Disclaimer: The information on this website is for educational purposes only and is not a substitute for professional 
            medical advice, diagnosis, or treatment. Always consult a healthcare professional before using any medicinal plants or herbs, 
            especially if you have a medical condition or are taking medication.
            </div>

            
            <div className="pt-14 pb-14">
                <p className="flex justify-center">2024 © Herbal Wisdom Hub Labs LTD | All Rights Reserved</p>
                <p className="flex justify-center pt-1">Ajay Kumar Garg Engineering College, Ghaziabad, info@decentlancer.com</p>
            </div>
        </div>
    )
}

export default Footer