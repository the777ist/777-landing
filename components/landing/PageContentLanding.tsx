import React, { useEffect, useRef, useMemo, useState } from "react";
import styles from "./PageContentLanding.module.css";
import Image from "next/legacy/image";
import { useAtom } from "jotai";
import { isMobileAtom } from "@/store/atoms";

interface PageContentLandingProps {
};

type Active = "blog" | "events" | "music" | "artists" | "venues" | "default";

const PageContentLanding: React.FC<PageContentLandingProps> = () => {
  const [active, setActive] = useState<Active>("default");
  const [transform, setTransform] = useState(0);
  const [isMobile] = useAtom(isMobileAtom);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActive("default");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setActive]);

  const text: Record<Active, string[]> = {
    blog: [
      "Stay updated on breaking news, insider information and exclusive insights",
      "into the most exciting artists and events shaping the alternative music scene"
    ],
    events: [
      "Discover events and concerts in a city near you",
      "get priority access through our ticketing platform",
      "watch your favourite artists at your favourite venues",
    ],
    music: [
      "Stream exclusive music",
      "from the most promising and groundbreaking artists",
      "in alt and independent music"],
    artists: [
      "Meet the artists we love and celebrate",
      "book tickets to a gig, stream their music",
      "read our features and interviews, bios and more."
    ],
    venues: [
      "Your favourite venues listed, discover the coolest and most iconic spaces",
      "know the latest events, experience the vibe and culture, book your tickets!"
    ],
    default: [
      "The777incident is a space for new wave creatives and artists in an alt universe",
      "Music streaming. blog. events. social network. community.",
    ]
  };

  const images: Record<Active, string[]> = useMemo(() => ({
    blog: [
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Blog/1.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Blog/2.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Blog/3.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Blog/4.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Blog/5.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Blog/6.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Blog/7.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Blog/8.jpg"
    ],
    events: [
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Events/1.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Events/2.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Events/3.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Events/4.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Events/5.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Events/6.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Events/7.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Events/8.jpg",
    ],
    music: [
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Music/1.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Music/2.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Music/3.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Music/4.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Music/5.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Music/6.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Music/7.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Music/8.jpg",
    ],
    artists: [
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Artists/1.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Artists/2.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Artists/3.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Artists/4.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Artists/5.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Artists/6.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Artists/7.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Artists/8.jpg",
    ],
    venues: [
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Venues/1.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Venues/2.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Venues/3.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Venues/4.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Venues/5.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Venues/6.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Venues/7.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Profiles/Venues/8.jpg",
    ],
    default: [
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Default/1.png",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Default/2.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Default/3.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Default/4.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Default/5.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Default/6.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Default/7.jpg",
      "https://fggmassppfayioprzeer.supabase.co/storage/v1/object/public/landing/Default/8.jpg",
    ]
  }), []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        if (images[active] && images[active].length > 0) {
          setCurrentImageIndex((currentImageIndex + 1) % images[active].length);
          setIsFading(false);
        }
      }, 1000);
    }, 3000);

    return () => clearInterval(timer);
  }, [active, currentImageIndex, images]);

  return (
    <div className={styles.pageContentLanding}>
      {/* Pre-fetch images */}
      {Object.values(images).map((imageArray, index) =>
        imageArray.slice(0, 3).map((imageUrl, i) => (
          <div key={index + "-" + i} style={{ opacity: 0, zIndex: "-99999" }}>
            <Image
              src={imageUrl}
              alt={`Pre-fetch image ${i}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={isMobile ? 30 : 50}
              priority={true}
            />
          </div>
        ))
      )}
      <div className={`${styles.contentContainerLanding} ${styles.first}`}>
        <div className={styles.carousel}>
          <div className={`${styles.carouselImage} ${isFading ? styles.fadeOut : styles.fadeIn} ${styles.carouselImageFirst}`}>
            <Image
              src={images[active][currentImageIndex]}
              alt={`Carousel image ${currentImageIndex}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={isMobile ? 30 : 50}
              priority={false}
            />
          </div>
          <div className={`${styles.carouselImage} ${isFading ? styles.fadeOut : styles.fadeIn} ${styles.carouselImageSecond}`}>
            <Image
              src={images[active][(currentImageIndex + 1) % images[active].length]}
              alt={`Carousel image ${(currentImageIndex + 1) % images[active].length}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={isMobile ? 30 : 50}
              priority={true}
            />
          </div>
        </div>
        <div key={text[active].join("")} className={styles.text}>
          {text[active].map((item, key, arr) => {
            return <span key={key}>{item}{key !== arr.length - 1 && <><br /><br /></>}</span>
          })}
        </div>
      </div>
      <div ref={containerRef} className={`${styles.contentContainerLanding} ${styles.second}`}>
        <div className={`${styles.navText} ${active === "blog" ? styles.navTextActive : ""}`} onClick={() => {
          setActive("blog");
          setCurrentImageIndex(0)
        }}>
          Blog
        </div>
        <div className={`${styles.navText} ${active === "events" ? styles.navTextActive : ""}`} onClick={() => {
          setActive("events");
          setCurrentImageIndex(0)
        }}>
          Events
        </div>
        <div className={`${styles.navText} ${active === "music" ? styles.navTextActive : ""}`} onClick={() => {
          setActive("music");
          setCurrentImageIndex(0)
        }}>
          Music
        </div>
        <div className={`${styles.navText} ${active === "artists" ? styles.navTextActive : ""}`} onClick={() => {
          setActive("artists");
          setCurrentImageIndex(0)
        }}>
          Artists
        </div>
        <div className={`${styles.navText} ${active === "venues" ? styles.navTextActive : ""}`} onClick={() => {
          setActive("venues");
          setCurrentImageIndex(0)
        }}>
          Venues
        </div>
      </div>
    </div>
  );
};

export default PageContentLanding;