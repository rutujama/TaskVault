import { Button } from "@/components/ui/button";
import Image from "next/image";
import {ArrowRight, BarChart,Calendar,ChevronRight,Layout} from "lucide-react";

import faqs from '@/data/faqs'
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const features=[
  {
      title:"Intuitive Kanban Boards",
      description:
      "Visualze your workflow and optimize team productivity with our easy-to-use kanban boards.",
      icon:Layout,
  },
  {
      title:"Powerful Sprint Planning",
      description:
      "Plan and manage sprints effectively,ensuring your team stays focused on delivering value.",
      icon:Calendar,
  },
  {
      title:"Comprehensive Reporting",
      description:
      "Gaininsight into your team's performance with detailed,customizable reports and analytics.",
      icon:BarChart,
  },
];

export default function Home() {
  return <div className="min-h-screen">
  {/* Hero Section*/}
  <section className="container mx-auto py-20 text-center">
 <h1 className="text-6xl sm:text-7xl lg:text-8xl font:extrabold gradient-title pb-6 flex flex-col">
  Streamline Your Workflow  <br/>
  <span className="flex mx-auto gap-3 sm:gap-4 items-center">
      with{""}
      <Image
      src={"/scrumLogo.png"}
      alt="Logo"
      width={400}
      height={90}
      className="h-14 sm:h-24 w-auto object-contain"
      />
  </span>
 </h1>
 <p className="text-xl text-grey-300 mb-10 max-w-3xl mx-auto">Taskvault  is a sleek, minimalist website with an intuitive, user-friendly interface focused on seamless
navigation and engaging content. It features a responsive design that adapts perfectly across devices,
offering a smooth and interactive experience. The site prioritizes speed, security, and personalized content for every user.

</p>
<Link href="/onbording">
<Button size="lg" className="mr-4">
    Get Started <ChevronRight size={18} />
</Button>

</Link>
<Link href="#features">
<Button size="lg" Varient="outline" className="mr-4">
    Learn More <ChevronRight size={18} className="ml-1"/>
</Button>

</Link>
<section id="features " className="bg-gray-900 py-20 px-5">
            <div className="container mx-auto">
              <h3 className="text-3xl font-bold mb-12 text-center">Key Features </h3> 
              <div className="grid grid-clos-1 lg:grid-cols-3 gap-8">{features.map((feature,index) =>{
                return(
                    <Card key={index} className="bg-gray-800">
                 <CardContent className='pt6'>
                 <feature.icon className="h-12 w-12 mb-4 text-blue-300"/>
                 <h4 className="text-xl font-semibold mb-2"> {feature.title}    </h4>
                 <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                 </Card>

                );
            })
              }        
              </div> 
            </div>
        </section>
<section className="bg-gray-900 py-20 px-5"> 
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold mb-12 text-center">
                Frequently Asked Question
                </h3>
                <Accordion type="single" collapsibl className="W-full">
                    {faqs.map((faq,index)=>(
                <AccordionItem key={index} value={'item-${index}'}>
                <AccordionTrigger>{faqs.question}</AccordionTrigger>
                <AccordionContent>
                {faqs.answer}
               </AccordionContent>
               </AccordionItem>))}
               </Accordion>


            </div>
        </section>
</section>
<section className=" py-20 text-center px-5 "> 
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold mb-5 text-center">
              Ready to Transform Your Workflow
                </h3>
                <p className="text-xl-mb-12">Join our team for new and better experiment.</p>
                <Link href='onboarding'>
              <Button size='lg' className="animate-bounce"> Start For free <ArrowRight className="ml-2 h-5 w-5"/>
                </Button>  
                </Link>
            </div>
        </section>
    </div>;
}

