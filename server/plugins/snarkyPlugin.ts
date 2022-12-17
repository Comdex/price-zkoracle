import { Nitro } from "nitropack";

export default async (_nitroApp: Nitro) => {
  try {
    console.log("start load snarkyjs");
    await isReady;
    console.log("load snarkyjs done");
  } catch (err) {
    console.error("load snarkyjs failed.", err);
  }
};