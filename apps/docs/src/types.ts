export interface ManifestEntry {
  name: string;
  file: string;
  type?: string;
  status?: string;
}

export interface ManifestData {
  system: string;
  version: string;
  foundations: ManifestEntry[];
  components: ManifestEntry[];
  patterns?: ManifestEntry[];
  examples?: ManifestEntry[];
}

export interface DocRecord {
  slug: string;
  title: string;
  path: string;
  body: string;
}

export interface NavItem {
  id: string;
  label: string;
  group: "overview" | "foundations" | "components";
}
