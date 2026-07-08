'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { fallbackInstagramPosts, INSTAGRAM_PROFILE_URL, INSTAGRAM_USERNAME } from '@/data/instagramPosts';

interface InstagramPost {
  shortcode: string;
  permalink: string;
  imageUrl: string;
  caption: string;
  likes: number;
}

interface InstagramFeedResponse {
  username: string;
  profileUrl: string;
  posts: InstagramPost[];
  source?: 'graph' | 'web' | 'embed';
}

function InstagramEmbeds({ posts }: { posts: InstagramPost[] }) {
  useEffect(() => {
    const instgrm = (window as Window & { instgrm?: { Embeds?: { process: () => void } } }).instgrm;
    instgrm?.Embeds?.process();
  }, [posts]);

  return (
    <>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {posts.map((post) => (
          <div key={post.shortcode} className="flex justify-center [&_.instagram-media]:!m-0 [&_.instagram-media]:!w-full [&_.instagram-media]:!max-w-full [&_.instagram-media]:!min-w-0">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={post.permalink}
              data-instgrm-version="14"
              style={{ background: '#FFF', border: 0, borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', margin: 0, maxWidth: '100%', minWidth: 0, padding: 0, width: '100%' }}
            >
              <a href={post.permalink} target="_blank" rel="noreferrer">
                {post.caption.slice(0, 80) || 'View on Instagram'}
              </a>
            </blockquote>
          </div>
        ))}
      </div>
    </>
  );
}

function InstagramImageGrid({ posts }: { posts: InstagramPost[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
      {posts.map((post) => (
        <a
          key={post.shortcode}
          href={post.permalink}
          target="_blank"
          rel="noreferrer"
          className="group relative aspect-square overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <Image
            src={post.imageUrl}
            alt={post.caption.slice(0, 100) || 'AARTI Instagram post'}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            {post.caption && (
              <p className="text-white text-sm line-clamp-3 mb-2">{post.caption}</p>
            )}
            <div className="flex items-center gap-1.5 text-white/90 text-xs">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {post.likes > 0 && <span>{post.likes}</span>}
              <span className="ml-auto flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A4.5 4.5 0 107 12a4.5 4.5 0 005-4.5zm0 2A2.5 2.5 0 1110.5 12 2.5 2.5 0 0112 9.5zm4.75-4.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z" />
                </svg>
                View
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function InstagramFeed() {
  const [feed, setFeed] = useState<InstagramFeedResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/instagram')
      .then((res) => res.json())
      .then((data: InstagramFeedResponse) => setFeed(data))
      .catch(() =>
        setFeed({
          username: INSTAGRAM_USERNAME,
          profileUrl: INSTAGRAM_PROFILE_URL,
          posts: fallbackInstagramPosts,
          source: 'embed',
        })
      )
      .finally(() => setLoading(false));
  }, []);

  const profileUrl = feed?.profileUrl ?? INSTAGRAM_PROFILE_URL;
  const posts = feed?.posts ?? [];
  const useEmbeds = feed?.source === 'embed' || posts.every((post) => !post.imageUrl);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wide block mb-2">
            Follow Our Journey
          </span>
          <div className="inline-block mb-3 sm:mb-4">
            <div className="w-16 h-1 bg-secondary/30 mx-auto mb-2"></div>
            <div className="w-10 h-1 bg-secondary/60 mx-auto"></div>
          </div>
          <h2 className="text-[24px] sm:text-3xl md:text-4xl font-bold text-black leading-[1.3] mb-4">
            Latest on Instagram
          </h2>
          <p className="text-base sm:text-lg text-paragraph max-w-2xl mx-auto">
            Stay connected with AARTI updates, events, and youth empowerment stories on{' '}
            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold hover:text-secondary transition"
            >
              @{feed?.username ?? INSTAGRAM_USERNAME}
            </a>
            .
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-2xl bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : posts.length > 0 ? (
          useEmbeds ? <InstagramEmbeds posts={posts} /> : <InstagramImageGrid posts={posts} />
        ) : (
          <p className="text-center text-paragraph">
            Instagram posts are temporarily unavailable.{' '}
            <a href={profileUrl} target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline">
              Visit our profile
            </a>
            .
          </p>
        )}

        <div className="text-center mt-10">
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A4.5 4.5 0 107 12a4.5 4.5 0 005-4.5zm0 2A2.5 2.5 0 1110.5 12 2.5 2.5 0 0112 9.5zm4.75-4.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z" />
            </svg>
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
