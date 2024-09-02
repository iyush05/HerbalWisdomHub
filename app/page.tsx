


import { DidYouKnow } from "@/components/DidYouKnow";
import Footer from "@/components/Footer";
import HeroCard from "@/components/HeroCard";
import NewsletterCard from "@/components/NewsletterCard";
import SearchCard from "@/components/SearchCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroCard/>
      <DidYouKnow/>
      <SearchCard/>
      <NewsletterCard/>
      <Footer/>
    </div>  
  );
}
