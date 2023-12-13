import { useEffect, useState } from "react";
import { ImageCardComponent } from "../../components/image-card/image-card.tsx";

type ApiData = {
    id: string,
    url: string,
    width: number,
    height: number,
}
export default function HomeComponent() {
  const [data, setData] = useState<ApiData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


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
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='bg-slate-800 min-h-screen text-slate-50 min-w-screen flex flex-col justify-center items-center'>
      <div className='text-[160px]'>Cats Gallery</div>
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
