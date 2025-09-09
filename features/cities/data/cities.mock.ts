import { City } from "../types/city.types";

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
    // const officecount = officeSpaces.filter((space) => space.location === name).length;

    return {
        id: i + 1,
        name,
        officecount: 1,
        image: `/assets/images/thumbnails/thumbnails-${(i % 3) + 1}.png`,
        slug: name.toLowerCase().replace(/ /g, "-"), //Jakarta Pusat -> jakarta-pusatx  
    };
});
