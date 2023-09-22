import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || "",
});

export const convertImage = async (image: string) => {
  // eslint-disable-next-line max-len
  const model =
    // eslint-disable-next-line max-len
    "lucataco/sdxl-controlnet:db2ffdbdc7f6cb4d6dab512434679ee3366ae7ab84f89750f8947d5594b79a47";

  const prediction = (await replicate.run(model, {
    input: {
      image,
      prompt: "a picture of a house at night",
    },
  })) as Promise<string>;

  return prediction;
};
