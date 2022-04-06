export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: string;
  liked: boolean;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string
};

export interface ErrorResponse {
  error: string;
}

export type MediaReturn =
  | {
      page: number;
      per_page: number;
      total_results: number;
      media: ({ type: "Photo" })[];
    }
  | ErrorResponse;

export type CollectionData = {
    page: number;
    per_page: number;
    total_results: number;
    media: (Photo & {type: "Photo"})[];
}