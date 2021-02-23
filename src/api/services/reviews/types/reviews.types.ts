export interface ReviewsResponse {
  clientName: string;
  photo?: Array<Blob | File>;
  orderNumber: string;
  email: string;
  phone: number;
  message: string;
  rating: number;
  created_at: string;
  _id: number;
}

export interface ReviewsCreateResponse {
  recaptcha_validate: boolean;
}
