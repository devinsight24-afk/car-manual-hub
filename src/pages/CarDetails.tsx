import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Heart, FileText, Wrench, AlertCircle } from "lucide-react";
import { getVehicle } from "@/data/vehicles";

const CarDetails = () => {
  const { manufacturer, model, year } = useParams<{ 
    manufacturer: string; 
    model: string; 
    year: string;
  }>();
  const navigate = useNavigate();
  
  const vehicle = manufacturer && model && year 
    ? getVehicle(manufacturer, model, parseInt(year)) 
    : undefined;

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-12 text-center">
          <p className="text-muted-foreground text-lg">Vehicle not found</p>
          <Button className="mt-4" onClick={() => navigate("/")}>
            Return Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate(`/make/${manufacturer}/model/${model}`)}
            className="mb-4 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Years
          </Button>
          <h1 className="text-4xl font-bold">
            {vehicle.year} {vehicle.manufacturer} {vehicle.model}
          </h1>
          <p className="text-primary-foreground/80 mt-2">
            {vehicle.engine} • {vehicle.transmission}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <Tabs defaultValue="specs" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="specs" className="text-base">
              <FileText className="mr-2" size={18} />
              Specifications
            </TabsTrigger>
            <TabsTrigger value="maintenance" className="text-base">
              <Wrench className="mr-2" size={18} />
              Maintenance
            </TabsTrigger>
            <TabsTrigger value="manuals" className="text-base">
              <FileText className="mr-2" size={18} />
              Manuals
            </TabsTrigger>
            <TabsTrigger value="troubleshooting" className="text-base">
              <AlertCircle className="mr-2" size={18} />
              Tips
            </TabsTrigger>
          </TabsList>

          <TabsContent value="specs">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Specifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">Engine & Performance</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-muted-foreground">Engine:</span>
                      <p className="font-medium">{vehicle.engine}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Transmission:</span>
                      <p className="font-medium">{vehicle.transmission}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Horsepower:</span>
                      <p className="font-medium">{vehicle.specs.horsepower}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Torque:</span>
                      <p className="font-medium">{vehicle.specs.torque}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">Fuel & Efficiency</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-muted-foreground">Fuel Type:</span>
                      <p className="font-medium">{vehicle.specs.fuelType}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">MPG (City):</span>
                      <p className="font-medium">{vehicle.specs.mpgCity}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">MPG (Highway):</span>
                      <p className="font-medium">{vehicle.specs.mpgHighway}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Drivetrain:</span>
                      <p className="font-medium">{vehicle.specs.drivetrain}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="maintenance">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Maintenance Schedule</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">Oil Change</h3>
                  <p className="text-muted-foreground">{vehicle.maintenance.oilChange}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">Tire Rotation</h3>
                  <p className="text-muted-foreground">{vehicle.maintenance.tireRotation}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">Air Filter Replacement</h3>
                  <p className="text-muted-foreground">{vehicle.maintenance.airFilter}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">Spark Plugs</h3>
                  <p className="text-muted-foreground">{vehicle.maintenance.sparkPlugs}</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="manuals">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Available Manuals</h2>
              {vehicle.manuals && vehicle.manuals.length > 0 ? (
                <div className="space-y-4">
                  {vehicle.manuals.map((manual, index) => (
                    <Card key={index} className="p-4 hover:border-primary transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="text-primary" size={24} />
                          <span className="font-medium">{manual}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          View PDF
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Manuals coming soon. Check back later for repair manuals and wiring diagrams.
                </p>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="troubleshooting">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Common Issues & Tips</h2>
              <div className="space-y-4">
                {vehicle.troubleshooting.map((tip, index) => (
                  <Card key={index} className="p-4 bg-muted/50">
                    <div className="flex gap-3">
                      <AlertCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">{tip}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Donate Section */}
        <Card className="mt-12 p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 text-center">
          <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Found This Helpful?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Support us to add more vehicles, detailed repair guides, and keep this resource free.
          </p>
          <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90">
            Support Development
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default CarDetails;
