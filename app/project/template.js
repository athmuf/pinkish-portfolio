import { BackToHome } from "@/components";
export default function Template({ children }) {
  return (
    <div className="min-h-screen">
      <div className="md:px-24 px-3 md:py-10 py-3">
        <BackToHome />
        <div className="md:py-10 py-5">{children}</div>
      </div>
    </div>
  );
}
