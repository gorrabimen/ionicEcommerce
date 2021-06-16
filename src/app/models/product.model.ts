export class Product {
    id: number;
    name: String;
    imageUrl: String;
    description: String;
    price: number;
    discountPrice: number = 0;
    images: Array<String>;
    size: Array<String>;
    color: Array<String>;
    quantity: number;
    isWishlist: boolean;
}