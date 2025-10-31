import React, { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from "@/app/ui/Button";
import { ChevronDown, User } from "lucide-react";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { isAdmin } from "@/app/utils/roles";

export const ActionsProduct = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="alternative" className="flex items-center gap-1">
            Acciones
            <ChevronDown
              size={22}
              className={clsx(
                "shrink-0 transition-transform duration-300",
                open ? "rotate-180" : "rotate-0"
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          {!isAdmin(session?.user) ? (
            <>
              <DropdownMenuItem>Alternar disponibilidad</DropdownMenuItem>
              <DropdownMenuItem>Exportar selección</DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => {}} variant="destructive">
                Eliminar
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem>Ver artículo</DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
