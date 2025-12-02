/** 
* Debes completar este modelo como consideres adecuado
*/
export type Faq = {
  id: string;
  answers?: Array<{
    type: string;
    text: string;
  }>;
};

export type Faqs = Faq[];