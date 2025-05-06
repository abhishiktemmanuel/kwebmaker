'use client';
import Image from 'next/image';
import Link from 'next/link';
import CTA from '@/components/CTA';
import ScrollingText from '@/components/Scrollingtext';
import Navbar from '@/components/Navbar';

export default function HomePageClient({ data }) {
  const banner = data?.banners?.[0];
  const categories = data?.categories || [];
  const aboutData = {
    title: data?.homeAboutTitle,
    subtitle: data?.homeAboutSubtitle,
    description: data?.homeAboutDescription
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="min-h-screen relative bg-cover bg-center"
        style={{ backgroundImage: `url(${banner?.bannerImage?.node?.sourceUrl || '/default-bg.jpg'})` }}
      >
        <div className="absolute inset-0 bg-black/50">
          <Navbar />
          
          <div className="container mx-auto px-4 h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {banner?.bannersTitle || 'GROW YOUR GAME WITH THE'}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {banner?.bannerDescription || 'PROFESSIONALS'}
            </p>
            
            {banner?.bannerButton && (
              <CTA 
                text={banner.bannerButton.title} 
                href={banner.bannerButton.url}
                className="px-8 py-3 text-lg"
              />
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{aboutData.title || 'About Us'}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {aboutData.subtitle || 'We have created an environment ideal for building craft'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video">
              <Image
                src="/about-image.jpg"
                alt="About"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                {aboutData.description || 'Our goal is to be recognized as the best urban performance center in the world...'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <div className="relative aspect-square">
                  <Image
                    src={category.image?.node?.sourceUrl || '/program-default.jpg'}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Text Section */}
      <ScrollingText 
        text="ADOPT • NURTURE • DELIVER"
        className="bg-gray-800 text-white py-6"
      />
    </main>
  );
}