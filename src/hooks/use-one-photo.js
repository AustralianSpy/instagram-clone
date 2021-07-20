import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getSinglePost } from '../services/firebase';

export default function useOnePhoto(photoId) {
    const [photo, setPhoto] = useState(null);
    const {
        user: { uid: userId = '' }
    } = useContext(UserContext);

    useEffect(() => {
        async function getPhotoFromProfile() {
            const singlePhoto =  await getSinglePost(photoId, userId);

            setPhoto(singlePhoto);
        }

        getPhotoFromProfile();
    }, [userId]); //[user?.userId, user?.following]

    return { photo };
}