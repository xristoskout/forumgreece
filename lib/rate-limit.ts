import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function checkRateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 60 * 1000
): Promise<{ allowed: boolean; remaining: number }> {
  try {
    const windowSec = Math.ceil(windowMs / 1000);

    const limit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(maxRequests, `${windowSec} s`),
      analytics: false,
    });

    const { success, remaining } = await limit.limit(identifier);
    return { allowed: success, remaining };
  } catch {
    return { allowed: true, remaining: maxRequests };
  }
}

export function getIP(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0] ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}
