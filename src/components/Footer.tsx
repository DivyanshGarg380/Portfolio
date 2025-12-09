import { Heart } from "lucide-react";

export default function Footer(){
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Divyansh Garg. All rights reserved.
          </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          V1.... Rotate ᯓ ✈︎
        </p>
      </div>
      </div>
    </footer>
  );
}