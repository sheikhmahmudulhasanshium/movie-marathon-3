"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { setLight, setDark, setSystem } from "../redux/themeSlice"; 
export function ModeToggle() {
  const dispatch = useDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => dispatch(setLight())}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => dispatch(setDark())}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => dispatch(setSystem())}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
