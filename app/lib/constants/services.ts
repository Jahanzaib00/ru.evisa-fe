import { ServiceType } from "../config/services";
export const destinations = ["united-states", "united-kingdom", "canada", "thailand", "indonesia", "malaysia"];
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
  {
    type: ServiceType.CANADA_ETA,
    serviceSlug: "canada-eta",
    destinationSlug: "canada",
    name: "Canada eTA",
  },
  {
    type: ServiceType.THAILAND_TDAC,
    serviceSlug: "thailand-tdac",
    destinationSlug: "thailand",
    name: "Thailand TDAC",
  },
  {
    type: ServiceType.INDONESIA_EVOA,
    serviceSlug: "indonesia-evoa",
    destinationSlug: "indonesia",
    name: "Indonesia eVOA",
  },
  {
    type: ServiceType.MALAYSIA_MDAC,
    serviceSlug: "malaysia-mdac",
    destinationSlug: "malaysia",
    name: "Malaysia MDAC",
  },
];
