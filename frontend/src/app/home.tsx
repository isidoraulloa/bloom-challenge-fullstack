import Image from "next/image";
import { type NextRequest, NextResponse } from 'next/server'



const response = await fetch('http://localhost:8000/brands'); 
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}
const brands = await response.json();


export const Home = () => (
  <div className="flex h-full w-full flex-col p-8">
    
    <div>
      <h1 className="text-center text-4xl">Desafío Dev</h1>
    </div>
    
      {
      brands.map((b) => (
        <>
        <div className="text-center text-xl" key={b.id}>
          <a href={"faq/"+b.id}>
            <div align="center">
              <Image
              className="h-14 w-auto relative"
              src={`/images/logo_${b.id}.png`}
              alt={`Logo ${b.name}`}
              width={400}
              height={100}
              
              />
            </div>
            <h1>{b.name}</h1>
          </a>
          <hr/>
        </div>
          </>))
        
        }
        
    
  </div>
);
