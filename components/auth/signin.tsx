"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP } from "@/components/ui/input-otp";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <div className="flex flex-col items-center gap-2">
        <a href="#" className="flex flex-col items-center gap-2 font-medium">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={"/images/nova.png"}
              width={32}
              height={32}
              alt="Logo"
              className="w-36 h-32 py-2"
            />
            <span>NestLink Nova</span>
          </div>
        </a>
        <h1 className="text-xl font-bold">Welcome back!</h1>
      </div>
      <form className="container w-[85%] mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Check your email</Label>
              {/* <InputOTP /> */}
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button
              onClick={() => router.push("/head-nthl")}
              type="submit"
              className="w-full cursor-pointer text-lg"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
