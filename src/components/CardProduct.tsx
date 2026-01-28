"useClient";
import { StarIcon } from "lucide-react";
import { Button } from "./ui/button";

import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
export default function CardProduct() {
  return (
    <div className="w-full p-6 flex justify-center">
      <Card className="w-48">
        <CardContent className="p-3">
          <div className="aspect-square rounded-md bg-gray-100 mb-2">
            <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
              Product Image
            </div>
          </div>
          <CardTitle className="text-sm mb-1">Wireless Headphones</CardTitle>
          <CardDescription className="text-xs mb-2 line-clamp-2">
            High-quality wireless headphones
          </CardDescription>
          {/* <div className="flex items-center space-x-1 mb-2">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <StarIcon
                  className="h-3 w-3 fill-yellow-400 text-yellow-400"
                  key={star}
                />
              ))}
              <StarIcon className="h-3 w-3 text-gray-300" />
            </div>
            <span className="text-xs text-muted-foreground">(4.0)</span>
          </div> */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">$199</span>
            <Button className="text-xs px-2 py-1 h-7" size="sm">
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
