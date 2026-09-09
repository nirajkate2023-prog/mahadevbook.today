import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const checklist = [
  ["HIGH", "Technical SEO", "Verify Google Search Console", "Make sure mahadevbooks.today is verified", "Done", 0.5, "Property verified in GSC (screenshots confirmed)", "https://search.google.com/search-console"],
  ["HIGH", "Technical SEO", "Create XML sitemap", "Create /sitemap.xml containing important public pages", "Done", 1, "17 URLs + lastmod dates added 8 Sep 2026", "https://mahadevbooks.today/sitemap.xml"],
  ["HIGH", "Technical SEO", "Submit sitemap", "Search Console → Sitemaps → submit sitemap.xml", "Done", 0.25, "Submitted Aug 24; Status Success; 17 pages discovered", ""],
  ["HIGH", "Technical SEO", "Create robots.txt", "Allow public pages and reference the sitemap; exclude private/admin areas", "Done", 0.5, "Allow / so Google can see noindex on login/register", "https://mahadevbooks.today/robots.txt"],
  ["HIGH", "Technical SEO", "Check indexing", "Search Console → Pages; investigate excluded/not-indexed important pages", "In Progress", 4, "4 indexed / 22 not indexed. Fixed 404/403/www/index.html/WP leftovers. Awaiting Google re-crawl.", ""],
  ["HIGH", "Technical SEO", "Check HTTPS", "Ensure all pages use HTTPS and HTTP redirects to HTTPS", "Done", 0.5, "htaccess forces HTTPS + non-www", ""],
  ["HIGH", "Technical SEO", "Canonical URLs", "Add correct canonical URL to important indexable pages", "Done", 1.5, "Canonicals on all indexable pages; www→apex redirect added", ""],
  ["HIGH", "On-Page SEO", "Homepage title", "Use one clear natural title focused on the main topic/brand", "Done", 0.5, "Mahadev Book Official | Cricket ID & Sports Betting Platform", ""],
  ["HIGH", "On-Page SEO", "Homepage meta description", "Write a unique useful description matching the actual page", "Done", 0.5, "Unique description set in root layout", ""],
  ["HIGH", "On-Page SEO", "One H1 per important page", "Make the H1 clearly describe the page main topic", "Done", 1, "Single H1 pattern used across pages", ""],
  ["HIGH", "On-Page SEO", "Unique titles", "Every important page should have a unique title", "Done", 1.5, "Unique metadata.title per route (~19 pages)", ""],
  ["HIGH", "On-Page SEO", "Unique descriptions", "Write a unique meta description for each important page", "Done", 1.5, "Unique metadata.description per route", ""],
  ["MEDIUM", "On-Page SEO", "Heading structure", "Use H2/H3 headings logically under the H1", "Done", 1, "Guides/blogs use H1→H2 structure", ""],
  ["MEDIUM", "On-Page SEO", "Clean URLs", "Use short descriptive URLs", "Done", 0.5, "Kebab-case URLs with trailingSlash=true", ""],
  ["MEDIUM", "Images", "Image filenames", "Use descriptive filenames instead of image1.jpg", "Partial", 0.5, "Mix of descriptive and generic/WP filenames remain", ""],
  ["MEDIUM", "Images", "Alt text", "Add accurate alt text where images convey useful information", "Done", 1, "Descriptive alt on content images; avoid keyword stuffing", ""],
  ["HIGH", "Internal Linking", "Homepage links", "Link important sections from the homepage", "Partial", 1, "Footer quick links expanded (incl. mahadev-book-online). Homepage body still light.", ""],
  ["HIGH", "Internal Linking", "Topic clusters", "Link related guides and topic pages together", "Partial", 1.5, "Related links on several guides/blogs; needs stronger cluster linking", ""],
  ["MEDIUM", "Performance", "Page speed", "Test important pages with PageSpeed Insights", "Not Started", 0, "Static export helps; PSI report not run yet", "https://pagespeed.web.dev/"],
  ["MEDIUM", "Performance", "Core Web Vitals", "Check LCP INP and CLS in Search Console", "Not Started", 0, "Pending GSC Experience review", ""],
  ["HIGH", "Mobile SEO", "Mobile usability", "Check navigation buttons text images and scrolling on phones", "Partial", 1, "Responsive layout present; confirm in GSC Mobile Usability", ""],
  ["MEDIUM", "Structured Data", "Organization schema", "Add only if it accurately represents the organization", "Done", 1, "Organization + WebSite JSON-LD on homepage", ""],
  ["MEDIUM", "Structured Data", "Breadcrumb schema", "Add BreadcrumbList where breadcrumbs are present", "Done", 1, "BreadcrumbList via Breadcrumb component", ""],
  ["MEDIUM", "Structured Data", "Article schema", "Use on genuine blog/article pages", "Done", 1.5, "Article schema on guides and blog posts", ""],
  ["HIGH", "Content", "Create useful guides", "Publish genuinely helpful content answering real user questions", "Done", 12, "Cricket/IPL/UPI guides + 5 blog articles live (SEO content work)", ""],
  ["HIGH", "Content", "Avoid thin/duplicate content", "Do not create many pages with nearly identical text", "Partial", 1, "noindex login/register; WP leftovers redirected; topical overlap still a risk", ""],
  ["MEDIUM", "Authority", "Relevant mentions", "Pursue legitimate relevant websites that may reference useful content", "Not Started", 0, "No link-building campaign yet", ""],
  ["HIGH", "Monitoring", "Weekly Search Console review", "Track queries pages clicks impressions CTR and average position", "In Progress", 1, "Initial deep audit done 8 Sep 2026. Set weekly cadence going forward.", ""],
];

const headers = ["Priority", "Category", "Task", "Details", "Status", "Hours Spent", "Notes / Result", "Links"];

function csvEscape(v) {
  const s = String(v ?? "");
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function toCsv(rows) {
  return rows.map((r) => r.map(csvEscape).join(",")).join("\n") + "\n";
}

mkdirSync(__dirname, { recursive: true });

const checklistRows = [headers, ...checklist];
writeFileSync(join(__dirname, "Mahadev_Books_SEO_Checklist_Updated.csv"), toCsv(checklistRows), "utf8");

const totalHours = checklist.reduce((s, r) => s + r[5], 0);
const count = (status) => checklist.filter((r) => r[4] === status).length;

const summary = [
  ["Metric", "Value"],
  ["Report date", "8 Sep 2026"],
  ["Domain", "mahadevbooks.today"],
  ["SEO status", "Technical setup mostly Done; indexing recovery In Progress; traffic still very low"],
  ["Indexed pages (GSC)", "4"],
  ["Not indexed pages (GSC)", "22"],
  ["Clicks (last ~3 months)", "1"],
  ["Impressions (last ~3 months)", "15"],
  ["Sitemap", "Success - 17 pages discovered"],
  ["Tasks Done", String(count("Done"))],
  ["Tasks In Progress", String(count("In Progress"))],
  ["Tasks Partial", String(count("Partial"))],
  ["Tasks Not Started", String(count("Not Started"))],
  ["Total SEO hours spent", String(totalHours)],
  ["Hours for client report", `${totalHours} hrs (range 35-40 hrs)`],
  ["Next focus", "Request indexing for main URLs; weekly GSC check; CWV/speed; stronger internal links"],
];
writeFileSync(join(__dirname, "Mahadev_Books_SEO_Time_Summary.csv"), toCsv(summary), "utf8");

const byCat = new Map();
for (const row of checklist) {
  const cat = row[1];
  const cur = byCat.get(cat) || { hours: 0, tasks: 0, done: 0 };
  cur.hours += row[5];
  cur.tasks += 1;
  if (row[4] === "Done") cur.done += 1;
  byCat.set(cat, cur);
}
const hoursRows = [
  ["Category", "Hours", "Tasks", "Done"],
  ...[...byCat.entries()]
    .sort((a, b) => b[1].hours - a[1].hours)
    .map(([cat, v]) => [cat, String(v.hours), String(v.tasks), String(v.done)]),
];
writeFileSync(join(__dirname, "Mahadev_Books_SEO_Hours_By_Category.csv"), toCsv(hoursRows), "utf8");

// Also write TSV for easy paste into Google Sheets
const tsv = checklistRows.map((r) => r.map((c) => String(c).replace(/\t/g, " ")).join("\t")).join("\n") + "\n";
writeFileSync(join(__dirname, "Mahadev_Books_SEO_Checklist_Updated.tsv"), tsv, "utf8");

console.log(`Total hours: ${totalHours}`);
console.log(`Done: ${count("Done")} | In Progress: ${count("In Progress")} | Partial: ${count("Partial")} | Not Started: ${count("Not Started")}`);
console.log(`Files written to ${__dirname}`);
