import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="bg-slate-500 h-16 flex flex-row items-center justify-between px-5">
      {!session && (
        <>
          <span>You&apos;re not signed in</span>
          <a
            href={`/api/auth/signin`}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign in
          </a>
        </>
      )}
      {session?.user && (
        <>
          <div>
            <span>You&apos;re signed in as: </span>
            <strong>{session.user.email}</strong>
          </div>
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </a>
        </>
      )}
    </div>
  );
}
