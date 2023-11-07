// Think about setting all these with defaults in case there's something missing
export const cleanParkData = (parks) => {
  const parksData = parks.data;
  const cleanParks = parksData.map((park) => {
    let cleanPark = {
      id: park.id,
      fullName: park.fullName ?? "No Name",
      url: park.url || "No website",
      description: park.description || "No description available",
      directionsUrl: park.directionsUrl || "No directions available",
      address: {
        street: park.addresses?.[0]?.line1 || "No street address",
        city: park.addresses?.[0]?.city || "No city",
        stateCode: park.addresses?.[0]?.stateCode || "NA",
        zip: park.addresses?.[0]?.postalCode || "00000",
      },
      images: park.images || [],
      weatherInfo: park.weatherInfo || "Weather information not available",
    };
    // console.log(cleanPark);
    return cleanPark;
  });
  // console.log(cleanParks);
  return cleanParks;
};
