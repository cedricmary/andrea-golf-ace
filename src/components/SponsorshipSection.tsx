import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Trophy, 
  Star, 
  Crown, 
  Diamond, 
  Target,
  Heart,
  Users,
  Calendar,
  CheckCircle
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const sponsorshipTiers = [
  {
    id: "bronze",
    name: "Bronze Supporter",
    amount: 9000, // €90
    icon: Target,
    color: "bg-amber-100 text-amber-800",
    features: [
      "Recognition on social media",
      "Thank you email from Andrea",
      "Digital certificate of support"
    ]
  },
  {
    id: "silver", 
    name: "Silver Champion",
    amount: 22500, // €225
    icon: Star,
    color: "bg-gray-100 text-gray-800",
    features: [
      "All Bronze benefits",
      "Name on tournament gear",
      "Quarterly progress updates",
      "Signed photo from Andrea"
    ]
  },
  {
    id: "gold",
    name: "Gold Patron",
    amount: 45000, // €450
    icon: Crown,
    color: "bg-yellow-100 text-yellow-800",
    features: [
      "All Silver benefits", 
      "Logo on tournament apparel",
      "VIP tournament updates",
      "Meet & greet opportunity"
    ]
  },
  {
    id: "platinum",
    name: "Platinum Elite",
    amount: 90000, // €900
    icon: Diamond,
    color: "bg-purple-100 text-purple-800",
    features: [
      "All Gold benefits",
      "Premier logo placement",
      "Monthly video calls",
      "Tournament attendance invite",
      "Exclusive merchandise package"
    ]
  }
];

const SponsorshipSection = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    companyName: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSponsorshipSubmit = async () => {
    if (!selectedTier) {
      toast.error("Please select a sponsorship tier");
      return;
    }

    if (!formData.email || !formData.fullName) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    try {
      const tier = sponsorshipTiers.find(t => t.id === selectedTier);
      if (!tier) throw new Error("Invalid tier selected");

      const { data, error } = await supabase.functions.invoke('create-sponsor-payment', {
        body: {
          amount: tier.amount,
          tier: tier.name,
          email: formData.email,
          fullName: formData.fullName,
          companyName: formData.companyName,
          phone: formData.phone,
          message: formData.message
        }
      });

      if (error) throw error;

      // Open Stripe checkout in new tab
      window.open(data.url, '_blank');
      
      toast.success("Redirecting to payment...");
    } catch (error) {
      console.error("Error creating sponsorship:", error);
      toast.error("Failed to process sponsorship. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-golf-green/5 to-championship-gold/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-championship-gold/10 text-championship-gold border-championship-gold/20">
            Sponsor Andrea
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-champion">
            Invest in a Champion
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help Andrea achieve her golf dreams and be part of her journey to championship success. 
            Your investment supports training, equipment, tournaments, and her bright future in professional golf.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="mx-auto w-12 h-12 bg-golf-green/10 rounded-full flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-golf-green" />
              </div>
              <div className="text-3xl font-bold text-golf-green mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Tournaments Won</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="mx-auto w-12 h-12 bg-championship-gold/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-championship-gold" />
              </div>
              <div className="text-3xl font-bold text-championship-gold mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Current Sponsors</div>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="mx-auto w-12 h-12 bg-golf-green/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-golf-green" />
              </div>
              <div className="text-3xl font-bold text-golf-green mb-2">3</div>
              <div className="text-sm text-muted-foreground">Years Playing</div>
            </CardContent>
          </Card>
        </div>

        {/* Sponsorship Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sponsorshipTiers.map((tier) => {
            const IconComponent = tier.icon;
            const isSelected = selectedTier === tier.id;
            
            return (
              <Card 
                key={tier.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-golf ${
                  isSelected ? 'ring-2 ring-golf-green shadow-golf' : ''
                }`}
                onClick={() => setSelectedTier(tier.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-3 bg-golf-green/10 rounded-full w-fit mb-2">
                    <IconComponent className="w-8 h-8 text-golf-green" />
                  </div>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-golf-green">
                    €{(tier.amount / 100).toLocaleString()}
                  </div>
                  <Badge className={tier.color}>
                    {tier.id.charAt(0).toUpperCase() + tier.id.slice(1)}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-golf-green mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Sponsor Form */}
        {selectedTier && (
          <Card className="max-w-2xl mx-auto shadow-golf">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-championship-gold" />
                Complete Your Sponsorship
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    placeholder="Your company (optional)"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message for Andrea</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Share your motivation for supporting Andrea..."
                  rows={3}
                />
              </div>

              <Button 
                variant="champion" 
                size="lg" 
                className="w-full"
                onClick={handleSponsorshipSubmit}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : `Sponsor with ${sponsorshipTiers.find(t => t.id === selectedTier)?.name}`}
                <Heart className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default SponsorshipSection;