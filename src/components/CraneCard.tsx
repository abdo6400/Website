import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Phone } from 'lucide-react';

interface CraneCardProps {
  name: string;
  image: string;
  specs: string[];
  price: string;
  priceLabel: string;
}

export default function CraneCard({ name, image, specs, price, priceLabel }: CraneCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-4 text-primary">{name}</h3>
        <div className="space-y-2 mb-4">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-accent mt-1">•</span>
              <span>{spec}</span>
            </div>
          ))}
        </div>
        <div className="border-t pt-4 mt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">{priceLabel}</span>
            <span className="text-primary">{price}</span>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
              احجز الآن
            </Button>
            <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
