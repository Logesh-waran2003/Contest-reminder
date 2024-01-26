import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/toggle-mode";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className=" justify-center py-5">
      <nav className="flex justify-between p-3 bg-slate-500 rounded-md items-center">
        <p className=" text-2xl text-secondary font-bold">Contest-Reminder</p>
        {/* menubar */}
        <div className="flex justify-center">
          <Link
            href={"/about"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Contests
          </Link>
          <Link
            href={"/about"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Job Postings
          </Link>
          <Link
            href={"/about"}
            className={buttonVariants({ variant: "ghost" })}
          >
            <Sparkles />
            Contribute
          </Link>
          <Link
            href={"/about"}
            className={buttonVariants({ variant: "ghost" })}
          >
            About
          </Link>
        </div>
        <div className=" flex flex-row gap-4">
          <ModeToggle></ModeToggle>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </div>
  );
}
