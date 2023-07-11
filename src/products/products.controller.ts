/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductsService } from "./products.service";
@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) { }

    @Post()
    addProducts(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number): any {

        const generatedId = this.productService.insertProduct(prodTitle, prodDesc, prodPrice)
        return { id: generatedId }
    }

    @Get()
    getAllProducts() {
        return this.productService.getAllProduct()
    }
    @Get(':id')
    getProducts(@Param('id') prodId: string): any {
        return this.productService.getSingleProduct(prodId)
    }
}