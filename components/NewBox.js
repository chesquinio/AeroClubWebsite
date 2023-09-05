import Link from "next/link";
import React from "react";
import TextLimit from "./TextLimit";
import { useRouter } from 'next/router';

function NewBox({ oneNew, isLoading }) {
  const router = useRouter();

  const goToNew = (id) => {
    router.push(`/noticias/${id}`);
  }

  return (
    <div className="p-3 bg-transparent rounded my-4 hover:shadow-xl transition-all duration-500">
      <div className={!isLoading ? 'lazy-load' : 'h-96'}>
        <div key={oneNew._id}>
          <div onClick={() => goToNew(oneNew._id)} className="flex justify-center cursor-pointer">
            <img className="rounded shadow-sm object-cover h-48 w-96" src={oneNew.images[0]} alt={oneNew.title} />
          </div>
          <h4 className="text-lg font-medium mt-4 mx-3">{oneNew.title}</h4>
          <TextLimit text={oneNew.description} maxWords={20} />
          <div className="flex justify-end">
            <Link className="text-xl text-white bg-moreblue hover:bg-cyan-700 py-1 px-2 rounded-full transition ease-in-out" href={`/noticias/${oneNew._id}`}><p className="pt-0.5 pl-0.5"><i class='bx bx-chevrons-right'></i></p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBox;
