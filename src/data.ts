export interface Advantage {
  svgPath: string;
  title: string;
  desc: string;
}

export const advantages: Advantage[] = [
  { svgPath: '<rect x="4" y="14" width="16" height="6" rx="1"/><rect x="4" y="4" width="16" height="6" rx="1"/>', title: 'Extensive Inventory', desc: 'Access a substantial inventory of enterprise networking equipment and components.' },
  { svgPath: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>', title: 'Technical Expertise', desc: 'Work with experienced specialists in testing, repair, refurbishment, and hardware support.' },
  { svgPath: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>', title: 'Secure & Compliant Processes', desc: 'Protect assets and information through controlled processing and verified standards.' },
  { svgPath: '<path d="M4 12a8 8 0 0113-6M20 12a8 8 0 01-13 6"/><path d="M17 3v3h-3M7 21v-3h3"/>', title: 'Sustainable Asset Recovery', desc: 'Extend the useful life of IT equipment while reducing waste and recovering value.' },
];

export interface CatalogItem {
  name: string;
  category: string;
}

export const catalog: CatalogItem[] = [
  { name: 'Cisco Catalyst 9300 Switch', category: 'Networking' },
  { name: 'Dell PowerEdge R740 Server', category: 'Servers' },
  { name: 'Juniper MX204 Router', category: 'Networking' },
  { name: 'HP ProLiant DL380 Gen10', category: 'Servers' },
  { name: 'Arista 7050X Switch', category: 'Networking' },
  { name: 'Cisco ASR 1001-X Router', category: 'Networking' },
  { name: 'Dell EMC PowerVault Storage Array', category: 'Storage' },
];

export interface SolutionDef {
  title: string;
  desc: string;
  svgPath: string;
  angleDeg: number;
}

export const solutionDefs: SolutionDef[] = [
  { title: 'IT Asset Disposition', desc: 'Securely process, recover, and responsibly manage retired IT assets.', svgPath: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', angleDeg: -90 },
  { title: 'Board-Level Repair', desc: 'Restore critical hardware and components through specialized technical repair.', svgPath: '<path d="M14.7 6.3a4 4 0 11-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4z"/>', angleDeg: -30 },
  { title: '3PL & Fulfillment', desc: 'Streamline warehousing, configuration, blind drop shipping, and global fulfillment.', svgPath: '<rect x="3" y="9" width="12" height="8" rx="1"/><path d="M15 12h3l3 3v2h-6"/><circle cx="7" cy="19" r="1.6"/><circle cx="17" cy="19" r="1.6"/>', angleDeg: 30 },
  { title: 'Global Hardware Supply', desc: 'Source enterprise networking, server, storage, and component inventory worldwide.', svgPath: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13 13 0 010 18 13 13 0 010-18z"/>', angleDeg: 90 },
  { title: 'Asset Remarketing', desc: 'Recover more value through strategic resale and an established global buyer network.', svgPath: '<path d="M21 12a9 9 0 11-3-6.7"/><path d="M21 3v6h-6"/>', angleDeg: 150 },
  { title: 'Warranty & Support', desc: 'Protect your investment with extended coverage and responsive technical support.', svgPath: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>', angleDeg: 210 },
];

export interface QuoteOptionDef {
  label: string;
  sub: string;
  svgPath: string;
  dynLabel: string;
  dynPlaceholder: string;
}

export const quoteOptionDefs: QuoteOptionDef[] = [
  { label: 'Purchase hardware', sub: 'Pricing and availability', svgPath: '<circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none"/><circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none"/><path d="M2 3h2l2.4 12.2a2 2 0 002 1.8h8.6a2 2 0 002-1.8L21 8H6"/>', dynLabel: 'Part numbers or product list', dynPlaceholder: 'e.g. WS-C3850-48P-L (qty 12)' },
  { label: 'Sell equipment', sub: 'Get a valuation', svgPath: '<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.3 7L12 12l8.7-5M12 22V12"/>', dynLabel: "Equipment you're looking to sell", dynPlaceholder: 'e.g. 40x Cisco Catalyst 9300, good condition' },
  { label: 'Request a service', sub: 'Repair, ITAD, 3PL', svgPath: '<path d="M14.7 6.3a4 4 0 11-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4z"/>', dynLabel: 'Service needed', dynPlaceholder: 'e.g. Board-level repair for 12 line cards' },
  { label: 'General inquiry', sub: 'Talk to our team', svgPath: '<path d="M21 11.5a8.38 8.38 0 01-8.5 8.5A8.38 8.38 0 014 11.5 8.38 8.38 0 0112.5 3a8.38 8.38 0 018.5 8.5z"/><path d="M8 11.5h9M8 8h6M8 15h6"/>', dynLabel: 'Your question', dynPlaceholder: 'How can we help?' },
];

export interface ProcessStepDef {
  n: number;
  title: string;
  desc: string;
  bgImage: string;
}

export const processStepDefs: ProcessStepDef[] = [
  { n: 1, title: 'Receive', desc: 'Inventory, identify, grade, and document incoming equipment.', bgImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=70' },
  { n: 2, title: 'Restore', desc: 'Test, repair, refurbish, configure, and securely process each asset.', bgImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=70' },
  { n: 3, title: 'Redeploy', desc: 'Return equipment to service, fulfill customer orders, or recover its market value.', bgImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=70' },
];

export const manufacturers: string[] = ['Cisco', 'Arista', 'Juniper', 'HP / HPE', 'Dell'];

export interface NavLinkDef {
  title: string;
  sub?: string;
}

export const solutionsNavLinks: NavLinkDef[] = [
  { title: 'IT Asset Disposition', sub: 'Secure processing & recovery' },
  { title: 'Board-Level Repair', sub: 'Specialized technical repair' },
  { title: '3PL & Fulfillment', sub: 'Warehousing & global shipping' },
  { title: 'Global Hardware Supply', sub: 'Sourcing worldwide' },
  { title: 'Asset Remarketing', sub: 'Strategic resale network' },
  { title: 'Warranty & Support', sub: 'Extended coverage' },
];

export const buyCategoryLinks: string[] = ['Switches', 'Routers', 'Firewalls', 'Servers', 'Storage', 'Optics & Transceivers'];

export const headlineWords: string[] = ['Lifecycle', 'Repair', 'Recovery', 'Supply'];
