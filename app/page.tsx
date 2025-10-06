// app/page.tsx
import { redirect } from "next/navigation";

export default function RootPage() {
  // immediately redirect root "/" to "/en"
  redirect("/en"); 
  return null; // must return something
}
