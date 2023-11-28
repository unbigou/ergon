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
import { ProductRes } from "@/utils/types";
import Link from "next/link";

type CardProps = {
  product: ProductRes;
};

const CardsFunc = ({ product }: CardProps) => {
  return (
    <div className="w-fit">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.type}</CardDescription>
        </CardHeader>
        <CardContent className="items-center flex flex-col">
          <Image
            className=""
            src={
              product.photo
                ? product.photo[0]
                : "/notFound.png"
            } // product.image
            alt="logo"
            priority
            width={150}
            height={150}
          />
          <p>{product.name}</p>
          <div className="text-justify">{product.type}</div>
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
