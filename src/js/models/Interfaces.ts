
export interface window {
  location: location;
}

export interface location {
  protocol?: string;
  hash?: string;
  host?: string;
  hostname?: string;
  href?: string;
  origin?: string;
  pathname?: string;
  port?: string;
}
