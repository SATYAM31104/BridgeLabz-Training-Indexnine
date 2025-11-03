const mall = {
  name: "Mall of Irvine",
  address: {
    street: "123 Main Street",
    city: "Irvine",
    state: "CA",
  },
  restaurants: ["Red Robin", "Chili's", "Olive Garden"],
  fastFood: ["Panda Express", "Subway", "Popeyes", "McDonalds", "Pizza Town"],
  anchorStores: ["Macys", "Dillards", "Target"],
  chargingStations : 300,
  getParkingInfo : function () {
    return `The mall has ${this.chargingStations} charging stations available for electric vehicles.`;
  }
};

console.log(mall);console.log(mall.getParkingInfo());