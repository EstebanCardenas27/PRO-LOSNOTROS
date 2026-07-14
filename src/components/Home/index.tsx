import { Hero } from "@/components/Home/Hero";
import { FeatureServices } from "@/components/Home/FeatureServices";
import { WhyChooseUs } from "@/components/Home/WhyUs";
import { Testimonials } from "@/components/Home/Testimonials";
import { CTA } from "@/components/Home/CTA";
import { Divider } from "@/components/ui/Divider";
import { Locate } from "@/components/Home/Locate";

export const Home = () => (
    <>
        <Hero/> 
        <Divider/>      
        <FeatureServices/>
        <Divider/>
        <WhyChooseUs/>
        <Divider/>
        <Locate/>
        <Divider/>
        <Testimonials/>
        <CTA/>
    </>
);