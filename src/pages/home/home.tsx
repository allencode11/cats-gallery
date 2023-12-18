import { useEffect, useState } from "react";
import { ImageCardComponent } from "../../components/image-card/image-card.tsx";
import { LoadingComponent } from "../../components/loading/loading.component.tsx";

type ApiData = {
    id: string,
    url: string,
    width: number,
    height: number,
}
export default function HomeComponent() {
  const [data, setData] = useState<ApiData[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect( () => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        throw new Error('Error while processing');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='bg-slate-800 min-h-screen text-slate-50 min-w-screen flex flex-col justify-center items-center'>
      {
        loading ? <LoadingComponent /> :
          (
            <div>
              <div className='text-[160px] max-sm:text-[32px] text-center'>Cats Gallery</div>
              <div className={'flex flex-wrap justify-center items-center'}>
                {
                  data.map(element => (
                    <ImageCardComponent key={element.id} imageSrc={element.url} link={element.id} />
                  ))
                }
              </div>
            </div>
          )
      }
    </div>
  )
}
