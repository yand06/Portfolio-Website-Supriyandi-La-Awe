import { MapPin, Copy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import type { Profile } from "@/types";
import avatarImg from "@/assets/avatar.jpg";
import fastworkIconImg from "@/assets/fastwork-icon.png";

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    toast.success("Email copied to clipboard!", {
      icon: <CheckCircle2 className="w-4 h-4" />,
    });
  };

  const handleHireMe = () => {
    window.open(
      "https://fastwork.id/user/supriyandi",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border p-4 sm:p-6 md:p-8 hover:shadow-md transition-smooth animate-fade-in">
      {/* Mobile: Avatar di tengah atas */}
      {/* Tablet & Desktop: Avatar di kanan */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar - Muncul pertama di mobile */}
        <div className="flex-shrink-0 order-first md:order-last mt-3 md:mt-0 animate-slide-in-right">
          <img
            src={avatarImg}
            alt={profile.name}
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-border shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex-1 w-full text-center md:text-left animate-slide-in-left">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            {profile.name}
          </h1>
          <p className="text-md sm:text-xl md:text-2xl text-muted-foreground mb-3">
            {profile.role}
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm sm:text-base">{profile.location}</span>
          </div>

          {profile.available && (
            <div className="flex justify-center md:justify-start mb-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Available for work
              </Badge>
            </div>
          )}

          {/* Buttons - Full width di mobile, inline di tablet+ */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              onClick={handleHireMe}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <img
                src={fastworkIconImg}
                alt="Fastwork"
                className="w-4 h-4 mr-2"
              />
              Hire Me
            </Button>
            <Button
              onClick={handleCopyEmail}
              variant="secondary"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/80"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
