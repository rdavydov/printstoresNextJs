import { Request } from "../../http/Request";
import { ReviewsCreateResponse, ReviewsResponse } from "./types/reviews.types";

class ReviewsService {
  private request = new Request("reviews");

  create(body): Promise<ReviewsCreateResponse> {
    return this.request.POST("create", body);
  }

  getReviews(): Promise<ReviewsResponse[]> {
    return this.request.GET({ url: "list" });
  }
}

export const reviewsService = new ReviewsService();
