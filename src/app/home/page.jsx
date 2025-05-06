'use client';

import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home({ pageData }) {
  const router = useRouter();
  
  // Fallback data in case API doesn't return
  const {
    banners = [],
    homeAboutTitle = 'Default About Title',
    homeAboutSubtitle = 'Default About Subtitle',
    homeAboutVideoImage,
    categories = [],
    homeJoinTitle = 'Join Our Community',
    homeJoinSubtitle = 'Start your journey today'
  } = pageData || {};

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section
        id="home"
        className="home min-h-screen bg-cover bg-center sticky top-0"
        style={{ 
          backgroundImage: `url(${banners[0]?.bannerImage?.node?.sourceUrl || '/ezgif 1.gif'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <Navbar />
        <div className="home-content flex flex-col items-center justify-center h-screen space-y-8">
          <div className="text-center">
            <p className="text-2xl mb-2 uppercase">
              {banners[0]?.bannerDescription || 'Grow Your Game with the'}
            </p>
            <p className="text-2xl underline underline-offset-12 font-bold uppercase mt-2">
              {banners[0]?.bannersTitle || 'Professionals'}
            </p>
          </div>

          <div className="relative w-full text-center">
            <div className="absolute w-xl h-full bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-20"></div>
            <p className="text-xl tracking-widest relative z-10 uppercase">
              ADOPT • NURTURE • DELIVER
            </p>
          </div>
          
          <CTA
            text={banners[0]?.bannerButton?.title || "Register Now"}
            onClick={() => router.push(banners[0]?.bannerButton?.url || '/contact')}
          />

          <a href="#about" className="absolute bottom-8 animate-bounce">
            <svg
              width="24"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M12 5v20M5 17l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen sticky top-0 bg-gray-900">
        <div className="flex-1 flex flex-col items-center pt-20">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4">{homeAboutTitle}</h2>
            <p className="text-2xl">{homeAboutSubtitle}</p>
          </div>

          <div className="flex justify-center items-start gap-8 relative">
            <div className="flex gap-8">
              <div className="w-64">
                <Image
                  src={homeAboutVideoImage?.node?.sourceUrl || '/image1.jpg'}
                  alt="About"
                  width={256}
                  height={256}
                  className="w-64 h-64 object-cover"
                />
              </div>
              <div className="w-64">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  {pageData?.homeAboutDescription || 'Default mission text...'}
                </p>
              </div>
            </div>

            <div className="w-64">
              <Image
                src="/image2.jpg"
                alt="Secondary"
                width={256}
                height={256}
                className="w-64 h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Join Section */}
        <div className="min-h-36 bg-teal-600 relative">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white py-20">
            <div className="text-center max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">{homeJoinTitle}</h2>
              <p className="text-xl mb-8">{homeJoinSubtitle}</p>
              <CTA
                text={pageData?.homeJoinButton?.title || "Join Now"}
                onClick={() => router.push(pageData?.homeJoinButton?.url || '/contact')}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}