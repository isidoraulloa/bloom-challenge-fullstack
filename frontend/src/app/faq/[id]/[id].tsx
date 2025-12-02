import Image from "next/image";

import { useRouter, usePathname, useSearchParams} from 'next/navigation'

const basePath = `http://localhost:8000`

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  const data = await response.json();
  return (data)

}

export const BrandByID = async () => {
  const currentPath = usePathname()
  const id = currentPath.split('/').pop()
  
  const brandUrl = (`${basePath}/brands/${id}`)
  const faqUrl = (`${basePath}/faq`)
  
  // const brandResponse = await fetch(url);
  // if (!brandResponse.ok) {
  //     throw new Error(`HTTP error! status: ${brandResponse.status}`);
  //   }
  // const brand = brandResponse.json();
  const brand = await fetchData(brandUrl)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const fees = brand.settings.fees.length > 0
  const coupon = brand.settings.coupon

  const faqs = await fetchData(faqUrl);
  const shippingTerms = faqs.find((faq) => faq.id === "shipping").answers;
  const shipping = shippingTerms.filter((term) => brand.settings.shipping.includes(term.type));

  const paymentTerms = faqs.find((faq) => faq.id === "payment").answers;
  const payment = paymentTerms.filter((term) => brand.settings.payment.includes(term.type));

  const feesTerms = faqs.find((faq) => faq.id === "fees").answers;
  const fee = feesTerms.filter((term) => brand.settings.fees.includes(term.type));
  
  return (
  <div className="flex h-full w-full flex-col p-8">
    
    <div>
      <h1 className="text-center text-4xl">Preguntas Frecuentes</h1>
      
    </div>
    
    {/* // {brand.map((b) => ( */}
    <div className="text-center limited-width">
      <div align="center">
        <Image
                      className="h-14 w-auto"
                      src={`/images/logo_${brand.id}.png`}
                      alt={`Logo ${brand.name}`}
                      width={600}
                      height={150}
                      
                      />
      </div>
      
      <div>
        <h2 className="text-2xl text-left">¿Cómo puedo publicar un producto para la venta?</h2>
        <p>¡Publicar tu producto es muy fácil! Simplemente haz clic en "Vender", crea una cuenta y sigue el proceso de publicación. Una vez que completes el formulario de venta, la publicación será revisada por nuestro equipo y en un plazo máximo de 24 horas, te avisaremos si está aprobada o rechazada. Después de ser revisada y aprobada, se hará pública. Si hay algún problema, recibirás un correo electrónico pidiendo hacer cambios antes de que pueda ser aceptada.</p>
        </div>
      <div>
        <h2 className="text-2xl text-left">¿Cómo envío mi artículo después de que alguien lo compra?</h2>
        <p>Para esta marca, tienes las siguientes opciones de entrega:</p>
        <ul className="c">
        {shipping.map((s) => (<li key={s.type}>{s.text}</li>))}
        </ul>
        </div>
      <div>
        <h2 className="text-2xl text-left">¿Cómo y cuándo recibo el pago?</h2>
        <p>Para esta marca, tienes las siguientes opciones de pago:</p>
        </div>
        <ul className="c">
        {payment.map((p) => (<li key={p.type}>{p.text}</li>))}
        </ul>
      <div>
        <h2 className="text-2xl text-left">¿Hay cobros adicionales por vender mi producto por acá?</h2>
        <div>
        {fees ? (
        <><p>Debes tener en cuenta los siguientes cargos adicionales:</p>
        <ul className="c">
        {fee.map((f) => (<li key={f.type}>{f.text}</li>))}
        </ul>
        </>
      ) : (
        <><p>No te preocupes, ¡no hay cargos adicionales por vender con esta marca!</p>
        </>
      )}
        </div>
        </div>
      <div>
        {coupon ? (
          <><h2 className="text-2xl text-left">Política de uso de cupones</h2>
          <p>Los cupones que recibas por la venta de tus productos tienen las siguientes restricciones:</p>
          <ul className="c">
              <li>Se pueden utilizar únicamente para compras en el sitio web de <u><a href={brand.url}>{brand.name}</a></u>.</li>
              <li>Tiene un tiempo máximo para ser utilizado de 6 meses.</li>
              <li>Está restringido a un monto mínimo de pedido para que pueda utilizarse en el ecommerce. El monto mínimo está definido por el monto del cupón + $1.000 CLP.</li>
            </ul></>
      ) : (
          <p></p> 
        )}
      </div>
    </div>
    
  </div>
  )
};
