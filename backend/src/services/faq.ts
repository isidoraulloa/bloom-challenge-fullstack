import { Faq } from "../models/faq";
import faqs from "../data/faq";

const Faq = {
  list(): Promise<Faq[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(faqs as Faq[]);
      }, 1000);
    });
  },
};

export default Faq;
