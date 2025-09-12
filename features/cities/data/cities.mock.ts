import { City } from "../types/city.types";
import { officeSpaces } from "@/features/offices/data/officeSpaces.mock";

const cityNames = [
"Jakarta Pusat",
"Bandung",
"Surabaya",
"Yogyakarta",
"Medan",
"Semarang", 
"Makassar",
"Bekasi",
"Depok",
];

export const cities: City[] = cityNames.map((name,i) => {
    const officeCount = officeSpaces.filter((space) => space.location === name).length;

    return {
        id: i + 1,
        name,
        officecount: officeCount,
        image: `/assets/images/thumbnails/thumbnails-${(i % 3) + 1}.png`,
        slug: name.toLowerCase().replace(/ /g, "-"), //Jakarta Pusat -> jakarta-pusatx  
    };
});
