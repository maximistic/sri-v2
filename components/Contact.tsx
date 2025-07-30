'use client';

import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import FlipText from '@/components/ui/FlipText';
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";

const ContactSection: React.FC = () => {
  return (
    <div
      id="contact"
      className="relative min-h-screen w-full bg-secondary text-foreground"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="fixed bottom-0 h-screen w-full">
        <div className="h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center px-4 sm:px-6">
            
            {/* Left Side */}
            <div className="space-y-8 text-center lg:text-left cursor-default">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
                  Let&apos;s Connect
                </h1>
                <div className="w-24 sm:w-20 lg:w-40 h-px mx-auto lg:mx-0 bg-border" />
              </div>
              <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                Ready to bring your ideas to life? Let&apos;s create something extraordinary together.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="mailto:srikailaash.pr@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full font-medium text-base sm:text-lg hover:bg-primary/90 transition-colors"
                >
                  <FlipText text="Start a project" />
                  <ArrowUpRight className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
              </div>

            </div>

            {/* Right Side */}
            <div className="space-y-8 md:space-y-10">
              {/* Email */}
              <div className="flex items-start sm:items-center gap-4 cursor-default">
                <div className="w-10 sm:w-12 h-10 sm:h-12 border border-border rounded-full flex items-center justify-center text-foreground">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <div className="text-foreground text-base sm:text-lg font-medium break-words">
                    srikailaash.pr@gmail.com
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start sm:items-center gap-4 cursor-default">
                <div className="w-10 sm:w-12 h-10 sm:h-12 border border-border rounded-full flex items-center justify-center text-foreground">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <div className="text-foreground text-base sm:text-lg font-medium">
                    India
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="pt-6 sm:pt-8">
                <div className="text-sm text-muted-foreground mb-4 cursor-default">Follow</div>
                <div className="flex gap-6 sm:gap-8">
                  <a
                    href="https://www.linkedin.com/in/srikailaashkumar-s/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-muted-foreground hover:text-foreground transition-colors text-2xl"
                  >
                    <BsLinkedin size={40}/>
                  </a>
                  <a
                    href="https://github.com/maximistic"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-muted-foreground hover:text-foreground transition-colors text-2xl"
                  >
                    <BsGithub size={40}/>
                  </a>
                  <a
                    href="/err"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter/X"
                    className="text-muted-foreground hover:text-foreground transition-colors text-2xl"
                  >
                    <BsTwitterX size={40}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
