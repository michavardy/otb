"use client";
import { useEffect} from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import LoginIcons from "../components/LoginIcons";
import { useRouter } from 'next/navigation';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/top_players");
    }
  }, [status, router]);

  return (
    <div className="w-80% flex flex-col items-center justify-center flex-grow">
      <LoginIcons />
    </div>
  );
}
