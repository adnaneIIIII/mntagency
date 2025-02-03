import { Button } from "@/components/ui/button";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="gap-6">
        <Button>
          <LoginLink>LogIn</LoginLink>
        </Button>
        <Button>
          <LogoutLink>LogOut</LogoutLink>
        </Button>
      </div>
    </div>
  );
}
