import { Request, Response, NextFunction } from "express";

type ErrorLike = { status?: number; message?: string; issues?: unknown[]; errors?: unknown[] };

function toDetail(item: unknown) {
  if (typeof item === "object" && item !== null) {
    const obj = item as Record<string, unknown>;
    const pathArr = Array.isArray(obj.path) ? obj.path.map(String) : [];
    const message = typeof obj.message === "string" ? obj.message : String(obj.message ?? item);
    return { path: pathArr.join("."), message };
  }
  return { path: "", message: String(item) };
}

export const errorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  // If this is a ZodError (cross-bundle safe detection), extract issues and return 400.
  const errObj = (err as ErrorLike) || {};
  const zodIssues = Array.isArray(errObj.issues)
    ? errObj.issues
    : Array.isArray(errObj.errors)
    ? errObj.errors
    : null;

  if (zodIssues && zodIssues.length > 0) {
    const details = zodIssues.map(toDetail);
    // Keep logs concise for validation errors (avoid noisy test output)
    if (process.env.NODE_ENV !== "test") {
      console.error("LOG ZOD ERROR:", details.map((d) => `${d.path}:${d.message}`).join("; "));
    }
    return res.status(400).json({ errors: details });
  }

  // Fallback: if error message contains a stringified ZodError array, try to parse it
  if (typeof err === "string") {
    const match = err.match(/\[.*\]/s);
    if (match) {
      try {
        const parsed = JSON.parse(match[0]);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const details = parsed.map(toDetail);
          if (process.env.NODE_ENV !== "test") {
            console.error("LOG ZOD ERROR (parsed):", details.map((d) => `${d.path}:${d.message}`).join("; "));
          }
          return res.status(400).json({ errors: details });
        }
      } catch (_e) {
        // ignore parse failures
      }
    }
  }

  // General error handling
  const status = typeof errObj.status === "number" ? errObj.status : 500;
  const message = typeof errObj.message === "string" ? errObj.message : "Internal Server Error";

  // Log full error only outside test runs to avoid noisy test output
  if (process.env.NODE_ENV !== "test") console.error("LOG ERROR:", err);

  return res.status(status).json({ errors: message });
};
