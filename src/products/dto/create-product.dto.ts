export class CreateProductDto {
  name: string;
  size: ('S' | 'M' | 'L')[];
  sweet: ('25' | '50' | '100')[];
  type: ('H' | 'C' | 'F')[];
  price: number;
}
