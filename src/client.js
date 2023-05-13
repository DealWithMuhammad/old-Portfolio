import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "m6gr247p",
  dataset: "production",
  apiVersion: "2023-05-09",
  useCdn: true,
  token:
    "skJ6fXJSA1NyilcFJcKREu0vdrtghcAodg1VeMjQXFmOr2Bp7pwye7K9OXgF4a8OWnwd0AyQI83IwhSyhnmx3RIG7isj1hNSk10itUO3qX2WrFfkPuJscqlqHY1VZHb2NVhnsEoM69sslfoaCecHPbwST0xwRBscZ31JDk8h4W9LoIoZmVc4",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
