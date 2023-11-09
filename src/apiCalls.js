const apiKey = process.env.REACT_APP_API_KEY;

export const cleanParksData = (parks) => {
  const parksData = parks.data;

  const foundParks = parksData.filter((park) => {
    if (park.designation === "National Park") {
      return true;
      // let cleanPark = {
      //   id: park.id,
      //   fullName: park.fullName ?? "No Name",
      //   url: park.url || "No website",
      //   description: park.description || "No description available",
      //   directionsUrl: park.directionsUrl || "No directions available",
      //   address: {
      //     street: park.addresses?.[0]?.line1 || "No street address",
      //     city: park.addresses?.[0]?.city || "No city",
      //     stateCode: park.addresses?.[0]?.stateCode || "NA",
      //     zip: park.addresses?.[0]?.postalCode || "00000",
      //   },
      //   images: park.images || [],
      //   weatherInfo: park.weatherInfo || "Weather information not available",
      // };
      // console.log(cleanPark);
      // return cleanPark;
    }
  });

  const cleanParks = foundParks.map((park) => {
    return {
      id: park.id,
      fullName: park.fullName ?? "No Name",
      visited: false,
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
  });

  return cleanParks;
};

export const getParks = () => {
  return fetch(
    `https://developer.nps.gov/api/v1/parks?limit=550&q=national%20park&api_key=${apiKey}`
  ).then((response) => {
    if (!response.ok) {
      console.log("response not okay");
      throw new Error(response.status);
    }
    return response.json();
  });
};
