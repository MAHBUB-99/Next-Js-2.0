import { getLocationByName } from "../location-utils";

export async function GET(request, { params }) {
  console.log(params?.name)
  const locationData = getLocationByName(params?.name);
  return Response.json(locationData);
}
