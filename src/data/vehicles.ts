// Mock vehicle data for prototype
export interface Vehicle {
  manufacturer: string;
  model: string;
  year: number;
  engine: string;
  transmission: string;
  specs: {
    horsepower: string;
    torque: string;
    fuelType: string;
    mpgCity: string;
    mpgHighway: string;
    drivetrain: string;
  };
  maintenance: {
    oilChange: string;
    tireRotation: string;
    airFilter: string;
    sparkPlugs: string;
  };
  manuals?: string[];
  troubleshooting: string[];
}

export const manufacturers = [
  { name: "Ford", logo: "🚗" },
  { name: "Chevrolet", logo: "🚙" },
  { name: "Toyota", logo: "🚕" },
  { name: "Honda", logo: "🚘" },
  { name: "Dodge", logo: "🚐" },
  { name: "Jeep", logo: "🚙" },
  { name: "GMC", logo: "🚚" },
  { name: "Ram", logo: "🚛" },
];

export const mockVehicles: Vehicle[] = [
  {
    manufacturer: "Ford",
    model: "F-150",
    year: 2020,
    engine: "3.5L V6 EcoBoost",
    transmission: "10-Speed Automatic",
    specs: {
      horsepower: "375 hp",
      torque: "470 lb-ft",
      fuelType: "Gasoline",
      mpgCity: "20",
      mpgHighway: "26",
      drivetrain: "4WD",
    },
    maintenance: {
      oilChange: "Every 7,500-10,000 miles with synthetic oil",
      tireRotation: "Every 5,000-7,500 miles",
      airFilter: "Every 15,000-30,000 miles",
      sparkPlugs: "Every 100,000 miles",
    },
    manuals: [
      "Owner's Manual",
      "Service Manual",
      "Wiring Diagram",
    ],
    troubleshooting: [
      "Check engine light: Often related to oxygen sensors or catalytic converter",
      "Transmission shifting issues: Update software or check fluid levels",
      "EcoBoost turbo lag: Ensure regular maintenance and use recommended fuel",
    ],
  },
  {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2019,
    engine: "2.5L 4-Cylinder",
    transmission: "8-Speed Automatic",
    specs: {
      horsepower: "203 hp",
      torque: "184 lb-ft",
      fuelType: "Gasoline",
      mpgCity: "28",
      mpgHighway: "39",
      drivetrain: "FWD",
    },
    maintenance: {
      oilChange: "Every 10,000 miles with synthetic oil",
      tireRotation: "Every 5,000 miles",
      airFilter: "Every 30,000 miles",
      sparkPlugs: "Every 120,000 miles",
    },
    troubleshooting: [
      "AC not cooling: Check refrigerant levels and compressor",
      "Brake noise: Inspect brake pads and rotors for wear",
      "Dashboard warning lights: Consult diagnostic codes",
    ],
  },
  {
    manufacturer: "Honda",
    model: "Civic",
    year: 2021,
    engine: "1.5L Turbocharged 4-Cylinder",
    transmission: "CVT",
    specs: {
      horsepower: "174 hp",
      torque: "162 lb-ft",
      fuelType: "Gasoline",
      mpgCity: "31",
      mpgHighway: "40",
      drivetrain: "FWD",
    },
    maintenance: {
      oilChange: "Every 7,500 miles",
      tireRotation: "Every 7,500 miles",
      airFilter: "Every 15,000 miles",
      sparkPlugs: "Every 60,000 miles",
    },
    troubleshooting: [
      "CVT shuddering: Check transmission fluid and update software",
      "Turbo boost issues: Inspect wastegate and vacuum lines",
      "Infotainment freezing: Perform system reset",
    ],
  },
  {
    manufacturer: "Chevrolet",
    model: "Silverado 1500",
    year: 2018,
    engine: "5.3L V8",
    transmission: "6-Speed Automatic",
    specs: {
      horsepower: "355 hp",
      torque: "383 lb-ft",
      fuelType: "Gasoline",
      mpgCity: "16",
      mpgHighway: "23",
      drivetrain: "4WD",
    },
    maintenance: {
      oilChange: "Every 7,500 miles",
      tireRotation: "Every 7,500 miles",
      airFilter: "Every 15,000 miles",
      sparkPlugs: "Every 100,000 miles",
    },
    troubleshooting: [
      "Active Fuel Management issues: Consider AFM delete kit",
      "Transmission slipping: Check fluid level and condition",
      "Vibration at highway speeds: Balance tires and check driveshaft",
    ],
  },
];

export const getManufacturers = () => manufacturers;

export const getModelsByManufacturer = (manufacturer: string) => {
  return [...new Set(mockVehicles.filter(v => v.manufacturer === manufacturer).map(v => v.model))];
};

export const getYearsByModel = (manufacturer: string, model: string) => {
  return mockVehicles
    .filter(v => v.manufacturer === manufacturer && v.model === model)
    .map(v => v.year)
    .sort((a, b) => b - a);
};

export const getVehicle = (manufacturer: string, model: string, year: number): Vehicle | undefined => {
  return mockVehicles.find(v => 
    v.manufacturer === manufacturer && 
    v.model === model && 
    v.year === year
  );
};
