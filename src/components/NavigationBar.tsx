import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react"; // Tambahkan ShoppingCart
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/features" },
  { name: "About", href: "/pricing" },
];

export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* ---  BURGER  --- */}
        <div className="flex md:hidden flex-1">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              {" "}
              {/* leftburger */}
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-semibold px-4 py-2 hover:bg-accent rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Login Button masuk ke dalam burger saat mobile */}
                <hr className="my-2" />
                <Button className="w-full">Login</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* --- BAGIAN TENGAH: LOGO (Mobile: Center, Desktop: Left) --- */}
        {/* Mengunakan md:flex-initial agar di desktop dia tidak memakan ruang grow */}
        <div className="flex justify-center md:justify-start">
          <Link href="/" className="font-bold text-2xl tracking-tighter">
            zyxStore
          </Link>
        </div>

        {/* --- NAVIGASI DESKTOP (Tengah) --- */}

        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* --- BAGIAN KANAN: THEME, CART, LOGIN (Desktop) --- */}
        <div className="flex flex-1 justify-end items-center gap-2">
          {/* Cart Icon (Muncul di Mobile & Desktop) */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
          </Button>

          <ThemeToggle />

          {/* Login Button (Hanya Desktop) */}
          <Button className="hidden md:flex ml-2 shadow-sm" size="sm">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
