import { NextResponse } from 'next/server';

const INSTAGRAM_USERNAME = 'aartiofficialcenter';
const INSTAGRAM_APP_ID = '936619743392459';

export const revalidate = 3600;

interface InstagramPost {
  shortcode: string;
  permalink: string;
  imageUrl: string;
  caption: string;
  likes: number;
}

export async function GET() {
  try {
    const response = await fetch(
      `https://www.instagram.com/api/v1/users/web_profile_info/?username=${INSTAGRAM_USERNAME}`,
      {
        headers: {
          'X-IG-App-ID': INSTAGRAM_APP_ID,
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          Referer: 'https://www.instagram.com/',
          Origin: 'https://www.instagram.com',
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return NextResponse.json({ posts: [], error: 'Failed to fetch Instagram profile' });
    }

    const data = await response.json();
    const edges = data?.data?.user?.edge_owner_to_timeline_media?.edges ?? [];

    const posts: InstagramPost[] = edges.map((edge: { node: Record<string, unknown> }) => {
      const node = edge.node;
      const shortcode = node.shortcode as string;
      const captionEdge = (node.edge_media_to_caption as { edges?: { node?: { text?: string } }[] })?.edges?.[0];
      const likes = (node.edge_liked_by as { count?: number })?.count ?? 0;

      return {
        shortcode,
        permalink: `https://www.instagram.com/p/${shortcode}/`,
        imageUrl: node.display_url as string,
        caption: captionEdge?.node?.text ?? '',
        likes,
      };
    });

    return NextResponse.json({
      username: INSTAGRAM_USERNAME,
      profileUrl: `https://www.instagram.com/${INSTAGRAM_USERNAME}/`,
      posts,
    });
  } catch {
    return NextResponse.json({ posts: [], error: 'Instagram feed unavailable' });
  }
}
