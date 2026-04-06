import { santoriniGuide } from "./santorini";
import type { DestinationGuide } from "./types";

export const destinationGuides: Record<string, DestinationGuide> = {
  santorini: santoriniGuide,
};
