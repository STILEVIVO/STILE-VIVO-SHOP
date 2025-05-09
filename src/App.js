import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Abito Elegante Nero",
    price: "€49.90",
    image: "/images/abito-nero.jpg",
    whatsapp: "https://wa.me/393331112233?text=Ciao%20vorrei%20ordinare%20l'abito%20elegante%20nero",
  },
  {
    id: 2,
    name: "Giacca Lino Beige",
    price: "€69.90",
    image: "/images/giacca-lino.jpg",
    whatsapp: "https://wa.me/393331112233?text=Ciao%20vorrei%20ordinare%20la%20giacca%20lino%20beige",
  },
  {
    id: 3,
    name: "Top Estivo Bianco",
    price: "€29.90",
    image: "/images/top-bianco.jpg",
    whatsapp: "https://wa.me/393331112233?text=Ciao%20vorrei%20ordinare%20il%20top%20estivo%20bianco",
  },
];

export default function HomePage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Stile.Vivo</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg text-gray-700 mb-4">{product.price}</p>
              <a href={product.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Ordina su WhatsApp</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
      <footer className="mt-10 text-center text-sm text-gray-500">
        Seguici su <a href="https://instagram.com/stile.vivo" className="underline">Instagram</a>
      </footer>
    </div>
  );
}
