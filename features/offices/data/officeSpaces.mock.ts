import { OfficeSpace } from "../types/office/officeSpaces";
export const officeSpaces: OfficeSpace[] = [
  {
    id: 1,
    title: "Angga Park Central Master Capitalize",
    slug: "angga-park-central-master-capitalize",
    price: 18560000,
    duration: "20 days",
    location: "Jakarta Pusat",
    rating: 4.5,
    address:"Dekat Gedung BWA HQ di jakarta no 102939",
    image: "/assets/images/thumbnails/thumbnails-1.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-1.png",
      "/assets/images/thumbnails/thumbnail-details-2.png",
    ],
    tags: ["Popular"],
    about: "wheter you need quiet space to focus or a collaborative environment to brainstorm with your team, we have the perfect solution for you.",
    features: ['Global Event', 'Privacy', 'Free Move', 'sustainbility','Extra Snacks', 'Compact' ], 
    isFullyBooked: false,
    salesContacts: [
      {
        name: "Masayoshi",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png",
  },
  {
  name: "Fuji Ovina",
  role : 'Sales Manager',
  photo: "/assets/images/photos/photo-2.png",
  }
],
  },

{
    id: 2,
    title: "Pondok Indah Office Space",
    slug: "ponsdok-indah-office-space",
    price: 76560000,
    duration: "20 days",
    location: "Surabaya",
    rating: 4.8,
    address:"Dekat Gedung BWA HQ di Sby no 102939",
    image: "/assets/images/thumbnails/thumbnails-1.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-1.png",
      "/assets/images/thumbnails/thumbnail-details-2.png",
    ],
    tags: ["Popular"],
    about: "wheter you need quiet space to focus or a collaborative environment to brainstorm with your team, we have the perfect solution for you.",
    features: ['Global Event', 'Privacy', 'Free Move', 'sustainbility','Extra Snacks', 'Compact' ], 
    isFullyBooked: false,
    salesContacts: [
      {
        name: "Rinda",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png",
  },
  {
  name: "Amara Ovina",
  role : 'Sales Manager',
  photo: "/assets/images/photos/photo-2.png",
  }
],
  }


];
