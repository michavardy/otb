"use client";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface User {
  name: string;
  email: string;
  image: string;
}

export default function LoginData() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log('session data')
  console.log(session)
  console.log('status data')
  console.log(status)



  function logOut(){
    signOut();
    router.push('/')
  }

  if (status === "authenticated") {
    const user = session.user as User;
    return (
      <div className="flex gap-5">
        <Image
          alt="User Avatar"
          src={user.image}
          width={40}
          height={40}
          className="rounded-full"
        />
        <button onClick={logOut}> Sign out</button>
      </div>
    );
  }
  return <div>Please Sign In</div>;
}
