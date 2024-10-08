import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuPage() {
  return (
    <div>
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-full rounded-md justify-center items-center">
          Right click
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Profile</ContextMenuItem>
          <ContextMenuItem>Billing</ContextMenuItem>
          <ContextMenuItem>Team</ContextMenuItem>
          <ContextMenuItem>Subscription</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Submenu</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>forward</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}
