import {useState} from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function Products({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  const [hasPrime] = useState(Math.random() > 0.5);

  return (
    <div className="relative flex flex-col bg-white p-6 m-4">
      <p className="absolute top-0 right-2 italic text-gray-500 text-sm">
        {category}
      </p>

      <img
        src={image}
        alt="img"
        width={200}
        height={200}
        className="object-contain mb-7 mx-auto"
      ></img>
      
      <p className="font-bold">{title}</p>

      <div className="flex">
        {Array(Math.floor(rating.rate))
          .fill()
          .map((_, i) => (
            <StarIcon className="h-6 text-yellow-500 my-1" />
          ))}
      </div>

      <p className="text-sm my-1 line-clamp-2">{description}</p>

      <p className="font-bold my-1">${price}</p>

      {hasPrime && (
        <div className="flex mt-2 mb-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Amazon_Prime_Logo.svg"
            width={40}
            className="mr-2"
            alt="img-prime"
          ></img>
          <p className="text-xs font-bold text-gray-500">FREE delivery Next Day</p>
        </div>
      )}

      <button className=" mt-auto w-full h-9 font-bold rounded bg-gradient-to-b from-yellow-200 to-yellow-400 text-[14px] md:text-sm border border-yellow-400">
        Add to Cart
      </button>
    </div>
  );
}
