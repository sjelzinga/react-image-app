// export interface SearchResponseType<T> {
//   total: number;
//   total_pages: number;
//   results: T;
// }

export interface SearchResponseType {
  total: number;
  total_pages: number;
  results: PhotoObject[];
}

export interface PhotoObject {
  alt_description: string;
  categories: [];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Link;
  promoted_at: string | null;
  sponsorship: {};
  updated_at: string;
  urls: URLs;
  user: User;
  width: number;
}

interface Link {
  self?: string;
  html?: string;
  download?: string;
  download_location?: string;
  portfolio?: string;
  followers?: string;
  following?: string;
  photos?: string;
  likes?: string;
}

interface URLs {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  bio: string;
  accepted_tos: boolean;
  instagram_username: string;
  last_name: string;
  links: Link;
  location: string;
  portfolio_url: string;
  profile_image: ProfileImage;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: string | null;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}
