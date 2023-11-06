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
import Link from "next/link";

type CardProps = {
  product: Product;
};

const CardsFunc = ({ product }: CardProps) => {
  return (
    <div className="w-fit">
      <Card>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.type}</CardDescription>
        </CardHeader>
        <CardContent className="items-center flex flex-col">
          <Image
            className=""
            src="/mambore.png" // product.image
            alt="logo"
            width={150}
            height={150}
          />
          <p>Vithor</p>
          <div className="text-justify">A descrição é verdadeira!</div>
        </CardContent>
        <CardFooter className="justify-center flex">
          <Link
            href={`/info/${product.id}`}
            className="rounded-sm bg-red-600 px-4 py-2 text-white"
          >
            compre agora!
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardsFunc;
