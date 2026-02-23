import { SignIn } from "@stackframe/stack";

export default function SignInPage() {
  return (
    <div className="flex p-10 items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <SignIn />
      </div>
    </div>
  );
}
