"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "@/app/components/Acmelogo";
import { usePathname } from "next/navigation";

export default function NavbarUser() {
     const pathname = usePathname();

     const isActive = (path: string) => {
          if (pathname === path) return true;
          if (pathname.startsWith(path + "/")) return true;
          return false;
     };

     return (
          <Navbar>
               <NavbarBrand>
                    <AcmeLogo />
                    <Link href="/" className="font-bold text-inherit">ACME</Link>
               </NavbarBrand>
               <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem isActive={isActive("/albums")}>
                         <Link color="foreground" href="/albums">
                              Albums
                         </Link>
                    </NavbarItem>
                    <NavbarItem isActive={isActive("/posts")}>
                         <Link href="/posts" color="foreground">
                              Posts
                         </Link>
                    </NavbarItem>
                    <NavbarItem isActive={isActive("/projects")}>
                         <Link color="foreground" href="https://github.com/veroagrisand" target="_blank">
                              Projects
                         </Link>
                    </NavbarItem>
               </NavbarContent>
               <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                         <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                         <Button as={Link} color="primary" href="#" variant="flat">
                              Sign Up
                         </Button>
                    </NavbarItem>
               </NavbarContent>
          </Navbar>
     );
}
