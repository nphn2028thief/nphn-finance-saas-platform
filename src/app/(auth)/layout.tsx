import { ReactNode } from "react";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Image from "next/image";

import Loading from "@/components/Loading";

interface IProps {
  children: ReactNode;
}

function AuthLayout(props: IProps) {
  const { children } = props;

  return (
    <main className="h-full grid grid-cols-1 lg:grid-cols-2">
      <ClerkLoaded>
        <div className="flex justify-center items-center relative">
          {children}
        </div>
        <div className="hidden lg:flex justify-center items-center bg-blue-600">
          <Image
            src="/icons/logo.svg"
            alt="logo icon"
            width={64}
            height={64}
            loading="lazy"
          />
        </div>
      </ClerkLoaded>
      <ClerkLoading>
        <Loading />
      </ClerkLoading>
    </main>
  );
}

export default AuthLayout;
