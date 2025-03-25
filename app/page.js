import { Button } from "@/components/ui/button";
import Image from "next/image";
import {ChevronRight} from "lucide-react";
import Link from "next/link";

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
</section>
</div>
}
