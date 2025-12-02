/** 
* Debes completar este modelo como consideres adecuado
*/
export type BrandSettings = {
  brandId: string;
  category: string;
  publication: string;
  shipping:  Array<string>;
  payment: Array<string>;
  fees: Array<string>,
  coupon: boolean,
};