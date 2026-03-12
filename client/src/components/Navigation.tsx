import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: 'Home', href: '/', type: 'link' },
    { label: 'About', href: '#about', type: 'scroll' },
    { label: 'Events', href: '/events', type: 'link' },
    { label: 'Reading Corner', href: '/reading-corner', type: 'link' },
    { label: 'Feedback', href: '/feedback', type: 'link' },
    { label: 'Join', href: '#join', type: 'scroll' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsOpen(false);
    
    // If clicking Home, always go to top
    if (item.label === 'Home') {
      if (location === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    
    // Special handling for Events - scroll to events section on home page, otherwise go to events page
    if (item.label === 'Events') {
      if (location === '/') {
        const element = document.querySelector('#events');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      // If not on home page, the link will naturally go to /events page
      return;
    }
    
    // If clicking Join, always go to home page join section
    if (item.label === 'Join') {
      if (location === '/') {
        const element = document.querySelector('#join');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.location.href = '/#join';
      }
      return;
    }
    
    // If clicking About, always go to home page about section
    if (item.label === 'About') {
      if (location === '/') {
        const element = document.querySelector('#about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.location.href = '/#about';
      }
      return;
    }
    
    // If it's a scroll link and we're on home page
    if (item.type === 'scroll' && location === '/') {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // If it's a scroll link but we're not on home, go to home first
    else if (item.type === 'scroll' && location !== '/') {
      window.location.href = '/' + item.href;
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <a 
            className="flex items-center gap-2 cursor-pointer"
            onClick={(e) => {
              if (location === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <img
              src="/logo.jpeg"
              alt="The Literary Society"
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg font-bold text-foreground" style={{ fontFamily: 'Georgia, serif' }}>
              The Literary Society
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.type === 'link' && item.label !== 'Events' ? (
              <Link key={item.label} href={item.href}>
                <a 
                  className="nav-link text-sm font-medium"
                  onClick={(e) => {
                    if (item.label === 'Home' && location === '/') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  {item.label}
                </a>
              </Link>
            ) : item.label === 'Events' ? (
              <Link key={item.label} href={item.href}>
                <a 
                  className="nav-link text-sm font-medium"
                  onClick={(e) => {
                    if (location === '/') {
                      e.preventDefault();
                      handleNavClick(item);
                    }
                  }}
                >
                  {item.label}
                </a>
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (location === '/') {
                    e.preventDefault();
                    handleNavClick(item);
                  } else {
                    // If we're on a different page, navigate to home with hash
                    e.preventDefault();
                    window.location.href = '/' + item.href;
                  }
                }}
                className="nav-link text-sm font-medium"
              >
                {item.label}
              </a>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link key={item.label} href={item.href}>
                  <a
                    className="nav-link text-sm font-medium py-2"
                    onClick={(e) => {
                      setIsOpen(false);
                      if (item.label === 'Home' && location === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (location === '/') {
                      e.preventDefault();
                    } else {
                      // If we're on a different page, navigate to home with hash
                      e.preventDefault();
                      window.location.href = '/' + item.href;
                    }
                    handleNavClick(item);
                  }}
                  className="nav-link text-sm font-medium py-2"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
