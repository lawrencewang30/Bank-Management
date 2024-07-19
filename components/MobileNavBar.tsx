'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Footer from "./Footer";


const MobileNavBar = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger> 
          <Image 
            src="/icons/hamburger.svg" // creates menu image on top right
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
              <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="Prestige logo"
              />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Prestige</h1>{/* show Prestige title next to logo after accessing 3 lines option*/}
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => { // SheetClose allows sidebar to close when clicking anywhere
                const isActive = 
                pathname === item.route || pathname.startsWith(`${item.route}/`) // check if current sidebar icon is the page you are currently on
                return (
                  <SheetClose asChild key={item.route}>
                    <Link href={item.route} key={item.label} // if I press icon that is page I am currently on, sidebar collapes
                      className={cn
                      ("mobilenav-sheet_close w-full", {'bg-bank-gradient': isActive })} // create blue outline on sidebar icon of current page
                    >
                          <Image 
                            src={item.imgURL}
                            alt={item.label}
                            width={25}
                            height={25}
                            className={cn({
                                "brightness-[3] invert-0": isActive // changes brightness of sidebar icon if on current page
                            })}
                          />

                      <p className={cn
                        ('text-16 font-semibold text-black-2', {"text-white": isActive}) // changes text color of sidebar icon labels, now shows every time you click on 3 lines icon
                        }>
                          {item.label}
                      </p>
                    </Link>
                  </SheetClose>  
                )
              })}
              </nav>
            </SheetClose>
          </div>
          
          <Footer user={user} type="mobile" />
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNavBar
