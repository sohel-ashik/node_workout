import { NextFunction, Request, Response } from "express";

const MAX_REQUESTS = 5;
const WINDOW_MS = 10 * 1000; // 10 seconds

const requestTracker = new Map<string, number[]>();

export const rateLimit = (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip;
    if (!ip) {
        return res.status(400).json({ error: "IP address not found" });
    }

    const now = Date.now();
    const windowStart = now - WINDOW_MS;

    // Get existing timestamps and filter to only those within window
    const timestamps = (requestTracker.get(ip) || []).filter(t => t > windowStart);

    if (timestamps.length >= MAX_REQUESTS) {
        return res.status(429).json({ error: "Rate limit exceeded. Try again later." });
    }

    // Add current request and save
    timestamps.push(now);
    requestTracker.set(ip, timestamps);

    next();
};