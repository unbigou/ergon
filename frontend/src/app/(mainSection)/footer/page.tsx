import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
      <div className="text-white">
        <div className="bg-darkGreen h-36 w-full flex flex-row justify-around items-center">
          <div className=" ">
            <Image src="/logo.svg" width={240} height={240} alt={""} />
          </div>
          <div className=" ">
            <Link href={`/dashboard`} className="text-2xl font-extrabold">Inicio</Link>
          </div>
          <div className="flex flex-col  justify-center">
            <h1 className="font-extrabold text-2xl pb-2">Endereço</h1>
            <p className='w-72 text-justify'>Via Rosalina Maria dos Santos, 1233 - Vila Carolo, Campo Mourão - PR, 87301-899</p>
          </div>
          <div className="flex flex-col  justify-center">
            <h1 className="font-extrabold text-2xl pb-2">Contato</h1>
            <p>Emailmaluco@gmail.com</p>
            <p>{`(77)99883-1122`}</p>
          </div>
        </div>
      </div>
    );
}

