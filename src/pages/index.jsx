import { PrimaryButton, SecondaryButton, OutlineButton } from "@/ui/button";
import MouseClickIcon from "@/ui/icons/mouse-click";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-800 flex items-center justify-center">
      <div className="space-y-2 w-1/5">
        <PrimaryButton block renderRightIcon={() => <MouseClickIcon />}>
          Click me
        </PrimaryButton>

        <SecondaryButton block>Click me</SecondaryButton>

        <OutlineButton block>Click me</OutlineButton>
      </div>
    </div>
  );
}
