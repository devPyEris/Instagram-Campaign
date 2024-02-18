import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10 flex-wrap">
    <Link href="/Day1-Home_Page_UI">Day1-Home-Page_UI</Link>
    <Link href="/Day1-Task2-Billing_Page_UI_Design">Day1-Task2-Billing_Page_UI_Design</Link>
    <Link href="/Day2-Landing_Page_UI_Design">Day2-Landing_Page_UI_Design</Link>
    <Link href="/Day2-Task2-Product_Review_Modal">Day2-Task2-Product_Review_Modal</Link>
    <Link href="/Day2-Task3-Progress_Card">Day2-Task3-Progress_Card</Link>
    <Link href="/Day3-Reviews_UI_Design">Day3-Reviews_UI_Design</Link>
    <Link href="/Day3-Task2-Analytics_UI_Design">Day3-Task2-Analytics_UI_Design</Link>
    <Link href="/Day3-Task3-Buy_Subscription_Section">Day3-Task3-Buy_Subscription_Section</Link>
    </div>
  );
}
