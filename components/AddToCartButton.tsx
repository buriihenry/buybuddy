"use client";
import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import useStore from "@/store";
import toast from "react-hot-toast";
import PriceFormatter from "./PriceFormatter";
import QuantityButtons from "./QuantityButtons";

interface Props {
  product:  Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  
  const {addItem, getItemCount} = useStore();
  const itemCount= getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;
 

  const handleAddToCart = () => {
    if((product?.stock as number)>itemCount){
      addItem(product);
      toast.success(`${product?.name?.substring(0,12)}...Product added to cart successfully!`)

    }
  };
  return (
    <div className="w-full h-12 flex items-center">
      {itemCount? (
        <div className="text-sm w-full">
          <div className="flex items-center justify-between">
            <span className="text-xs text-tech_dark/80">Quantity</span>
            <QuantityButtons product={product}/>
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-xs font-semibold">Subtotal</span>
            <PriceFormatter amount={product?.price?product?.price *itemCount:0} />
          </div>
        </div>
      ):(
      <Button
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        className={cn(
          "w-full bg-tech_blue/80 text-lightBg shadow-none border border-tech_blue/80 font-semibold tracking-wide text-white hover:bg-tech_blue hover:border-tech_blue hoverEffect",
          className
        )}
      >
        <ShoppingBag /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>)}
    </div>
  );
};

export default AddToCartButton;