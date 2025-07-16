import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function CoffeePage() {
  const specialtyLattes = [
    {
      name: "Sweet Julia",
      description:
        "Infused with lavender and French vanilla - subtle sweetness with an aromatic twist",
    },
    {
      name: "Toffee Brooke",
      description:
        "Just the right amount of nuttiness blended with the warmth of toffee crunch",
    },
    {
      name: "French Madeline",
      description:
        "A take on the traditional French Genoise Cake - sure to take your senses to Paris and back",
    },
    {
      name: "Cafe de Natalia",
      description:
        "Sugar and spice and everything nice - a twist on the Mexican favorite Cafe de Olla",
    },
    {
      name: "The Road Not Taken",
      description:
        "I took the one less traveled by, and that has made all the difference - A take on rocky road ice cream",
    },
    {
      name: "Guillaume's Dirty Chai",
      description:
        "Two shots of espresso infused with our delicious spiced chai",
    },
    {
      name: "Strawberry Mariposa Matcha",
      description:
        "Traditional organic green tea matcha with sweet strawberry milk",
    },
  ];

  const espressoDrinks = [
    {
      name: "Espresso",
      description: "Your choice of one or two shots",
      prices: "2.95 | 3.95",
    },
    {
      name: "Americano",
      description: "Espresso with water",
      prices: "4.00 | 5.00 | 6.00",
    },
    {
      name: "Latte",
      description: "Espresso and steamed milk with a touch of foam",
      prices: "4.75 | 5.75 | 6.75",
    },
    {
      name: "Flat White",
      description: "Espresso and steamed milk with micro foam",
      prices: "4.75 | 5.75 | 6.75",
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and extra foam",
      prices: "4.75 | 5.75 | 6.75",
    },
    {
      name: "Mocha/White Mocha",
      description:
        "Espresso, steamed milk, and your choice of chocolate or white chocolate",
      prices: "4.75 | 5.75 | 6.75",
    },
  ];

  const nonCoffeeDrinks = [
    {
      name: "Matcha",
      description: "Traditional organic green tea matcha with steamed milk",
      prices: "4.95 | 5.95 | 6.95",
    },
    {
      name: "Chai Latte",
      description: "Delicious spiced chai with steamed milk",
      prices: "3.95 | 4.95 | 5.95",
    },
    {
      name: "London Fog",
      description: "Earl Grey Tea and steamed milk, sweet or unsweet",
      prices: "3.95 | 4.95 | 5.95",
    },
    {
      name: "Hot Chocolate",
      description: "Topped with whipped cream",
      prices: "1.95 | 2.95 | 3.95",
    },
    {
      name: "Milkshakes",
      description: "Chocolate, Mint Chocolate Chip, Vanilla, Strawberry",
      prices: "6.95",
    },
    {
      name: "Fruit Smoothies",
      description: "Very Berry or Tropical",
      prices: "5.95 | 7.95",
    },
    {
      name: "Hummingbird Hibiscus Iced Tea",
      description:
        "Infused with hibiscus and blackberry syrup and topped off with fresh blackberries",
      prices: "4.95",
    },
    {
      name: "Peach Mango Iced Tea",
      description:
        "Infused with peach and mango syrup garnished with chopped mango",
      prices: "4.95",
    },
  ];

  const extras = {
    milkOptions: ["Whole", "2%", "Skim", "Almond", "Oat"],
    flavors: ["French Vanilla", "Caramel", "Lavender", "Almond", "Hazelnut"],
    toppings: ["Whipped Cream", "Cinnamon & Sugar", "Cold Foam*"],
    classics: [
      "Drip Coffee",
      "Iced Tea",
      "Coca-cola",
      "Diet Coke",
      "Sparkling Water",
      "Orange Juice",
      "Apple Juice",
      "Lemonade",
      "Sprite",
      "Dr. Pepper",
      "Milk",
      "Choco Milk",
    ],
  };

  return (
    <div className="min-h-screen bg-[#f6f1d8] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl script-font text-[#343f35] text-center mb-4">
          Coffee Bar Menu
        </h1>
        <p className="text-[#5a6b5c] text-center mb-12">
          Petit - Moyen - Grand
        </p>

        {/* Specialty Lattes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Specialty Lattes</CardTitle>
            <CardDescription>
              Petit - 6.95 | Moyen - 7.95 | Grand - 8.95
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {specialtyLattes.map((drink) => (
                <div
                  key={drink.name}
                  className="border-b border-[#f6f1d8]/20 last:border-0 pb-4 last:pb-0"
                >
                  <h3 className="font-medium">{drink.name}</h3>
                  <p className="text-sm text-[#f6f1d8]/80">
                    {drink.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Espresso Drinks */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Espresso Hot or Iced</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {espressoDrinks.map((drink) => (
                <div
                  key={drink.name}
                  className="border-b border-[#f6f1d8]/20 last:border-0 pb-4 last:pb-0"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{drink.name}</h3>
                      <p className="text-sm text-[#f6f1d8]/80">
                        {drink.description}
                      </p>
                    </div>
                    <span className="whitespace-nowrap">{drink.prices}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Non-Coffee Drinks */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Non-Coffee Drinks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {nonCoffeeDrinks.map((drink) => (
                <div
                  key={drink.name}
                  className="border-b border-[#f6f1d8]/20 last:border-0 pb-4 last:pb-0"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{drink.name}</h3>
                      <p className="text-sm text-[#f6f1d8]/80">
                        {drink.description}
                      </p>
                    </div>
                    <span className="whitespace-nowrap">{drink.prices}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Extras */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Milk Options</CardTitle>
              <CardDescription>
                No upcharge for alternative milks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {extras.milkOptions.map((milk) => (
                  <span
                    key={milk}
                    className="bg-[#f6f1d8] text-[#5a6b5c] px-3 py-1 rounded-full text-sm"
                  >
                    {milk}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Flavors</CardTitle>
              <CardDescription>Add for a dollar extra</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {extras.flavors.map((flavor) => (
                  <span
                    key={flavor}
                    className="bg-[#f6f1d8] text-[#5a6b5c] px-3 py-1 rounded-full text-sm"
                  >
                    {flavor}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Toppings</CardTitle>
              <CardDescription>*Cold Foam 50 cents extra</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {extras.toppings.map((topping) => (
                  <span
                    key={topping}
                    className="bg-[#f6f1d8] text-[#5a6b5c] px-3 py-1 rounded-full text-sm"
                  >
                    {topping}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Classics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {extras.classics.map((classic) => (
                  <span
                    key={classic}
                    className="bg-[#f6f1d8] text-[#5a6b5c] px-3 py-1 rounded-full text-sm"
                  >
                    {classic}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
