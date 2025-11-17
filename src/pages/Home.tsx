import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Wrench, Heart } from "lucide-react";
import { getManufacturers } from "@/data/vehicles";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const manufacturers = getManufacturers();

  const handleManufacturerClick = (manufacturer: string) => {
    navigate(`/make/${manufacturer}`);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // For now, just navigate to the first manufacturer
      // In a real app, this would search across all data
      navigate(`/make/${manufacturers[0].name}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative bg-automotive-blue text-white py-20 px-4"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(215 85% 35% / 0.95), hsl(215 85% 25% / 0.9)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <img 
            src={logo} 
            alt="Auto Mechanic Pro" 
            className="w-24 h-24 mx-auto mb-6 drop-shadow-lg"
          />
          <h1 className="text-5xl font-bold mb-4">Auto Mechanic Pro</h1>
          <p className="text-xl mb-8 text-white/90">
            Your Complete Vehicle Maintenance & Repair Guide
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search by make, model, or year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="pl-12 h-14 text-lg bg-white text-foreground border-0 shadow-lg"
              />
            </div>
            <Button 
              size="lg"
              onClick={handleSearch}
              className="h-14 px-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Detailed Specs</h3>
            <p className="text-muted-foreground">
              Complete specifications for vehicles from 1990 to present
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Maintenance Guides</h3>
            <p className="text-muted-foreground">
              Step-by-step maintenance schedules and procedures
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Repair Manuals</h3>
            <p className="text-muted-foreground">
              Access to wiring diagrams and repair documentation
            </p>
          </Card>
        </div>

        {/* Popular Makes */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Popular Makes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {manufacturers.map((manufacturer) => (
              <Card
                key={manufacturer.name}
                className="p-6 cursor-pointer hover:shadow-lg hover:border-primary transition-all duration-300 text-center group"
                onClick={() => handleManufacturerClick(manufacturer.name)}
              >
                <div className="text-5xl mb-3">{manufacturer.logo}</div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {manufacturer.name}
                </h3>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <Card className="mt-16 p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 text-center">
          <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Support Development</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Help us expand to more vehicles, add more features, and keep this resource free for everyone.
          </p>
          <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90">
            Donate Now
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Home;
