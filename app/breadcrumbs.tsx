import Link from "next/link";
import JsonLd from "./json-ld";
import { pages, siteUrl, type PagePath } from "./seo";
import styles from "./breadcrumbs.module.css";

export default function Breadcrumbs({ path }: { path: Exclude<PagePath, "/"> }) {
  const name = pages[path].label;
  return <>
    <nav className={styles.breadcrumbs} aria-label="Sayfa yolu">
      <ol><li><Link href="/">Ana Sayfa</Link></li><li><span aria-hidden="true">›</span><span aria-current="page">{name}</span></li></ol>
    </nav>
    <JsonLd data={{
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: pages["/"].label, item: siteUrl("/") },
        { "@type": "ListItem", position: 2, name, item: siteUrl(path) },
      ],
    }} />
  </>;
}
