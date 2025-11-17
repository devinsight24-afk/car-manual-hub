import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { getYearsByModel } from "@/data/vehicles";

const ModelSelection = () => {
  const { manufacturer, model } = useParams<{ manufacturer: string; model: string }>();
  const navigate = useNavigate();
  const years = manufacturer && model ? getYearsByModel(manufacturer, model) : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate(`/make/${manufacturer}`)}
            className="mb-4 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Models
          </Button>
          <h1 className="text-4xl font-bold">
            {manufacturer} {model}
          </h1>
          <p className="text-primary-foreground/80 mt-2">
            Select a year to view details
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {years.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {years.map((year) => (
              <Card
                key={year}
                className="p-6 cursor-pointer hover:shadow-lg hover:border-primary transition-all duration-300 text-center group"
                onClick={() => navigate(`/make/${manufacturer}/model/${model}/year/${year}`)}
              >
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {year}
                </h3>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground text-lg">
              No years available for this model.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ModelSelection;
