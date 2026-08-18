import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Cart",
  description: "Purchase inquiries are handled via contact.",
};

export default function CartPage() {
  redirect("/shop");
}
