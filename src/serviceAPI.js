const services = [
  {
    id: "ie-1",
    section: "IE",
    taxation: "single tax",
    vat: false,
    price: 700,
  },
  {
    id: "ie-1",
    section: "IE",
    taxation: "single tax",
    vat: true,
    price: 1700,
  },
  {
    id: "ie-2",
    section: "IE",
    taxation: "general",
    vat: false,
    price: 3000,
  },
  {
    id: "ie-2",
    section: "IE",
    taxation: "general",
    vat: true,
    price: 4000,
  },
  {
    id: "llc-1",
    section: "LLC",
    taxation: "single tax",
    vat: false,
    employee: 0,
    price: 5000,
  },
  {
    id: "llc-1",
    section: "LLC",
    taxation: "single tax",
    vat: true,
    employee: 0,
    price: 6000,
  },
  {
    id: "llc-2",
    section: "LLC",
    taxation: "general",
    vat: true,
    employee: 0,
    price: 7000,
  },
  {
    id: "llc-2",
    section: "LLC",
    taxation: "general",
    vat: false,
    employee: 0,
    price: 6000,
  },
];

export const getServices = () => {
  return services;
};

export const getServicesBySection = (serviceSection) => {
  return services.find((service) => service.section === serviceSection);
};
