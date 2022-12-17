import { Encoding, Field, isReady, PrivateKey, Signature, UInt64 } from "snarkyjs";


export default defineEventHandler(async (event) => {
    await isReady;
    
    const coin = event.context.params.coin;
    console.log("coin: ", coin);

    const runtimeConfig = useRuntimeConfig();
    let oraclePublicKey58 = runtimeConfig.oraclePublicKey;
    let oraclePrivateKey = PrivateKey.fromBase58(runtimeConfig.oraclePrivateKey);

    let coinId = "mina-protocol";
    if(coin == "eth") {
        coinId = "ethereum";
    }

    let url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=USD`;
    console.log("url: ", url);
    const result = await $fetch(url);
  
    console.log("result: ", result);

    let coinPrice;
    if(coin == "eth") {
       coinPrice = {
          coin: "eth",
          price: (result as any)["ethereum"]["usd"] * 1000000 + '',
       };
    } else {
        coinPrice = {
            coin: "mina-protocol",
            price: (result as any)["mina-protocol"]["usd"] * 1000000 + '',
         };
    }

    let coinf = Encoding.Bijective.Fp.fromString(coinPrice.coin)[0];
    let pricef = Field(coinPrice.price);
    let sign = Signature.create(oraclePrivateKey, [coinf, pricef]).toJSON();

    return {
        data: coinPrice,
        signature: sign,
        publicKey: oraclePublicKey58
    }
});