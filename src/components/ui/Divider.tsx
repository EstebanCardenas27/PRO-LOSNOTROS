import { LeafDividerIcon } from "@/components/Icons/LeafDividerIcon";

export const Divider = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-12">
      <div className="h-px bg-(--outline-variant)/30" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-(--background) px-3">
        <LeafDividerIcon className="w-5 h-5 text-(--primary)" />
      </div>
    </div>
  );
};