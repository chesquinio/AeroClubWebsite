import Link from "next/link";
import React from "react";
import TextLimit from "./TextLimit";
import { useRouter } from 'next/router';

function NewBox({ oneNew }) {
  const router = useRouter();

  const goToNew = (id) => {
    router.push(`/noticias/${id}`);
  }

  return (
    <div className="p-3 bg-white rounded my-4 hover:shadow-xl transition-all">
      <div key={oneNew._id}>
        <div onClick={() => goToNew(oneNew._id)} className="flex justify-center cursor-pointer">
          <img className="rounded shadow-sm object-cover h-48 w-96" src={oneNew.images[0]} alt="" />
        </div>
        <h4 className="boxTitle font-medium mt-4 mx-3">{oneNew.title}</h4>
        <TextLimit text={oneNew.description} maxWords={20} />
        <div className="flex justify-end my-3">
          <Link className="text-sm text-white bg-moreligthblue hover:bg-darkblue py-1 px-3 rounded transition ease-in-out" href={`/noticias/${oneNew._id}`}>Leer mas</Link>
        </div>
      </div>
    </div>
  );
}

export default NewBox;
