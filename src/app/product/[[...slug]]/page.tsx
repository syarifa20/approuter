type ProductPageProps = { params: { slug: string } };

async function getData() {
  // const res = await fetch("https://fakestoreapi.com/products",{
  //   cache: 'no-store'
  // });

  const res = await fetch("http://localhost:3000/api/product",{
    cache: 'no-store',
    next: {
      // revalidate : 30
      tags : ["products"]
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getData();

  return (
    <div className="grid grid-cols-4 mt-5 place-items-center">
      {/* <h1>{params.slug ? "Detail Product Pgae" : "Product Page"}</h1> */}
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
            <a href="#">
              <img
                className="p-8 rounded-t-lg object-hover h-96 w-full"
                src={product.image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {product.title}
                </h5>
              </a>
             
              <div className="flex items-center justify-between mt-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $ {product.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      {params.slug && (
        <>
          <p>category : {params.slug[0]}</p>
          <p>gender : {params.slug[1]}</p>
          <p>id : {params.slug[2]}</p>
        </>
      )}
    </div>
  );
}
