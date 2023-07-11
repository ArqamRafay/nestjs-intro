/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from "./product.model";
@Injectable()
export class ProductsService {
    product: Product[] = []

    insertProduct(title: string, desc: string, price: number): string {
        const productId = Math.random().toString()
        const newProduct = new Product(productId, title, desc, price);
        this.product.push(newProduct)
        return productId
    }

    getAllProduct() {
        return [...this.product]
    }

    getSingleProduct(productId: string) {
        const product = this.product.find((x) => x.id == productId);

        if (!product) {
            throw new NotFoundException('Could not find this product');
        }

        return { product: product }
    }

}