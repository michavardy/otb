import { MdiGithub } from "../icons/github";
import { PhGitlabLogo } from "../icons/gitlab";
import { signIn } from "next-auth/react";

export default function LoginIcons() {
  return (
    <div className="flex space-x-4">
      <button
        onClick={() => signIn("github")}
        className="flex items-center justify-center p-2 "
      >
        <MdiGithub className="w-12 h-12" />
      </button>
      <button
        onClick={() => signIn("gitlab")}
        className="flex items-center justify-center p-2"
      >
        <PhGitlabLogo className="w-12 h-12" />
      </button>
    </div>
  );
}
