import Card from "@/components/card";
import Link from "next/link";

export default function Archived() {
  return (
    <Card>
      <div>Archived Notificats</div>
      <Link href="/dashboard">Default</Link>
    </Card>
  );
}
