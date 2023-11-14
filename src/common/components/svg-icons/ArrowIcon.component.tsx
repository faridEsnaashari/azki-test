import { WithClassName } from "@/common/types/with-class-name.type";

function ArrowIcon({ className }: WithClassName) {
  return (
    <svg className={className + " h-full w-full"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4L6 8L10 12" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default ArrowIcon;
