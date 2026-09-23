"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signOut() {
  const supabase = await createClient();
  let data = await supabase.auth.signOut();
  console.log("data : ", data);
  // 1. Revalidate with "layout" to clear user data from the root layout cache
  revalidatePath("/", "layout");

  // 2. Redirect to home (Trailing comma removed)
  redirect("/");
}
