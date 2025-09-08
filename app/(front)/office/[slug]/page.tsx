import Navbar from "@/components/navbar";
import Image from "next/image";

export default function OfficeSlugPage() {
  return (
    <>
      <Navbar />
      <section id="Gallery" className="-mb-[50px]">
        <div className="swiper w-full">
          <div className="swiper-wrapper">
            {[
              "thumbnail-details-1.png",
              "thumbnail-details-2.png",
              "thumbnail-details-3.png",
            ].map((src, idx) => (
              <div key={idx} className="swiper-slide !w-fit">
                <div className="relative w-[700px] h-[550px] overflow-hidden">
                  <Image
                    src={`/assets/images/thumbnails/${src}`}
                    alt="thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="Details"
        className="relative flex max-w-[1130px] mx-auto gap-[30px] mb-20 z-10"
      >
        <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          <p className="w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
            Popular
          </p>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-extrabold text-[32px] leading-[44px]">
                Angga Park Central <br /> Master Capitalize
              </h1>
              <div className="flex items-center gap-[6px] mt-[10px]">
                <Image
                  src="/assets/images/icons/location.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <p className="font-semibold">Jakarta Pusat</p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <Image
                    key={i}
                    src="/assets/images/icons/Star 1.svg"
                    alt="star"
                    width={20}
                    height={20}
                  />
                ))}
                <Image
                  src="/assets/images/icons/Star 5.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
              </div>
              <p className="font-semibold text-right">4.5/5 (19,384)</p>
            </div>
          </div>

          <p className="leading-[30px]">
            Whether you need quite private space away from the distractions...
          </p>
          <hr className="border-[#F6F5FD]" />
          <h2 className="font-bold">You Get What You Need Most</h2>

          <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
            {[
              {
                src: "security-user.svg",
                title: "Privacy",
                desc: "For Yourself",
              },
              {
                src: "cup.svg",
                title: "Global Event",
                desc: "Startup Contest",
              },
              {
                src: "home-trend-up.svg",
                title: "Sustainbility",
                desc: "Long-term Goals",
              },
              {
                src: "coffee.svg",
                title: "Extra Snacks",
                desc: "Work-Life Balance",
              },
              { src: "3dcube.svg", title: "Compact", desc: "Good for Focus" },
              { src: "group.svg", title: "Free Move", desc: "Anytime 24/7" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <Image
                  src={`/assets/images/icons/${item.src}`}
                  alt="icon"
                  width={34}
                  height={34}
                />
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold text-lg leading-[24px]">
                    {item.title}
                  </p>
                  <p className="text-sm leading-[21px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-[#F6F5FD]" />
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-bold">Office Address</h2>
            <p>Angga Park Central Master Capitalize</p>
            <p>BLDG E16, 13 Xicheng District, Beijing, China, 100000</p>
          </div>

          <div className="overflow-hidden w-full h-[280px] relative">
            <iframe
              className="h-full w-full border-0"
              frameBorder={0}
              src="https://www.google.com/maps/embed/v1/place?q=Xicheng+District,+Beijing,&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </div>
        </div>

        <div className="w-[392px] flex flex-col shrink-0 gap-[30px]">
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
            <div>
              <p className="font-extrabold text-[32px] leading-[48px] text-[#0D903A]">
                Rp 18.540.000
              </p>
              <p className="font-semibold mt-1">For 20 days working</p>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Image
                    src="/assets/images/icons/verify.svg"
                    alt="verify"
                    width={30}
                    height={30}
                  />
                  <p className="font-semibold leading-[28px]">
                    Mendapatkan akses pembelajaran terbaru terkait dunia startup
                  </p>
                </div>
              ))}
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-[14px]">
              <a
                href="booking.html"
                className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
              >
                <Image
                  src="/assets/images/icons/slider-horizontal-white.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <span>Book This Office</span>
              </a>
              <button className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[16px_26px] gap-3 bg-white font-semibold">
                <Image
                  src="/assets/images/icons/save-add.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <span>Save for Later</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[20px] bg-white">
            <h2 className="font-bold">Contact Our Sales</h2>
            <div className="flex flex-col gap-[30px]">
              {[
                {
                  name: "Masayoshi",
                  role: "Sales Manager",
                  photo: "photo-1.png",
                },
                {
                  name: "Fuji Ovina",
                  role: "Sales Manager",
                  photo: "photo-2.png",
                },
              ].map((person, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden">
                      <Image
                        src={`/assets/images/photos/${person.photo}`}
                        alt={person.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <p className="font-bold">{person.name}</p>
                      <p className="text-sm leading-[21px]">{person.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="#">
                      <Image
                        src="/assets/images/icons/call-green.svg"
                        alt="call"
                        width={40}
                        height={40}
                      />
                    </a>
                    <a href="#">
                      <Image
                        src="/assets/images/icons/chat-green.svg"
                        alt="chat"
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
