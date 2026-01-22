import _data from "$lib/data/facilities.json";

let data: Facilities = _data;

export interface FacilityPlaceImage {
    asset: string,
    name: string
};

export interface FacilityInfo {
    imgPaths: Array<FacilityPlaceImage>,
    name: string,
    facilityId: string,
    description: string
}

export type Facilities = Array<FacilityInfo>;

export function getFacilities(): Array<string> {
    return data.map((x) => x.facilityId);
}

export function getFacilityInfo(facility: string) {
    return data.find((x) => x.facilityId == facility);
}