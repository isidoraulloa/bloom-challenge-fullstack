/** 
* Debes completar este archivo como consideres adecuado
*/

export default [
  {
    id: "posting",
    answers: [
      {
      type: "standard",
      text:  "",
    }
  ]
  },
  {
    id: "shipping",
    answers: [
      { 
        type: "pickup",
        text: 'Retiro directo a tu domicilio.',
      },
      {
        type: "blueexpress",
        text: 'Envío a través de Blue Express.',
      }
    ]
  },
  {
    id: "payment",
    answers: [
      {
        type: "cash",
        text: '80% de la venta final depositado a tu cuenta bancaria.'
      },
      {
        type: "coupon",
        text: '100% de la venta final en créditos de la tienda.'
      },
    ]
  },
  {
    id: "fees",
    answers: [
      {
      type: "cleaning",
      text: 'En caso de que la prenda esté sucia, se descontarán los costos de tintorería del pago final.'
    },
  ]
  },
  {
    id: "coupon",
    answers: [
      {
      type: "standard",
      text:  "",
    }
  ]
  },
];
