"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { LogIn, LogOut } from "lucide-react";
import AuthModal from "./AuthModal";
import { signOut } from "@/app/action";
import type { User } from "@supabase/supabase-js";

const AuthButton = ({ user }: { user: User }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  if (user) {
    return (
      <form action={signOut}>
        <Button variant="ghost" size="sm" type="submit" className="gap-2">
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </form>
    );
  }

  const toggleAuthModal = () => {
    setShowAuthModal(!showAuthModal);
  };
  return (
    <>
      <Button
        variant={"default"}
        size={"sm"}
        onClick={toggleAuthModal}
        className={"bg-orange-500 hover:bg-orange-600 gap-"}
      >
        <LogIn className="w-4 h-4" />
        Sign In
      </Button>
      <AuthModal isOpen={showAuthModal} onClose={toggleAuthModal} />
    </>
  );
};

export default AuthButton;
