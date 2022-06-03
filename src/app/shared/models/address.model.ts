export interface GoodRandomNumbers
{
    "start":number,
    "end":number
}


export interface Record {
    _id: number;
    סמל_ישוב: number;
    שם_ישוב: string;
    סמל_רחוב: number;
    שם_רחוב: string;
    rank: number;
}

export interface Field {
    id: string;
    type: string;
}

export interface Links {
    start: string;
    next: string;
}

export interface DataGovAdressResult {
    include_total: boolean;
    limit: number;
    q: string;
    records_format: string;
    resource_id: string;
    total_estimation_threshold?: any;
    records: Record[];
    fields: Field[];
    _links: Links;
    total: number;
    total_was_estimated: boolean;
}

export interface AddressResponseObject {
    help: string;
    success: boolean;
    result: DataGovAdressResult;
}


