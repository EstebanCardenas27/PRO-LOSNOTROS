import { GridProfessionals } from "@/components/Professionals/gridProfessionals";
import { Process } from "@/components/Professionals/Process";
import { Divider } from "@/components/ui/Divider";
import { Benefits } from "@/components/Professionals/Benefits";

export const Professionals = () => (
    <>
        < GridProfessionals />
        < Divider />
        < Process />
        < Divider />
        < Benefits />
    </>
);