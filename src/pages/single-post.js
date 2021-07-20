import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router';
import useOnePhoto from '../hooks/use-one-photo';
import Post from '../components/single-post';
import Header from '../components/header';

// we need to get the logged in user's photos
// on loading photos, use react skeleton
// if we have photos, render them as a post component
// if the user has no photos, tell them to create some photos

export default function SinglePost() {
    const { photoId } = useParams();
    const { photo } = useOnePhoto(Number(photoId));

    // need hook not not just firebase call --> const { photo } = await getSinglePost(photoId);
    
    return (
        <div className="bg-gray-background">
            <Header />
            <div className="container col-span-2 mb-8">
            {!photo ? (
                    <Skeleton count={1} width={640} height={500} />
            ) : photo.map((content) => <Post key={content.docId} content={content} />)
            }
            </div>
        </div>
    );
}