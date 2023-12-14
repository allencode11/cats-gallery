import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import {ProfileCardComponent} from "../../components/profile-card/profile-card.component.tsx";

type LoremApiData = {
  title: string,
  content: string,
  author: string,
}

export default function ProfileComponent() {
  const [profileData, setProfileData] = useState<LoremApiData>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { profileId } = useParams();

  useEffect( () => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakerapi.it/api/v1/custom?_quantity=1&customfield1=name&customfield2=word&customfield3=text');

        if (!response.ok ) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        const textForProfile = {
          author: result.data[0].customfield1,
          title: result.data[0].customfield2,
          content: result.data[0].customfield3,

        }
        setProfileData(textForProfile);
      } catch (error) {
        throw new Error('Error while processing');
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[]);

  return (
    <div className='bg-slate-800 min-h-screen text-slate-50 min-w-screen flex flex-col justify-center items-center'>
      <div className='text-[160px] max-sm:text-[32px] text-center'>Cat {profileId} Profile</div>
      <ProfileCardComponent imageSrc={`https://cdn2.thecatapi.com/images/${profileId}.jpg`}
                            title={profileData?.title}
                            content={profileData?.content}
                            author={profileData?.author}/>
    </div>
  )
}

