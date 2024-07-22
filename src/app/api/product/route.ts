import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Sepatu",
    price: 1000000,
    image: "https://static 7ae3c13142/air-force-1-07-shoes-WrLlWX.png"
  },
  {
    id: 2,
    title: "Sepatu 2",
    price: 1300000,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_409,c_limit/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoes-WrLlWX.png"
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));

    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailProduct,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "not found",
      data: {},
    });
  }

  return NextResponse.json({ status: 200, message: "success", data });
}
