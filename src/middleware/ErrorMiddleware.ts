import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  // If this is a ZodError (cross-bundle safe detection), extract issues and return 400.
  const zodIssues = err && (Array.isArray(err.issues) ? err.issues : Array.isArray(err.errors) ? err.errors : null);

  if (zodIssues && zodIssues.length > 0) {
    const details = zodIssues.map((e: any) => ({ path: (e.path || []).join("."), message: e.message }));
    // Keep logs concise for validation errors (avoid noisy test output)
    if (process.env.NODE_ENV !== "test") {
      console.error(
        "LOG ZOD ERROR:",
        details.map((d: { path: string; message: string }) => `${d.path}:${d.message}`).join("; "),
      );
    }
    return res.status(400).json({ errors: details });
  }

  // Fallback: if error message contains a stringified ZodError array, try to parse it
  if (err && typeof err === "string") {
    const match = err.match(/\[.*\]/s);
    if (match) {
      try {
        const parsed = JSON.parse(match[0]);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const details = parsed.map((e: any) => ({ path: (e.path || []).join("."), message: e.message }));
          if (process.env.NODE_ENV !== "test") {
            console.error(
              "LOG ZOD ERROR (parsed):",
              details.map((d: { path: string; message: string }) => `${d.path}:${d.message}`).join("; "),
            );
          }
          return res.status(400).json({ errors: details });
        }
      } catch (e) {
        // ignore parse failures
      }
    }
  }

  // General error handling
  const status = err && typeof err.status === "number" ? err.status : 500;
  const message = err && err.message ? err.message : "Internal Server Error";

  // Log full error only outside test runs to avoid noisy test output
  if (process.env.NODE_ENV !== "test") console.error("LOG ERROR:", err);

  return res.status(status).json({ errors: message });
};
