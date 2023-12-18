import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { ProfileCardComponent } from "../../components/profile-card/profile-card.component.tsx";
import { LoadingComponent } from "../../components/loading/loading.component.tsx";
import {BtnComponent} from "../../components/btn/btn.component.tsx";

// type LoremApiData = {
//   title: string,
//   content: string,
//   author: string,
// }
type ApiResponse = {
  status: string;
  code: number;
  total: number;
  data: DataItem[];
}

type DataItem = {
  customfield1: string;
  customfield2: string;
  customfield3: string;
}

export default function ProfileComponent() {
  const [profileData, setProfileData] = useState<DataItem>();
  const [loading, setLoading] = useState(true);

  const { profileId } = useParams();

  console.log('i render');
  useEffect( () => {
    const fetchData = async () => {
      console.log('run use efect');
      try {
        setLoading(true);
        const response = await fetch('https://fakerapi.it/api/v1/custom?_quantity=1&customfield1=name&customfield2=word&customfield3=text');
        if (!response.ok ) {
          throw new Error(`Error: ${response.status}`);
        }

        const result: ApiResponse = await response.json();
        const textData: DataItem = {
          customfield1: result.data[0].customfield1,
          customfield2: result.data[0].customfield2,
          customfield3: result.data[0].customfield3,

        }
        setProfileData(textData);
      } catch (error) {
        throw new Error('Error while processing');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[]);

  return (
    <div className='bg-slate-800 min-h-screen max-w-screen text-slate-50 flex flex-col justify-center items-center p-[20px]'>
      {
        loading ? (
          <LoadingComponent />
        ) : (
          <div className='flex justify-center items-center flex-col'>
            <div className='text-[160px] max-sm:text-[32px] text-center'>Cat {profileId} Profile</div>
            {
              profileData ? <ProfileCardComponent imageSrc={`https://cdn2.thecatapi.com/images/${profileId}.jpg`}
                                  title={profileData.customfield1}
                                  content={profileData.customfield3}
                                  author={profileData.customfield2}/> : null
            }
            <BtnComponent text='Gallery' link='/' style=''></BtnComponent>
          </div>
        )
      }
    </div>
  )
}

