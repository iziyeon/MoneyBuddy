export interface MonthlyExpert {
  id: number;
  rank: number;
  name: string;
  description: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  imgUrl: string;
  isLiked?: boolean;
}
