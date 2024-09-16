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
import { AuthPage } from "@/components/app-auth-page";


export default function Home() {
  return (
    <div>
      <AuthPage />
      {/* <MyProfile /> */}
      {/* <ProfileOverview /> */}
      {/* <TrackComponent /> */}
    </div>
  );
}
