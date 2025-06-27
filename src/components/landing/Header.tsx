import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" }
];

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative z-10 p-6 border-b border-terminal-green/20 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.8)] transition-all duration-300">
          <Terminal className="w-6 h-6 text-terminal-bright-green" />
          <span className="text-xl font-bold terminal-glow">221B</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-terminal-bright-green transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(57,255,20,0.8)] uppercase tracking-wider text-sm"
            >
              [{item.name}]
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 hover:text-terminal-bright-green transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] bg-black/95 border-terminal-green/20 backdrop-blur-sm"
            >
              <SheetHeader>
                <SheetTitle className="text-terminal-bright-green terminal-glow text-left">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={handleNavItemClick}
                    className="text-lg hover:text-terminal-bright-green transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(57,255,20,0.8)] uppercase tracking-wider py-3 border-b border-terminal-green/10 hover:border-terminal-green/30"
                  >
                    [{item.name}]
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
};

export default Header;
