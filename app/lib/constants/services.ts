import { ServiceType } from "../config/services";
export const destinations = ["united-states", "united-kingdom"];
export const services = [
  {
    type: ServiceType.US_ESTA,
    serviceSlug: "esta",
    destinationSlug: "united-states",
    name: "US ESTA",
  },
  {
    type: ServiceType.UK_ETA,
    serviceSlug: "uk-eta",
    destinationSlug: "united-kingdom",
    name: "UK ETA",
  },
];
