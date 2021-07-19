import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';
import Post from './post';

// we need to get the logged in user's photos
// on loading photos, use react skeleton
// if we have photos, render them as a post component
// if the user has no photos, tell them to create some photos

export default function Timeline() {
    const { photos } = usePhotos();
    
    return (
        <div className="container col-span-2 p-2">
            {!photos ? (
                    <Skeleton count={4} width={640} height={500} />
            ) : photos?.length > 0 ? (
                photos.map((content) => <Post key={content.docId} content={content} />)
            ) : (
                <p className="text-center text-2xl">Follow people to see photos!</p>
            )}
        </div>
    );
}