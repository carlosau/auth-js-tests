import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 to-gray-700">
      <div className="space-y-6 text-center">
        <h1 className="text-5xl tracking-wide font-semibold text-white drop-shadow-md">👔Auth</h1>
        <p className="text-lg text-white">Login to access our system</p>
        <div>
          <LoginButton>
          <Button variant="secondary" size="lg">Log In</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
