import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Modern Villa",
    image: "/images/modern-villa.jpg",
    description: "A sleek and modern villa designed for a coastal setting."
  },
  {
    title: "Urban Pavilion",
    image: "/images/urban-pavilion.jpg",
    description: "Community-oriented design integrating public space."
  },
  {
    title: "Eco Tower",
    image: "/images/eco-tower.jpg",
    description: "Sustainable high-rise concept utilizing solar shading."
  }
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Architecture Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="hover:shadow-xl cursor-pointer transition"
            onClick={() => setSelected(project)}
          >
            <img src={project.image} alt={project.title} className="rounded-t-2xl w-full h-48 object-cover" />
            <CardContent>
              <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
            </CardContent>
          </Card>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-xl w-full">
            <img src={selected.image} alt={selected.title} className="rounded-xl w-full mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
            <p className="mb-4">{selected.description}</p>
            <Button onClick={() => setSelected(null)}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}
