export interface AreaData {

    code: string,
    name: string,
    address_unique_id: string
    source: string,
    area_type: number,
    area_points: number

}

export interface Geo {

    owner_unique_id: string, 
    owner_type: string,
    country_code: string,
    country_name: string,
    admin1_code: string,
    admin1_name: string,
    admin2_code: string,
    admin2_name: string,
    admin3_code: string,
    admin3_name: string,
    admin4_code: string,
    admin4_name: string,
    admin5_code: string,
    admin5_name: string,
    admin6_code?: string,
    admin6_name?: string
    postal_code: string,
    address: string,
    premise?: string,
    code: string,
    name: string,
    first_name :string,
    middle_name: string,
    last_name: string,
    organization?: string,
    latitude: number, 
    longitude: number,
    qcode: string,
    payload?: string,

}

export interface LocationHoursData {

    day_name: string,
    open_at: string,
    close_at: string,
    shift_id: string,
    shift_name: string,
    shift_start_time: string,
    shift_end_time: string,

}

export interface LocationData {

    owner_unique_id: string,
    owner_type: string,
    code: string,
    name: string,
    source: string,
    address_unique_id: string,
    area_unique_id: string,
    location_parent_id: string,
    latitude: number,
    longitude: number

}

export interface PremiseData {

    parent_id: string,
    premise_type: string,
    floor?: number,
    code: string,
    name: string,
    description: string,
    access_instructions: string,
    additional_instructions?: string,
    source: string,
    source_alias: string,
    source_id: string,
    source_typenotes: string,

}