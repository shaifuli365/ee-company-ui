import { Product } from './product';

export interface Order {
    shippingDetails?: any;
    product?: Product;
    orderId?: any;
    totalAmount?: any;
}
