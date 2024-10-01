import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarPage() {
    return (
        <div className="h-[500px] flex justify-center items-center">
            <Avatar>
                <AvatarImage src="https://github.com/LuisEduardo821.png" alt="LuisEduardo821" />
                <AvatarFallback>LE</AvatarFallback>
            </Avatar>
            <p className="m-2">@LuisEduardo821</p>
        </div>
    )
}