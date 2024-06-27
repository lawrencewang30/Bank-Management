'use client';

import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SideBar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();

    return (
      <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
          <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
            <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="Prestige logo"
                className="size-[24px]
                max-xl:size-14"
            />
            <h1 className="sidebar-logo">Prestige</h1>
        </Link>

        {sidebarLinks.map((item) => {
            const isActive = 
            pathname === item.route || pathname.startsWith(`${item.route}/`) // check if current sidebar icon is the page you are currently on
            return (
              <Link href={item.route} key={item.label}
                className={cn
                ("sidebar-link", {'bg-bank-gradient': isActive })} // create blue outline on sidebar icon of current page
              >
                <div className="relative size-6">
                    <Image 
                        src={item.imgURL}
                        alt={item.label}
                        fill
                        className={cn({
                            "brightness-[3] invert-0": isActive // changes brightness of sidebar icon if on current page
                        })}
                    />
                </div>
              </Link>  
            )
        })}
      </nav>
    </section>
  )
}

export default SideBar
