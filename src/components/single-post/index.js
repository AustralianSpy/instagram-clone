import { useRef } from 'react';
import { PropTypes } from 'prop-types';
import Header from './header';
import Image from './image';
import Actions from './actions';
import Footer from './footer';
import Comments from './comments';

export default function Post({ content }) {
    const commentInput = useRef(null);
    const handleFocus = () => commentInput.current.focus();
    
    return content?.imageSrc ? (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen rounded border bg-white border-gray-primary">
            <div className="flex w-2/3">
                <Image src={content.imageSrc} caption={content.caption} />
            </div>
            <div className="flex flex-col w-1/3 h-full border-l border-gray-primary">
                <Header username={content.username} className="align-baseline" />
                <Footer caption={content.caption} username={content.username} />
                <Comments 
                    docId={content.docId}
                    comments={content.comments}
                    posted={content.dateCreated}
                    commentInput={commentInput}
                />   
                <Actions 
                    docId={content.docId}
                    totalLikes={content.likes.length}
                    likedcontent={content.userLikedcontent}
                    handleFocus={handleFocus}
                    className="align-bottom"
                /> 
            </div>
            
        </div>
    ) : null;
}

Post.propTypes = {
    content: PropTypes.shape({
        username: PropTypes.string,
        imageSrc: PropTypes.string,
        caption: PropTypes.string,
        docId: PropTypes.string,
        userLikedcontent: PropTypes.bool,
        likes: PropTypes.array,
        comments: PropTypes.array,
        dateCreated: PropTypes.number
    }).isRequired
};