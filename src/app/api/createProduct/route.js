import { connectToDB } from "@/libs/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectToDB();

    const { productTitle, productImage, Price } = await request.json();

    console.log(productImage, productTitle, Price);

    // Correct way: create a Mongoose model instance and save it
    const newProduct = new Product({
        productTitle,
        productImage,
        Price,
    });

    await newProduct.save();

    return NextResponse.json({ message: "Product created successfully" });
}
