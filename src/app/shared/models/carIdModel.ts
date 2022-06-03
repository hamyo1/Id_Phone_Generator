
export interface Record {
    _id: number;
    mispar_rechev: string;
    tozeret_cd: string;
    sug_degem: string;
    tozeret_nm: string;
    degem_cd: number;
    degem_nm: string;
    ramat_gimur: string;
    ramat_eivzur_betihuty?: any;
    kvutzat_zihum: number;
    shnat_yitzur: number;
    degem_manoa: string;
    mivchan_acharon_dt: Date;
    tokef_dt: Date;
    baalut: string;
    misgeret: string;
    tzeva_cd: number;
    tzeva_rechev: string;
    zmig_kidmi: string;
    zmig_ahori: string;
    sug_delek_nm: string;
    horaat_rishum: number;
    moed_aliya_lakvish: string;
    kinuy_mishari: string;
    rank: number;
}

export interface Info {
    label: string;
    notes: string;
    type_override: string;
}

export interface Field {
    id: string;
    type: string;
    info: Info;
}

export interface Links {
    start: string;
    next: string;
}

export interface Result {
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

export interface CarIdFromDataGovObject {
    help: string;
    success: boolean;
    result: Result;
}



