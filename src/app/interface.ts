export interface ProductsData {

    id: number;
    uniqueId: string;
    sku: string;
    name: string;
    description?: string;
    imageUrl: string;
    contentUrl?: string;
    price: number;
    status: string;
    enabled: string;
    openPrice: boolean;
    openStock: boolean;
    payload:string;
    qcode: string;  

}

export interface addToCartData {

    user_unique_id: string;
    cartNotes?: string;
    sku: string;
    productNotes?: string;
    quantity: number;

}

export interface CategoriesData {

    id: number;
    uniqueId: string;
    code: string;
    name: string;
    description?: string;
    parentId: number;
    displayOrder: number;
    imageUrl: string;
    contentUrl: string;
    status: string;
    enabled: string;
    payload: string;

}