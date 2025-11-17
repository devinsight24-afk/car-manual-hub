import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { getModelsByManufacturer } from "@/data/vehicles";

const MakeSelection = () => {
  const { manufacturer } = useParams<{ manufacturer: string }>();
  const navigate = useNavigate();
  const models = manufacturer ? getModelsByManufacturer(manufacturer) : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold">{manufacturer} Models</h1>
          <p className="text-primary-foreground/80 mt-2">
            Select a model to continue
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {models.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {models.map((model) => (
              <Card
                key={model}
                className="p-6 cursor-pointer hover:shadow-lg hover:border-primary transition-all duration-300 group"
                onClick={() => navigate(`/make/${manufacturer}/model/${model}`)}
              >
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {model}
                </h3>
                <p className="text-muted-foreground mt-2">
                  View available years →
                </p>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground text-lg">
              No models found for this manufacturer.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MakeSelection;
