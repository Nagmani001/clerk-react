import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <header>
      hi
      <SignedOut>
        <SignInButton />
        <SignUpButton />

      </SignedOut>
      hi
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
