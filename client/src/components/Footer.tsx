import { Mail, Instagram } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border py-16">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* About */}
          <div>
            <h4
              className="text-lg font-bold text-foreground mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              The Literary Society
            </h4>
            <p className="text-foreground/70 leading-relaxed text-sm">
              A space for stories, ideas, poetry, debate, and expression. Join our community of readers and writers.
            </p>
          </div>

          {/* Contact & Social */}
          <div>
            <h4
              className="text-lg font-bold text-foreground mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Connect With Us
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="mailto:literary.stmehyd@nmims.in"
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center text-accent transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/theliterarysociety_nmhyd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-foreground/60">
              ✉️ literary.stmehyd@nmims.in
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="text-center">
          {/* Literary Quote */}
          <p className="text-foreground/70 italic text-sm mb-6 max-w-2xl mx-auto leading-relaxed">
            "There is no friend as loyal as a book." — Ernest Hemingway
          </p>

          {/* Copyright */}
          <p className="text-foreground/60 text-xs">
            © {currentYear} The Literary Society, STME NMIMS Hyderabad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
