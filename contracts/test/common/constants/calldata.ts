import { generateKeccak256 } from "../helpers";

export const SAMPLE_FUNCTION_CALLDATA = generateKeccak256(["string"], ["callThisFunction()"], true).substring(0, 10); // 0x + 4 bytes
export const EMPTY_CALLDATA = "0x";

// TODO: CLEANUP TO MAKE THIS DYNAMIC AND NOT CONSTANT
export const Add_L1L2_Message_Hashes_Calldata_With_Empty_Array =
  "0xf4b476e10000000000000000000000000000000000000000000000000000000000000000";
export const Add_L1L2_Message_Hashes_Calldata_With_One_Hash =
  "0xf4b476e100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001f57d2ce8b7fc0df7ae7cbddaa706242a118bd8b649abccfecfb3f8e419729ca9";
export const Single_Item_L1L2_HashArray = ["0xf57d2ce8b7fc0df7ae7cbddaa706242a118bd8b649abccfecfb3f8e419729ca9"];

// TODO: CLEANUP TO MAKE THIS DYNAMIC AND NOT CONSTANT
export const Add_L1L2_Message_Hashes_Calldata_With_Five_Hashes =
  "0xf4b476e100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000005f887bbc07b0e849fb625aafadf4cb6b65b98e492fbb689705312bf1db98ead7fdd87bbc07b0e849fb625aafadf4cb6b65b98e492fbb689705312bf1db98ead7faa87bbc07b0e849fb625aafadf4cb6b65b98e492fbb689705312bf1db98ead7fcc87bbc07b0e849fb625aafadf4cb6b65b98e492fbb689705312bf1db98ead7f1187bbc07b0e849fb625aafadf4cb6b65b98e492fbb689705312bf1db98ead7f";
export const L1L2_FiveHashes = [
  "0xf887bbc07b0e849fb625aafadf4cb6b65b98e492fbb689705312bf1db98ead7f",
  "0xdd87bbc07b0e849fb625aafadf4cb6b65b98e492fbb689705312bf1db98ead7f",
  "0xaa87bbc07b0e849fb625aafadf4cb6b65b98e492fbb689705312bf1db98ead7f",
  "0xcc87bbc07b0e849fb625aafadf4cb6b65b98e492fbb689705312bf1db98ead7f",
  "0x1187bbc07b0e849fb625aafadf4cb6b65b98e492fbb689705312bf1db98ead7f",
];