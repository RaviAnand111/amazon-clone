import Products from "./Products";

export default function ProductFeed({ products }) {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 -mt-10 ">
        {products.map(
          ({ id, title, price, description, category, image, rating }) => (
            <Products
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          )
        )}
      </div>
    </div>
  );
}
