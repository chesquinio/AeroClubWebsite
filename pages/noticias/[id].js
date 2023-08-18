import Header from '@/components/Header'
import { mongooseConnect } from '@/lib/mongoose';
import { News } from '@/model/News';

function OneNew({ oneNew }) {
    
  return (
    <>
        <Header />
        <div className='mx-5'>
          <div className='flex flex-col gap-1 rounded-md shadow-md bg-whiteblue mt-28 mx-auto container'>
              <div className='p-3 m-auto'>
                  <img className='object-scale-down rounded-md' src={oneNew.images[0]} alt={oneNew.title} />
              </div>
              <h3 className='title font-medium mx-5 mt-3'>{oneNew.title}</h3>
              <p className='mx-5 my-3'>{oneNew.description}</p>
          </div>
        </div>
    </>
  )
}

export default OneNew

export async function getServerSideProps(context) {
    const id = context.params.id;
    await mongooseConnect()

    const oneNew = await News.findOne({_id: id});
    const serializedOneNew = JSON.parse(JSON.stringify(oneNew));

    return {
        props: {
          oneNew: serializedOneNew,
        },
    };
}