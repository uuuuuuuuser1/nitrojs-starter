export default eventHandler(async (event) => {
  const ipLocation = await fetch("http://ip-api.com/json/")
    .then((res) => res.json())
    .catch(() => ({ status: "fail" }));

  if (ipLocation.status === "fail") {
    return `Hello! Failed to get the server location :(`;
  }

  const formattedTime = new Date().toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `Hello! This response was served from ${ipLocation.city}, ${ipLocation.country} (${ipLocation.lat}, ${ipLocation.lon}) at ${formattedTime}`;
});
