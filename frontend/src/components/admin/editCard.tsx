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
import useEditProduct from "@/context/editProduct";

type CardProps = {
  product: ProductRes;
};

const EditCard = ({ product }: CardProps) => {
  const { setProduct, setDialog } = useEditProduct();

  return (
    <div className="w-fit">
      <Card className="h-full flex flex-col justify-between">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.type}</CardDescription>
        </CardHeader>
        <CardContent className="items-center flex flex-col">
          <Image
            className=""
            src={product.photo ? product.photo[0] : "/notFound.png"} // product.image
            alt="logo"
            priority
            width={150}
            height={150}
          />
          <p>{product.name}</p>
          <div className="text-justify">{product.type}</div>
        </CardContent>
        <CardFooter className="justify-center flex">
          <Button
            className="rounded-sm px-4 py-2 text-white"
            onClick={() => {
              setProduct(product);
              setDialog(true);
            }}
          >
            Editar produto
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EditCard;
