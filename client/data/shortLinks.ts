export type ShortLinkSpec =
  | { type: "bundle"; value: string }
  | { type: "file"; value: string }
  | { type: "href"; value: string };

// Map YouTube short id -> download behavior
export const SHORT_LINKS: Record<string, ShortLinkSpec> = {
  "-XcTMb8_KXE": { type: "bundle", value: "short-1" },
  "0lG-3YGrjng": { type: "href", value: "https://www.youtube.com/shorts/ji37vWLK--s" },
  "wlg-bzvh72M": { type: "href", value: "https://www.youtube.com/watch?v=P1fgXln6PIU&t=" },
  "XtPP2UWjWoE": { type: "href", value: "https://www.mediafire.com/file/0zb7gye3jya2466/1.19+ALL+size+WDL+work.zip/file" },
};
