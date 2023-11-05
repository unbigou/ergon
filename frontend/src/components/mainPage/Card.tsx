import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Product } from "@/utils/types";

type CardProps = {
  product: Product;
};

const CardsFunc = ({ product }: CardProps) => {
  return (
    <div className="w-fit">
      <Card>
        <CardHeader>
          <CardTitle>
            {product.name}
          </CardTitle>
          <CardDescription>
            {product.type}
          </CardDescription>
        </CardHeader>
        <CardContent className="items-center flex flex-col">
          <Image
            className=""
            src="/mambore.png" // product.image
            alt="logo"
            width={150}
            height={150}
          />
          <p>Vithor sexy</p>
          <div className="text-justify">A descrição é verdadeira!</div>
        </CardContent>
        <CardFooter className="justify-center flex">
          <Button className="rounded-sm bg-red-600">compre agora!</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardsFunc;
