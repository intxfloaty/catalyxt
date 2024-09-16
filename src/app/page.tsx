import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import TrackComponent from "./Track";
import { ModeToggle } from "@/components/theme-preview";
import { MyProfile } from "@/components/MyProfile";


export default function Home() {
  return (
    <div>
      <MyProfile />
      {/* <ProfileOverview /> */}
      {/* <TrackComponent /> */}
    </div>
  );
}
