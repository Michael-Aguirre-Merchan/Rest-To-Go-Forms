export interface FilesData {

    unique_id: string;
    user_identity_unique_id: string;  
    user_unique_id: string;  
    status: string;
    enabled: string;  
    bucket: string; 
    name: string; 
    url: string;  
    thumbnail: string;  
    file_type: string; 
    file_size: number; 
    description: string;  
    original_name: string; 
    original_file: string;  
    category_unique_id: string;  
    category_name: string;  
    created_by: string;  
    updated_by: string;  
    payload: string;

}

export interface CategoriesData {

    unique_id: string;  
    code: string;  
    name: string;  
    description: string;  
    parent_id: number;
    display_order: number;  
    image_url: string;  
    content_url: string;  
    status: string;  
    enabled: string;  
    payload: string;

}

export interface PresignUploadData {

    filename: string;

}