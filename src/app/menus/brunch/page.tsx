import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function BrunchPage() {
  const menuSections = [
    {
      title: "Breakfast Favorites",
      description: "Classic morning dishes with a French twist",
      items: [
        {
          name: "Croissant French Toast",
          description: "Butter croissants, vanilla custard, maple syrup",
          price: "14",
        },
        {
          name: "Eggs Benedict",
          description: "Poached eggs, ham, hollandaise, English muffin",
          price: "16",
        },
        {
          name: "Quiche Lorraine",
          description: "Bacon, Gruyère cheese, caramelized onions",
          price: "15",
        },
      ],
    },
    {
      title: "Light & Fresh",
      items: [
        {
          name: "Yogurt Parfait",
          description: "Greek yogurt, house granola, seasonal berries",
          price: "10",
        },
        {
          name: "Fresh Fruit Bowl",
          description: "Selection of seasonal fruits",
          price: "9",
        },
      ],
    },
    {
      title: "Lunch",
      items: [
        {
          name: "Croque Monsieur",
          description: "Ham, Gruyère, béchamel sauce",
          price: "15",
        },
        {
          name: "Niçoise Salad",
          description: "Tuna, olives, eggs, green beans, potatoes",
          price: "17",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f1d8] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl script-font text-[#343f35] text-center mb-4">
          Breakfast & Lunch
        </h1>
        <p className="text-[#5a6b5c] text-center mb-12">
          Served Tuesday through Sunday, 8:00 AM to 2:00 PM
        </p>

        <div className="space-y-12">
          {menuSections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                {section.description && (
                  <CardDescription>{section.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-start gap-4 pb-4 border-b border-[#f6f1d8]/20 last:border-0 last:pb-0"
                    >
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-[#f6f1d8]/80 mt-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-medium whitespace-nowrap">
                        ${item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12">
          <CardContent>
            <p className="text-sm text-center text-[#f6f1d8]/80">
              *Consuming raw or undercooked meats, poultry, seafood, shellfish,
              or eggs may increase your risk of foodborne illness. Please inform
              your server of any allergies.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
