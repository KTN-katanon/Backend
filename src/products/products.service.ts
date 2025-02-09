import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  lastId: number = 1;
  products: Product[] = [
    {
      id: 1,
      name: 'Mocha',
      size: 'S',
      sweet: '50',
      type: ['H'],
      price: 50,
    },
  ];
  create(createProductDto: CreateProductDto) {
    this.lastId++;
    const newProduct = { ...createProductDto, id: this.lastId };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index < 0) {
      throw new NotFoundException();
    }
    return this.products[index];
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index < 0) {
      throw new NotFoundException();
    }
    this.products[index] = { ...this.products[index], ...updateProductDto };
    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index < 0) {
      throw new NotFoundException();
    }
    const delProduct = this.products[index];
    this.products.splice(index, 1);
    return delProduct;
  }
}
