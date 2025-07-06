'use client';

import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import FlipText from '@/components/ui/FlipText';

const ContactSection: React.FC = () => {
  return (
    <div className="relative h-[100vh] w-full bg-zinc-950 text-zinc-100" style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
      <div className="fixed bottom-0 h-[100vh] w-full">
        <div className="h-full flex items-center justify-center px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Side */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
                  Let&apos;s Connect
                </h1>
                <div className="w-24 h-px bg-zinc-700" />
              </div>
              <p className="text-zinc-400 text-xl sm:text-2xl leading-relaxed max-w-lg">
                Ready to bring your ideas to life? Let&apos;s create something extraordinary together.
              </p>
              <button className="inline-flex items-center gap-4 bg-zinc-100 text-zinc-900 px-10 py-5 rounded-full font-medium text-lg hover:bg-zinc-200 transition-colors">
                <FlipText text="Start a project" />
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>

            {/* Right Side */}
            <div className="space-y-8 lg:space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-zinc-700/50 rounded-full flex items-center justify-center text-zinc-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 mb-1">Email</div>
                  <div className="text-zinc-100 text-lg font-medium">hello@yourname.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-zinc-700/50 rounded-full flex items-center justify-center text-zinc-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 mb-1">Phone</div>
                  <div className="text-zinc-100 text-lg font-medium">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-zinc-700/50 rounded-full flex items-center justify-center text-zinc-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 mb-1">Location</div>
                  <div className="text-zinc-100 text-lg font-medium">San Francisco, CA</div>
                </div>
              </div>

              <div className="pt-8">
                <div className="text-sm text-zinc-500 mb-4">Follow</div>
                <div className="flex gap-8">
                  {['LinkedIn', 'GitHub', 'Twitter'].map((platform) => (
                    <div key={platform}>
                      <FlipText text={platform} className="text-zinc-500 hover:text-zinc-100 transition-colors text-lg" />
                    </div>
                  ))}
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
