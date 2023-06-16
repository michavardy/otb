"use client"
import { useEffect} from "react";
import { useRouter } from 'next/navigation';
import { signIn, useSession, signOut } from "next-auth/react";


export default function TopPlayers() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
          router.push("/");
        }
      }, [status, router]);

    return(
        <div>
            top players
        </div>
    )
}